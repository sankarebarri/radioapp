#broadcasts.serializers
from rest_framework import serializers
from .models import Broadcast

class BroadcastSerializer(serializers.ModelSerializer):
    channel_name = serializers.CharField(source='channel.name', read_only=True)  # Add this line

    class Meta:
        model = Broadcast
        fields = "__all__"