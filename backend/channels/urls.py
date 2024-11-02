from django.urls import path
# from .views import FollowedChannelsView
from .views import ChannelListView, ChannelDetailView

urlpatterns = [
    # path('followed-channels/', FollowedChannelsView.as_view(), name='followed-channels'),
    path('browse/', ChannelListView.as_view(), name='channel-list'),
    path('channels/<str:id>/', ChannelDetailView.as_view(), name='channel-detail'),
]
