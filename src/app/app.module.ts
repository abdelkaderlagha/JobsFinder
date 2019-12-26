import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ManagementComponent } from './components/management/management.component';
import { HomeComponent } from './components/home/home.component';

import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';
import { CompanyAddComponent } from './components/company-add/company-add.component';
import { CompanyUpdateComponent } from './components/company-update/company-update.component';
import { JobAddComponent } from './components/job-add/job-add.component';
import { JobUpdateComponent } from './components/job-update/job-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ManagementComponent,
    HomeComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    CompanyAddComponent,
    CompanyUpdateComponent,
    JobAddComponent,
    JobUpdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
