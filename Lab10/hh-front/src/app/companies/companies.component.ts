import {Component, OnInit} from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent{
  companies: Company[] = [];
  newCompany: string = '';

  constructor(
    private companyService: CompanyService
  ) {
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }

  addCompany() {
    this.companyService.createCompany(this.newCompany).subscribe((company) => {
      this.companies.push(company);
      this.newCompany = '';
    });
  }

  deleteCompany(company_id: number) {
    this.companyService.deleteCompany(company_id).subscribe((data) => {
      this.companies = this.companies.filter((company) => company.id !== company_id);
    });
  }
}
