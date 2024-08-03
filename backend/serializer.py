from rest_framework import serializers
from . models import *

class ReactSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = React
        fields = ['Event_Name', 'Form_Link', 'Date','Poster' ]


class ReactSerializer2(serializers.ModelSerializer):
    
    class Meta:
        model = Team
        fields = ['Name', 'Position',"Facebook_Link","Linkedin_Link","Github_Link",'Photo']


