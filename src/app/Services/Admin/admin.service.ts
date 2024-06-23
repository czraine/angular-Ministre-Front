import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly baseUrl:string="http://localhost:8075/pfe/admin"

  
  constructor(private router: Router,
    private httpClient : HttpClient
    ) { }

  public SuperAdminaddAdmin(data :any) {
    const tokenUser = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenUser}`);

    return this.httpClient.post(this.baseUrl+"/adminadd",data,{headers});

  }

  public disableUser(email:string){
    const tokenUser = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenUser}`);
    return this.httpClient.put(`${this.baseUrl}disableUser/${email}`,null, { headers });
  }

  public enableUser(email:string){
    const tokenUser = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tokenUser}`);
    return this.httpClient.put(`${this.baseUrl}enableUser/${email}`,null, { headers });
  }


  public forgetPassword(email:string){
    const body ={email : email}
    return this.httpClient.post(this.baseUrl+"forgetPassword",body);
  }

  public resetPassword(data :any){
    return this.httpClient.post(this.baseUrl+"resetPassword",data);
  }

  public getToken(): string {
    return JSON.parse(JSON.stringify(localStorage.getItem('token')));
  }
}
