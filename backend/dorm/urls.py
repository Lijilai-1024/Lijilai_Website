from django.urls import path
from .views import getDorm
urlpatterns = [
    path('getDorm/', getDorm.as_view()),
]