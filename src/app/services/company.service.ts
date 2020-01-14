import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = "http://localhost:2020/rest/api/";

  constructor(private http:HttpClient) { }
  
  allCompanies(token){
    var header_object = new HttpHeaders().set("Authorization",token);
    const httpOptions = {
      headers:header_object
    };
    return this.http.get<any>(this.url+"company",httpOptions);
  }
  getCompany(id:number,token){
    var header_objects = new HttpHeaders().set("Authorization",token);
    const httpOptions = {
      headers : header_objects
    };
    return this.http.get<any>(this.url+"company/"+id,httpOptions);
  }
  addCompany(token){
  var header_object= new HttpHeaders().set("Authorization",token);
  const httpOptions={
    headers:header_object,
  } ;   
  return this.http.post<any>(this.url+"company",company,httpOptions);
  }
  deleteCompany(token, id:number){
    var header_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers:header_object
    };
    return this.http.delete<any>(this.url+"company/"+id,httpOptions);
  }
  updateCompany(token, id:number){
    var header_object = new HttpHeaders().set("Authorization", token);
    const httpOptions = {
      headers:header_object,
    }
    return this.http.put<any>(this.url+"company/"+id, httpOptions);

  }
}
