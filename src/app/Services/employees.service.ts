import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Minister } from './ministre.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private apiUrl = 'http://localhost:8089/MinistreEmployees';
  private baseUrl = 'http://localhost:8089/MinistreEmployees/retrieve-all';

  constructor(private http: HttpClient) {}

  // GET all Ministre employees
  getAllMinistreEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  getMinistreEmployeeByMinistre(min: Minister): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl + '/retrieveByMinistre', min);
  }
  deleteEmployees(employees: MinistreEmployee[]): Observable<any> {
    return this.http.request(
      'delete',
      'http://localhost:8089/MinistreEmployees/DeleteAll',
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: employees,
      }
    );
  }
  // GET a specific Ministre employee by ID
  getMinistreEmployeeById(id: number): Observable<MinistreEmployee> {
    return this.http.get<MinistreEmployee>(
      `${this.apiUrl}/ministre-employees/${id}`
    );
  }

  // Add a new Ministre employee
  addMinistreEmployee(
    ministreEmployee: MinistreEmployee
  ): Observable<MinistreEmployee> {
    return this.http.post<MinistreEmployee>(
      `${this.apiUrl}/ministre-employees`,
      ministreEmployee
    );
  }

  // Update an existing Ministre employee
  updateMinistreEmployee(
    ministreEmployee: MinistreEmployee
  ): Observable<MinistreEmployee> {
    return this.http.put<MinistreEmployee>(
      `${this.apiUrl}/ministre-employees/${ministreEmployee.id}`,
      ministreEmployee
    );
  }

  // Delete a Ministre employee by ID
  deleteMinistreEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Delete/${id}`);
  }
}
export interface MinistreEmployee {
  id?: number;
  name?: string;
  position?: string;
  salary?: number;
  age?: number;
  department?: string;
  dateOfJoining?: Date;
  email?: string;
  phoneNumber?: string;
  address?: string;
  gender?: string;
  employmentType?: string;
  minister?: Minister; // Optional property to avoid cyclic references
}
