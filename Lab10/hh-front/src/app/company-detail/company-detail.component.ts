import {Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "../models";
import {CompanyService} from "../company.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit{
  vacancies: Vacancy[] = [];
  company : Company;

  constructor(private companyService: CompanyService, private route : ActivatedRoute) {
    this.company = {} as Company

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) =>{
          const id = Number(params.get('id'));
          this.companyService.getCompany(id).subscribe((company) =>{
            this.company = company;
          })
          this.companyService.getVacancies(id).subscribe((vacancies) => {
            this.vacancies = vacancies;
          });
        })

  }


}
