from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User(AbstractUser):
    #dont need to define username and password as they are built in
    email = models.EmailField(max_length=255, unique=True, blank=False, null=False) #makes email a required field
    #Instrument required but not unique
    instrument = models.CharField(max_length=255, blank=False, null=False)
    REQUIRED_FIELDS = ['email', 'instrument'] #fields besides username and password to create user