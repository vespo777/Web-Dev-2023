import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {CompaniesComponent} from "./companies/companies.component";


const routes: Routes = [
  // {path: '', component: CompaniesComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'companies/:id/vacancies', component: CompanyDetailComponent}
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
