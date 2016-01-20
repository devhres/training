from django.conf.urls import url, include
from rest_framework import routers
from .views import CategoriaViewSet
from .views import LibroViewSet

router = routers.DefaultRouter()
router.register(r'categorias', CategoriaViewSet)
router.register(r'libros', LibroViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
