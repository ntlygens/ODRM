import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee-model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:5200';
  employees$ = signal<Employee[]>([]);
  employee$ = signal<Employee>({} as Employee);

  constructor(private http: HttpClient) {}

  private refreshEmployees() {
    this.http.get<Employee[]>(`${this.apiUrl}/employees`)
      .subscribe((employees) => {
        this.employees$.set(employees);
    });
  }

  getEmployees() {
    this.refreshEmployees();
    return this.employees$;
  }

  getEmployee(id: string) {
    this.http.get<Employee>(`${this.apiUrl}/employees/${id}`)
      .subscribe(employee => {
        this.employee$.set(employee);
        return this.employee$();

    });
  }

  createEmployee(newEmployee: Employee) {
    return this.http.post<Employee>(
      `${this.apiUrl}/employees`, 
      newEmployee,
      {responseType: 'text' as 'json'}
    );
  }

  updateEmployee(id: string, updatedEmployee: Employee) {
    return this.http.put<Employee>(
      `${this.apiUrl}/employees/${id}`, 
      updatedEmployee,
      {responseType: 'text' as 'json' });
  }

  deleteEmployee(id: string) {
    return this.http.delete<void>(
      `${this.apiUrl}/employees/${id}`,
      {responseType: 'text' as 'json' });
  }
}
