import { Injectable } from '@angular/core';
import { Minister } from './ministre.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  private apiUrl = 'http://localhost:8089/claim';

  constructor(private http: HttpClient) {}

  addClaim(data: any) {
    return this.http.post(this.apiUrl + '/add', data);
  }
  getClaimsByMinistre(data: any): Observable<any> {
    return this.http.post<any[]>(this.apiUrl + '/getByMinistre', data);
  }
  getClaims(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl + '/get-all');
  }
  deleteClaim(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
  updateStatusClaim(claim: Claim): Observable<Claim> {
    return this.http.put<Claim>(`${this.apiUrl}/update`, claim);
  }
}
export enum StatusClaim {
  IN_PROGRESS = 'IN_PROGRESS',
  RESLOVED = 'RESLOVED',
}

export interface Claim {
  id?: number;
  creation_Date?: Date; // Use string to represent Date
  content?: string;
  status?: StatusClaim;
  ministre?: Minister; // Optional property to avoid cyclic references
}
