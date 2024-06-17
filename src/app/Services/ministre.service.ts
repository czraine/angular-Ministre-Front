import { Injectable } from '@angular/core';
import { Admin } from './admin.service';
import { Claim } from './claim.service';
import { MinistreEmployee } from './employees.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MinistreService {
  private apiUrl = 'http://localhost:8089/minister';
  private baseUrl = 'http://localhost:8089/minister/all';

  constructor(private http: HttpClient) {}

  // GET all Ministre employees
  getAllMinistre(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  getMinistreById(id: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }
}
export interface Minister {
  id?: number;
  name?: string;
  admin?: Admin;
  claims?: Claim[];
  employees?: MinistreEmployee[];
}
