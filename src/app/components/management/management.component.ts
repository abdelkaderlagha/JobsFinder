import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { company } from 'src/app/models/company';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  companies:company[];
  isAdmin:boolean;
  isUser:boolean;
  isPM:boolean;
 
  constructor(
    private serviceCompany:CompanyService,
    private router:Router,
    private toastr:ToastrService
  ){}
  
  ngOnInit() {
   

  }
  get token(){
    let token = localStorage.getItem("Authorization");
    return token;
  }

  reloadData(token){
    this.serviceCompany.allCompanies(token).subscribe(
      (res)=>this.companies = res
    );
  }
  

  }


