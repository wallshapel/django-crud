from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.
class TaskView(viewsets.ModelViewSet): # Con esta clase indicaremos que queremos las típicas operaciones CRUD con nuestro modelo 'Task'
	serializer_class = TaskSerializer
	queryset = Task.objects.all()
