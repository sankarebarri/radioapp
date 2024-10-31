from django.urls import path
from .views import BroadcastListView

urlpatterns = [
    path("", BroadcastListView.as_view(), name="broadcast-list"),
]