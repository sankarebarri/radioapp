import random
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from channels.models import Channel, UserChannel
from broadcasts.models import Broadcast
from datetime import datetime, timedelta


class Command(BaseCommand):
    help = "Populate the database with fake data for testing"

    def handle(self, *args, **kwargs):
        self.create_users()
        self.create_channels()
        self.create_broadcasts()
        self.create_user_channels()
        self.stdout.write(self.style.SUCCESS("Successfully populated database with fake data."))

    def create_users(self):
        usernames = ["Alice", "Bob", "Charlie", "David", "Emma", "Fiona", "George", "Hannah", "Ivy", "Jack"]
        profile_images = [f"https://picsum.photos/seed/{username}/200" for username in usernames]

        for i, username in enumerate(usernames):
            unique_username = username
            counter = 1

            while User.objects.filter(username=unique_username).exists():
                unique_username = f"{username}{counter}"
                counter += 1
            user = User.objects.create_user(username=unique_username, password="123456")
            user.profile.bio = f"This is the bio of {unique_username}"
            user.profile.profile_image = profile_images[i]
            user.profile.save()

    def create_channels(self):
        genres = ["Jazz", "Pop", "Rock", "Classical", "News", "Hip-Hop", "Electronic", "Country", "Talk Show", "Sports"]
        countries = ["Mali", "Burkina", "Niger", "Nigeria", "USA"]
        states = ["Bamako", "Ougadougou", "Niamey", "Lagos", "Washington"]

        for i in range(1, 51):
            name = f"Channel {i}"
            genre = random.choice(genres)
            country = random.choice(countries)
            state = random.choice(states)
            owner = User.objects.order_by("?").first() # select a random user
            followers_count = random.randint(500, 10000)
            logo_url = f"https://picsum.photos/seed/channel{i}/100"

            Channel.objects.create(
                name=name,
                genre=genre,
                country=country,
                state=state,
                frequency=f"{random.randint(88,108), random.randint(0,9)}",
                description=f"This is the {genre} channel broadcasting from {country}, {state}.",
                logo_url=logo_url,
                followers_count=followers_count,
                owner=owner,
            )

    def create_broadcasts(self):
        for i in range(1, 201):
            title = f"Broadcast {i}"
            description = f"This is the description of Broadcast {i}."
            channel = Channel.objects.order_by("?").first() # Select a random channel
            audio_url = f"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-{random.randint(1,17)}.mp3"
            scheduled_time = datetime.now() + timedelta(days=random.randint(-30, 30))

            Broadcast.objects.create(
                title=title,
                description=description,
                audio_url=audio_url,
                channel=channel,
                likes_count=random.randint(1, 201),
                plays_count=random.randint(50, 1000),
                downloads_count=random.randint(5, 300),
                scheduled_time=scheduled_time
            )

    def create_user_channels(self):
        users = User.objects.all()
        channels = Channel.objects.all()

        for user in users:
            followed_channels = random.sample(list(channels), random.randint(5, 15))
            for channel in followed_channels:
                UserChannel.objects.get_or_create(user=user, channel=channel)
