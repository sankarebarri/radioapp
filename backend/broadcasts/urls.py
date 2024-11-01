#broadcasts.urls
from django.urls import path
from .views import BroadcastListView
from .views import FollowedBroadcastsView


urlpatterns = [
    path("", BroadcastListView.as_view(), name="broadcast-list"),
    path('followed-broadcasts/', FollowedBroadcastsView.as_view(), name='followed-broadcasts'),
]