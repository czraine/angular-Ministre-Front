import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Minister } from '../../model/minister';
import { MinisterRequest } from '../../model/ministerRequest';

@Injectable({
  providedIn: 'root'
})
export class MinisterService {
  private apiUrl = 'http://localhost:8080/pfe/minister';

  constructor(private http: HttpClient) {}

  addMinister(ministerRequest: MinisterRequest): Observable<Minister> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Minister>(url, ministerRequest);
  }

  getAllMinisters(): Observable<Minister[]> {
    const url = `${this.apiUrl}/all`;
    return this.http.get<Minister[]>(url);
  }

  getMinisterById(id: number): Observable<Minister> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Minister>(url);
  }

  deleteMinister(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateMinister(id: number, ministerRequest: MinisterRequest): Observable<Minister> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<Minister>(url, ministerRequest);
  }
}
