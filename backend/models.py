from django.db import models

# Create your models here.
class React(models.Model):
    eventName = models.CharField(max_length=30)
    formLink    = models.CharField(max_length=30)
    photo = models.ImageField(upload_to='photos/', null=True, blank=True)

class Team(models.Model):
    name = models.CharField(max_length=30)
    position    = models.CharField(max_length=30)
    photo = models.ImageField(upload_to='photos/', null=True, blank=True)