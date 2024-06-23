import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../model/employee';
import { EmployeeRequest } from '../../model/employeeRequest';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/employee';

  constructor(private http: HttpClient) {}

  addEmployee(employeeRequest: EmployeeRequest): Observable<Employee> {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Employee>(url, employeeRequest);
  }

  getAllEmployees(): Observable<Employee[]> {
    const url = `${this.apiUrl}/get-all`;
    return this.http.get<Employee[]>(url);
  }

  getEmployeeById(id: number): Observable<Employee> {
    const url = `${this.apiUrl}/get?id=${id}`;
    return this.http.get<Employee>(url);
  }

  deleteEmployee(id: number): Observable<void> {
    const url = `${this.apiUrl}/delete?id=${id}`;
    return this.http.delete<void>(url);
  }

  updateEmployee(id: number, employeeRequest: EmployeeRequest): Observable<Employee> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.put<Employee>(url, employeeRequest);
  }
}
