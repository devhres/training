from rest_framework import serializers, viewsets
from .models import Categoria


class CategoriaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Categoria
        # fields = ('url', 'nombre', 'codigo', 'estado')


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
