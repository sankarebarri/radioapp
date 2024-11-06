from rest_framework import generics
from .models import Broadcast, UserBroadcast
from .serializers import BroadcastSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from channels.models import UserChannel
from .pagination import CustomPageNumberPagination

class BroadcastListView(generics.ListAPIView):
    queryset = Broadcast.objects.all()
    serializer_class = BroadcastSerializer

class BroadcastDetailView(generics.RetrieveAPIView):
    queryset = Broadcast.objects.all()
    serializer_class = BroadcastSerializer
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
# from .models import Broadcast
# from .serializers import BroadcastSerializer

# class FollowedBroadcastsView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         # Get broadcasts from followed channels
#         followed_channels = UserChannel.objects.filter(user=request.user).values_list('channel', flat=True)
#         broadcasts = Broadcast.objects.filter(channel_id__in=followed_channels).order_by('-timestamp')
#         serializer = BroadcastSerializer(broadcasts, many=True)
#         return Response(serializer.data)

class AllBroadcastsView(generics.ListAPIView):
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Broadcast.objects.all()

    def get_serializer_class(self):
        return BroadcastSerializer

class FolowedChannelsBroadcastsView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        user = self.request.user
        followed_channels = UserChannel.objects.filter(user=user).values_list('channel', flat=True)
        return Broadcast.objects.filter(channel_id__in=followed_channels)

    def get_serializer_class(self):
        return BroadcastSerializer

class UserBroadcastListView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    pagination_class = CustomPageNumberPagination

    def get_queryset(self):
        return Broadcast.objects.all()

    def get_serializer_context(self):
        return {'request': self.request}

    def get_serializer_class(self):
        return BroadcastSerializer


from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
class BroadcastInteractionView(APIView):
    def post(self, request, broadcast_id):
        try:
            broadcast = Broadcast.objects.get(id=broadcast_id)
            user_broadcast, created = UserBroadcast.objects.get_or_create(
                user=request.user,
                broadcast=broadcast
            )
            if request.data.get('like') is not None:
                # toggle like
                user_broadcast.liked = not user_broadcast.liked
                user_broadcast.save()

                # updates likes count
                if user_broadcast.liked:
                    broadcast.likes_count += 1
                else:
                    broadcast.likes_count -= 1
                broadcast.save()
                return Response({'message': 'Broadcast liked'}, status=status.HTTP_200_OK)

            if request.data.get('download'):
                user_broadcast.downloaded = True
                user_broadcast.save()
                return Response({'message': 'Broadcast downloaded!'}, status=status.HTTP_200_OK)

            if request.data.get('listen'):
                user_broadcast.is_listened_to = True
                user_broadcast.save()
                return Response({'message': 'Broadcast listened to!'}, status=status.HTTP_200_OK)

            return Response({'error': 'Invalid action'}, status=status.HTTP_400_BAD_REQUEST)




        except UserBroadcast.DoesNotExist:
            return Response({'error': 'Broadcast not fount'}, status=status.HTTP_404_NOT_FOUND)