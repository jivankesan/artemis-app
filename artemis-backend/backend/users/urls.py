from django.urls import path
from .views import register

urlpatterns = [
    path("api/register/", register, name="register"),
    # other paths...
]
