from rest_framework import serializers
from .models import Broadcast

class BroadcastSerializer(serializers.ModelSerializer):
    class Meta:
        models = Broadcast
        fields = [
            'id',
            'title',
            'description',
            'audio_url',
            'timestamp',
            'channel',  # This will return the channel ID by default
        ]