# Generated by Django 5.1.2 on 2024-11-03 16:59

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('broadcasts', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserBroadcast',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('liked', models.BooleanField(default=False)),
                ('downloaded', models.BooleanField(default=False)),
                ('is_listened_to', models.BooleanField(default=False)),
                ('interaction_at', models.DateTimeField(auto_now_add=True)),
                ('broadcast', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_interactions', to='broadcasts.broadcast')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='broadcast_interactions', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('user', 'broadcast')},
            },
        ),
    ]
