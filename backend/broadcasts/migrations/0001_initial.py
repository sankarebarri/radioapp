# Generated by Django 5.1.2 on 2024-10-31 17:50

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('channels', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Broadcast',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('description', models.TextField(blank=True)),
                ('audio_url', models.URLField()),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('likes_count', models.IntegerField(default=0)),
                ('plays_count', models.IntegerField(default=0)),
                ('downloads_count', models.IntegerField(default=0)),
                ('scheduled_time', models.DateTimeField(blank=True, null=True)),
                ('channel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='broadcasts', to='channels.channel')),
            ],
        ),
    ]
