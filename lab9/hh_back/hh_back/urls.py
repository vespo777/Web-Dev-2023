"""hh_back URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/companies/', views.list_all_companies),
    path('api/companies/<int:id>/', views.get_company_by_id),
    path('api/companies/<int:id>/vacancies/', views.list_vacancies_of_company),
    path('api/vacancies/', views.list_all_vacancies),
    path('api/vacancies/<int:id>/', views.get_vacancy_by_id),
    path('api/vacancies/top_ten/', views.top_ten_vacancies)
]
