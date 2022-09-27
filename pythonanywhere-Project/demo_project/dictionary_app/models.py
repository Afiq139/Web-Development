from django.db import models

# Create your models here.
class Word(models.Model):
    word = models.CharField(max_length= 30, unique=True)
    meaning = models.CharField(max_length= 255)