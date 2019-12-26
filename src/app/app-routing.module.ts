import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ManagementComponent } from './components/management/management.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';
import { CompanyAddComponent } from './components/company-add/company-add.component';
import { CompanyUpdateComponent } from './components/company-update/company-update.component';
import { JobAddComponent } from './components/job-add/job-add.component';
import { JobUpdateComponent } from './components/job-update/job-update.component';


const routes: Routes = [

  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'management', component:ManagementComponent},
  {path:'category-add', component:CategoryAddComponent},
  {path:'category-update', component:CategoryUpdateComponent},
  {path:'company-add', component:CompanyAddComponent},
  {path:'company-update', component:CompanyUpdateComponent},
  {path:'job-add', component:JobAddComponent},
  {path:'job-update', component:JobUpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
