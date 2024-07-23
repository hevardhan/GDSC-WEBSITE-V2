from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
from rest_framework.response import Response
from rest_framework import generics


# Create your views here.    
class EmployeeListCreateView(generics.ListCreateAPIView):
    queryset = React.objects.all()
    serializer_class = ReactSerializer