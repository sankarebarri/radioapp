# broadcasts/models.py

from django.db import models
from channels.models import Channel  # Import the Channel model to establish a relationship

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
