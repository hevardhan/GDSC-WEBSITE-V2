from rest_framework import serializers
from . models import *

class ReactSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = React
        fields = ['eventName', 'formLink', 'photo']


class ReactSerializer2(serializers.ModelSerializer):
    
    class Meta:
        model = Team
        fields = ['name', 'position', 'photo']


