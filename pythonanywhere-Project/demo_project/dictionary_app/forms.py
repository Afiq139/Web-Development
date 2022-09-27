from django import forms
from dictionary_app.models import Word

class WordForm(forms.ModelForm):
    field_order = ['word', 'meaning']
    class Meta():
        model = Word
        fields = ('word','meaning')