from rest_framework import serializers
from .models import Channel, UserChannel

class ChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channel
        fields ="__all__"


class UserChannelSerializer(serializers.ModelSerializer):
    channel = ChannelSerializer()
    class Meta:
        model = UserChannel
        fields = ["channel"]