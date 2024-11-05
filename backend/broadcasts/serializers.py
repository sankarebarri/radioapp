#broadcasts.serializers
from rest_framework import serializers
from .models import Broadcast, UserBroadcast

class BroadcastSerializer(serializers.ModelSerializer):
    channel_name = serializers.CharField(source='channel.name', read_only=True)
    user_interactions = serializers.SerializerMethodField()

    class Meta:
        model = Broadcast
        fields = "__all__"

    def get_user_interactions(self, broadcast):
        request = self.context.get("request")
        if request.user.is_authenticated:
            try:
                user_broadcast = UserBroadcast.objects.get(user=request.user, broadcast=broadcast)
                return UserBroadcastSerializer(user_broadcast).data
            except UserBroadcast.DoesNotExist:
                return None
        return None


class UserBroadcastSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserBroadcast
        fields = ['liked', 'downloaded', 'is_listened_to']
