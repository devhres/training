from django.conf.urls import url, include
from rest_framework import routers
from .views import CategoriaViewSet


router = routers.DefaultRouter()
router.register(r'categorias', CategoriaViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
