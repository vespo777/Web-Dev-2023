from django.shortcuts import render
from django.http import HttpResponse
from .models import Vacancy, Company
from django.http import JsonResponse
from django.forms.models import model_to_dict


def list_all_companies(request):
    companies = Company.objects.all() 
    data = {"companies" : list(companies.values())}
    return JsonResponse(data)


def get_company_by_id(request, id):
    company = Company.objects.get(pk = id) 
    data = model_to_dict(company)
    return JsonResponse(data)


def list_vacancies_of_company(request, id):
    vacancies =  Vacancy.objects.filter(company_id = id)

    data = {"vacancies" : list(vacancies.values())}
    return JsonResponse(data)


def list_all_vacancies(request):
    vacancies =  Vacancy.objects.all()

    data = {"vacancies" : list(vacancies.values())}
    return JsonResponse(data)


def get_vacancy_by_id(request, id):
    vacancy = Vacancy.objects.get(pk = id) 
    data = model_to_dict(vacancy)
    return JsonResponse(data)


def top_ten_vacancies(request):
    vacancies =  Vacancy.objects.all()[0:10]

    data = {"top 10 vacancies by salary" : list(vacancies.values())}
    return JsonResponse(data)

