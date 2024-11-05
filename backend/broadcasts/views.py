from rest_framework import generics
from .models import Broadcast
from .serializers import BroadcastSerializer

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

from rest_framework.permissions import IsAuthenticated, AllowAny
class AllBroadcastsView(generics.ListAPIView):
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Broadcast.objects.all()

    def get_serializer_class(self):
        return BroadcastSerializer

from channels.models import UserChannel
class FolowedChannelsBroadcastsView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        user = self.request.user
        followed_channels = UserChannel.objects.filter(user=user).values_list('channel', flat=True)
        return Broadcast.objects.filter(channel_id__in=followed_channels)

    def get_serializer_class(self):
        return BroadcastSerializer


from .pagination import CustomPageNumberPagination
class UserBroadcastListView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    pagination_class = CustomPageNumberPagination

    def get_queryset(self):
        return Broadcast.objects.all()

    def get_serializer_context(self):
        return {'request': self.request}

    def get_serializer_class(self):
        return BroadcastSerializer