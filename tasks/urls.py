# Este archivo lo hemos creado manualmente
from django.urls import path, include
from rest_framework import routers
from tasks import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

urlpatterns = [
	path('api/', include(router.urls))
	# Las rutas generadas por la línea anterior son:
	# 	http://localhost:8000/tasks/api/tasks   GET listar todas las tareas, POST(Pasándole el respectivo JSON)
	# 	http://localhost:8000/tasks/api/tasks/numero_de_taera   GET, PUT y PATCH(Pasándole el respectivo JSON) y DELETE, hace alguna de estas acciones dependiendo del id que se pase x url	
]