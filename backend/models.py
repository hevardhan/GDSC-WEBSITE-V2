from django.db import models

# Create your models here.
class React(models.Model):
    Event_Name = models.CharField(max_length=30, null=True, blank=True)
    Form_Link    = models.CharField(max_length=30, null=True, blank=True)
    Date        = models.DateField(null=True, blank=True)
    Poster = models.ImageField(upload_to='events/', null=True, blank=True)

class Team(models.Model):
    Name = models.CharField(max_length=30, null=True, blank=True)
    Position    = models.CharField(max_length=30, null=True, blank=True)    
    Facebook_Link    = models.CharField(max_length=30, null=True, blank=True)
    Linkedin_Link    = models.CharField(max_length=30, null=True, blank=True)
    Github_Link    = models.CharField(max_length=30, null=True, blank=True)
    Photo = models.ImageField(upload_to='photos/', null=True, blank=True)