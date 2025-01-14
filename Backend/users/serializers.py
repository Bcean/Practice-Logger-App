from django.contrib.auth import get_user_model
from rest_framework import serializers
#serializer converts data to json so front and back end can communicate
User = get_user_model()
class UserSerializer(serializers.ModelSerializer): #creates object to complete each??
    class Meta:
        model = User 
        fields = ['id', 'username', 'email', 'instrument']
        extra_kwargs = {
            'password': {'write_only': True}, #makes password write only
        }

    def create(self, validated_data):
        # Use the create_user method to ensure the password is hashed
        return User.objects.create_user(**validated_data)