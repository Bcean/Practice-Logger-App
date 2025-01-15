from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
import logging

# Set up the logger
logger = logging.getLogger(__name__)

# Create your views here.


#only triggers function on a post request
@api_view(['POST'])
def register_user(request):
    if request.method == 'POST': #if its a post request then convert data to json and give it here and send to data base. only if its with this specific endpoint
        serializer = UserSerializer(data=request.data) #refer to class and create object with front end data
        if serializer.is_valid():#checks if data matches serializer requirements eg.in models.py
            serializer.save() #save converted user data
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED) #successful request
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) #else bad request

@api_view(['POST'])
def login_user(request):

    #JWT Token generation 
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        

        user = authenticate(request, username=username, password=password) #checks if credentials are valid otherwise it returns None
        if user is not None: #if user is valid
            refresh = RefreshToken.for_user(user) #creates refreshtoken so you can get a new access token without having to login
            return Response({
                'access_token': str(refresh.access_token),
                'refresh_token': str(refresh),
            }, status=status.HTTP_200_OK)
        # status can be refered to when logging in to grant access to website eg if status is ok then load page
        print(f"Authentication failed for username: {username}")
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    #this can be used as a possible response in the front end to say "wrong username or password"

#only triggers function on a get request
@api_view(['GET'])
def get_username(request):
    if not request.user.is_authenticated: #check if its a get request
        return Response({'error': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST) #if theres a bad request
    user = request.user #get user from request
    return Response({'username': user.username}, status=status.HTTP_200_OK) #return username