from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('tasks/', include('tasks.urls')) # Importamos todas las rutas que hay en el archivo urls de la app tasks
]
