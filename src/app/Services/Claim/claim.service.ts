import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claim } from '../../model/claim';
import { ClaimRequest } from '../../model/claimRequest';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  private apiUrl = 'http://localhost:8080/claim';

  constructor(private http: HttpClient) {}

  addClaim(claimRequest: ClaimRequest): Observable<Claim> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Claim>(url, claimRequest);
  }

  getAllClaims(): Observable<Claim[]> {
    const url = `${this.apiUrl}/get-all`;
    return this.http.get<Claim[]>(url);
  }

  getClaimById(id: number): Observable<Claim> {
    const url = `${this.apiUrl}/get?id=${id}`;
    return this.http.get<Claim>(url);
  }

  deleteClaim(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete?id=${id}`;
    return this.http.delete<void>(url);
  }

  updateContentClaim(id: number, claimRequest: ClaimRequest): Observable<Claim> {
    const url = `${this.apiUrl}/updateContent/${id}`;
    return this.http.put<Claim>(url, claimRequest);
  }

  updateStatusClaim(id: number, claimRequest: ClaimRequest): Observable<Claim> {
    const url = `${this.apiUrl}/updateStatus/${id}`;
    return this.http.put<Claim>(url, claimRequest);
  }
}
