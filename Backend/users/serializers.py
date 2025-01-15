from django.contrib.auth import get_user_model
from rest_framework import serializers
#serializer converts data to json so front and back end can communicate
User = get_user_model()
class UserSerializer(serializers.ModelSerializer): #creates object to complete each field in the model
    class Meta:
        model = User 
        fields = ['id', 'username', 'email', 'instrument', 'password']
        extra_kwargs = {
            'password': {'write_only': True}, #makes password write only
        }

    def create(self, validated_data):
        print("Validated Data:", validated_data)  # Log the incoming data
        # Use the create_user method to ensure the password is hashed
        user = User.objects.create_user(**validated_data)
        print("User created with username:", user.username)
        return user