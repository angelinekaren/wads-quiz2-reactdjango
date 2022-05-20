from .models import Hero
from rest_framework import serializers 
# from djongo import models
# from rest_meets_djongo import serializers

class HeroSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Hero 
        fields = ('name', 'alias')