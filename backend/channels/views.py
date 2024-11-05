# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
# from .models import UserChannel
# from .serializers import ChannelSerializer

# class FollowedChannelsView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         # Get channels followed by the user
#         followed_channels = UserChannel.objects.filter(user=request.user).values_list('channel', flat=True)
#         channels = Channel.objects.filter(id__in=followed_channels)
#         serializer = ChannelSerializer(channels, many=True)
#         return Response(serializer.data)

from rest_framework import generics
from .models import Channel
from rest_framework.permissions import AllowAny
from .serializers import ChannelSerializer
# from .pagination import CustomPageNumberPagination

class ChannelListView(generics.ListAPIView):
    queryset = Channel.objects.all()
    serializer_class = ChannelSerializer
    permission_classes = [AllowAny]  # Allow access to all users
    # pagination_class = CustomPageNumberPagination


# class ChannelDetailView(generics.RetrieveAPIView):
#     queryset = Channel.objects.all()
#     serializer_class = ChannelSerializer

from .models import UserChannel
from .serializers import UserChannelSerializer
class FollowedChannelsView(generics.ListAPIView):
    permission_classes = [AllowAny] 
    def get_queryset(self):
        user = self.request.user
        return UserChannel.objects.filter(user=user)

    def get_serializer_class(self):
        return UserChannelSerializer

