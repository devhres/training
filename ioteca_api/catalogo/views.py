from rest_framework import serializers, viewsets
from .models import Categoria
from .models import Libro


class CategoriaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Categoria
        # fields = ('url', 'nombre', 'codigo', 'estado')


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class LibroSerializer(serializers.ModelSerializer):

    class Meta:
        model = Libro
        # fields = ('url', 'nombre', 'codigo', 'estado')


class LibroViewSet(viewsets.ModelViewSet):
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer
