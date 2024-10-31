from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import UserProfile
from .serializers import UserProfileSerializer
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.authentication import TokenAuthentication



class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (IsAuthenticated,)
    

    def get(self, request):
        # print("Received data:", request.data)
        # print("Authorization Header:", request.headers.get("Authorization"))
        # print("User from request:", request.user)
        try:
            profile = UserProfile.objects.get(user=request.user)
            # profile = request.user.profile
            # profile, created = UserProfile.objects.get_or_create(user=request.user)
            serializer = UserProfileSerializer(profile)
            return Response(serializer.data)
        except UserProfile.DoesNotExist:
            return Response({"error": "User profile not found"}, status=404)
