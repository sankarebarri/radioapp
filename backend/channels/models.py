# channels/models.py

from django.db import models
from django.contrib.auth.models import User  # Import the default User model

class Channel(models.Model):
    # Fields
    name = models.CharField(max_length=100)
    genre = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    state = models.CharField(max_length=50, blank=True, null=True)
    frequency = models.CharField(max_length=20, blank=True, null=True)
    description = models.TextField(blank=True)
    logo_url = models.URLField(max_length=200, blank=True, null=True)
    followers_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    # Foreign key to the owner
    owner = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name="owned_channels"
    )

    def __str__(self):
        return f"{self.name} - {self.genre} ({self.country})"
