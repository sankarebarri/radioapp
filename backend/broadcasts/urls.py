#broadcasts.urls
from django.urls import path
from .views import BroadcastListView
from .views import (
    AllBroadcastsView, FolowedChannelsBroadcastsView,
    UserBroadcastListView, BroadcastDetailView,
    BroadcastInteractionView
)



urlpatterns = [
    path("", BroadcastListView.as_view(), name="broadcast-list"),
    path('broadcasts/', AllBroadcastsView.as_view(), name='all-broadcasts'),
    path('followed-broadcasts/', FolowedChannelsBroadcastsView.as_view(), name='followed-broadcasts'),
    path('user-broadcasts/', UserBroadcastListView.as_view(), name='user-broadcasts'),
    path('broadcasts/<int:pk>/', BroadcastDetailView.as_view(), name='broadcast-detail'),

    path('broadcasts/<int:broadcast_id>/like/', BroadcastInteractionView.as_view(), name='broadcast-like'),
    path('broadcasts/<int:broadcast_id>/download/', BroadcastInteractionView.as_view(), name='broadcast-download'),
    path('broadcasts/<int:broadcast_id>/listen/', BroadcastInteractionView.as_view(), name='broadcast-listen'),
]