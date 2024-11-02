#broadcasts.urls
from django.urls import path
from .views import BroadcastListView
# from .views import FollowedBroadcastsView, AllBroadcastsView
from .views import AllBroadcastsView, FolowedChannelsBroadcastsView



urlpatterns = [
    path("", BroadcastListView.as_view(), name="broadcast-list"),
    # path('followed-broadcasts/', FollowedBroadcastsView.as_view(), name='followed-broadcasts'),
    path('broadcasts/', AllBroadcastsView.as_view(), name='all-broadcasts'),
    path('followed-broadcasts/', FolowedChannelsBroadcastsView.as_view(), name='followed-broadcasts'),
]