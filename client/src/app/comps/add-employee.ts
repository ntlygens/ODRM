import { Component } from '@angular/core';
import { Employee } from '../core-func/employee-model';
import { Router } from '@angular/router';
import { EmployeeService } from '../core-func/employee-service';
import { MatCardModule } from '@angular/material/card';
import { EmployeeForm } from './employee-form';

@Component({
  selector: 'odm-add-empoloyee',
  standalone: true,
  imports: [EmployeeForm, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Add New Employee</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <odm-employee-form (formSubmitted)="addEmployee($event)"></odm-employee-form>
      </mat-card-content>
    </mat-card>
  `,
  styles: ``,
})
export class AddEmpoloyee {

  constructor(
    private router: Router,
    private es: EmployeeService,
  ) {}

  addEmployee(employee: Employee) {
    this.es.createEmployee(employee).
      subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err: any) => {
          alert('Failed to create employee. Please try again.');
          console.error('Error creating employee:', err);
        }
      });
      this.es.getEmployees();
      console.log('Employee created:', employee);
  }

  
}
