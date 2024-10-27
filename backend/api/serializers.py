from rest_framework import serializers
from django.contrib.auth.models import User

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    # password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        # fields = ('username', 'first_name', 'last_name', 'email', 'password', 'password2')
        fields = ('username', 'email', 'password')

    # def validate_username(self, value):
    #     if User.objects.filter(username=value).exists():
    #         raise serializers.ValidationError('A user with this username already exists.')
    #     return value
    # def validate(self, data):
    #     if data['password'] != data['password2']:
    #         raise serializers.ValidationError('Passwords do not match')
    #     return data
    def create(self, validated_data):
        # user = User(
        #     username=validated_data['username'],
        #     email=validated_data['email'],
        #     first_name=validated_data['first_name'],
        #     last_name=validated_data['last_name']
        # )
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user