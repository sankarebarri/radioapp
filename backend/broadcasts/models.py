# broadcasts/models.py
from django.db import models
from channels.models import Channel  # Import the Channel model to establish a relationship
from django.contrib.auth.models import User

class Broadcast(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    audio_url = models.URLField(max_length=200)  
    timestamp = models.DateTimeField(auto_now_add=True)

    channel = models.ForeignKey(Channel, on_delete=models.CASCADE, related_name="broadcasts")

    likes_count = models.IntegerField(default=0)
    plays_count = models.IntegerField(default=0)
    downloads_count = models.IntegerField(default=0)

    scheduled_time = models.DateTimeField(blank=True, null=True)  # For future or scheduled broadcasts

    def __str__(self):
        return f"{self.title} - {self.channel.name}"


class UserBroadcast(models.Model):
    id = models.AutoField(primary_key=True)  # Unique identifier for each interaction
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="broadcast_interactions")
    broadcast = models.ForeignKey(Broadcast, on_delete=models.CASCADE, related_name="user_interactions")
    liked = models.BooleanField(default=False)  # True if the user liked the broadcast
    downloaded = models.BooleanField(default=False)  # True if the user downloaded the broadcast
    is_listened_to = models.BooleanField(default=False)  # True if the user has listened to the broadcast
    interaction_at = models.DateTimeField(auto_now_add=True)  # Date and time of the interaction

    class Meta:
        unique_together = ("user", "broadcast")  # Ensure each user can only interact with a broadcast once

    def __str__(self):
        return f"{self.user.username} interaction with {self.broadcast.title}"
