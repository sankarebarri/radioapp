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

from rest_framework import generics
from .models import Broadcast
from .serializers import BroadcastSerializer

class BroadcastListView(generics.ListAPIView):
    queryset = Broadcast.objects.all()
    serializer_class = BroadcastSerializer