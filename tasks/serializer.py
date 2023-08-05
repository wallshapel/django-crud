# Este archivo lo creamos manualmente para convertir objetos en JSON y comunicarlos al frontend
from rest_framework import serializers
from .models import Task # Importamos desde esta misma ubicación al archivo models, su clase Task

class TaskSerializer(serializers.ModelSerializer):
	class Meta:
		model = Task
		fields = ('id', 'title', 'description', 'done') # Aquí incluimos los campos que queremos convertir a JSON
		# El campo id aunque no está en el modelo, se crea automáticamente y aquí sí se tiene que especificar
		# si se desea incluirlos todos los campos, una forma resumida es: fields = '__all__'