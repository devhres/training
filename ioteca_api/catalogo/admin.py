from django.contrib import admin
from catalogo.models import Categoria
from .models import Autor
from .models import Libro
from catalogo.modelos.UnidadMedida import UnidadMedida
# Register your models here.


class CategoriaAdmin(admin.ModelAdmin):
    list_display = ("nombre", "codigo", "estado")
    search_fields = ("nombre", "codigo",)
    list_per_page = 2

admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Autor)


class LibroAdmin(admin.ModelAdmin):
    list_display = ("nombre", "categoria", "created_at", "updated_at")


admin.site.register(Libro, LibroAdmin)
# admin.site.register(UnidadMedida)
