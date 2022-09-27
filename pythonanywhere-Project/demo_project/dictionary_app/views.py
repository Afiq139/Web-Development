from django.shortcuts import render
from dictionary_app.forms import WordForm

from dictionary_app.models import Word
# Create your views here.
def dictionary_view(request):
    if request.method == 'POST':
        form = WordForm(request.POST)
        if form.is_valid():
            form.save()
            form = WordForm()
        else:
            #error
            form = WordForm()
    else:
        form = WordForm()
    
    words = Word.objects.all().order_by('word')
        
    return render(request, 'dictionary.html', {'form': form , 'words':words} )
