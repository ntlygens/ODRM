import { Component, OnInit, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { EmployeeForm } from './employee-form';
import { EmployeeService } from '../core-func/employee-service';
import { Employee } from '../core-func/employee-model';

@Component({
  selector: 'odm-edit-employee',
  imports: [EmployeeForm, MatCardModule],
  standalone: true,
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Edit Employee</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <odm-employee-form
        [initialState]="employee()" 
        (formSubmitted)="editEmployee($event)"
        ></odm-employee-form>
      </mat-card-content>
    </mat-card>
  `,
  styles: ``,
})
export class EditEmployee implements OnInit {
  employee = {} as WritableSignal<Employee>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public es: EmployeeService
  ) {}
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    
    if (!id) {
      alert('Invalid employee ID');
      // this.router.navigate(['/']);
      // return;
    }

    // call the service to fetch the employee; do not assign a void result to the signal
    this.es.getEmployee(id);
    this.employee = this.es.employee$;
  }

  editEmployee(employee: Employee) {  
    // const employee = $event as Employee;
    this.es
      .updateEmployee(this.employee()?._id || '', employee)
        .subscribe({
          next: () => {
            this.router.navigate(['/']);
          },
          error: (err: any) => {
            alert('Failed to update employee. Please try again.');
            console.error('Error updating employee:', err);
          }
        });
  }
}
