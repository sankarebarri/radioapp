# from rest_framework.views import APIView
# from rest_framework.response import Response
# from .models import Broadcast
# from .serializers import BroadcastSerializer

# class BroadcastListView(APIView):
#     def get(self, request):
#         try:
#             broadcast = Broadcast.objects.all()
#             serializer = BroadcastSerializer(broadcast)
#             return Response(serializer.data)
#         except Broadcast.DoesNotExist:
#             return Response({"error": "Broadcast not found"}, status=404)

#broadcasts.views
from rest_framework import generics
from .models import Broadcast
from .serializers import BroadcastSerializer

class BroadcastListView(generics.ListAPIView):
    queryset = Broadcast.objects.all()
    serializer_class = BroadcastSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Broadcast
from .serializers import BroadcastSerializer

class FollowedBroadcastsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Get broadcasts from followed channels
        followed_channels = UserChannel.objects.filter(user=request.user).values_list('channel', flat=True)
        broadcasts = Broadcast.objects.filter(channel_id__in=followed_channels).order_by('-timestamp')
        serializer = BroadcastSerializer(broadcasts, many=True)
        return Response(serializer.data)
