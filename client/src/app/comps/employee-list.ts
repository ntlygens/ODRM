import { Component, OnInit, WritableSignal } from '@angular/core';
import { EmployeeService } from '../core-func/employee-service';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card';
import { Employee } from '../core-func/employee-model';

@Component({
  selector: 'odm-employee-list',
  standalone: true,
  imports: [RouterModule, MatTableModule, MatButtonModule, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Employee List</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <table mat-table [dataSource]="employees$()" class="mat-elevation-z8">
          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef> Name </th>
            <td mat-cell *matCellDef="let employee"> {{employee.name}} </td>
          </ng-container>

          <ng-container matColumnDef="position">
            <th mat-header-cell *matHeaderCellDef> Position </th>
            <td mat-cell *matCellDef="let employee"> {{employee.position}} </td>
          </ng-container>

          <ng-container matColumnDef="level">
            <th mat-header-cell *matHeaderCellDef> Level </th>
            <td mat-cell *matCellDef="let employee"> {{employee.level}} </td>
          </ng-container>

          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef> Actions </th>
            <td mat-cell *matCellDef="let employee">
              <button mat-raised-button [routerLink]="['/edit', employee._id]">Edit</button>
              <button mat-raised-button color="warn" (click)="deleteEmployee(employee._id)">Delete</button>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: ['name', 'position', 'level', 'actions'];"></tr>
        </table>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="/add">Add New Employee</button>
      </mat-card-actions>
    </mat-card> 
          <!-- Name Column --> 
  `,
  styles: [`
    table {
      width: 100%;
      button:first-of-type {
        margin-right: 1rem;
      }
    }
  `],
})
export class EmployeeList implements OnInit {
  employees$ =  {} as WritableSignal<Employee[]>;
  displayedColumns: string[] = ['name', 'position', 'level', 'actions'];

  constructor(public es: EmployeeService) {}

  ngOnInit() {
    this.getAllEmployees();  
  }

  deleteEmployee(id: string): void {
    this.es.deleteEmployee(id).
      subscribe({
        next: (response) => {
          this.getAllEmployees(); // Refresh the employee list after deletion
          console.log('Employee deleted successfully:', response);
        }
      });

  }

  private getAllEmployees() {
    this.employees$ = this.es.employees$;
    this.es.getEmployees();
  } 
}
 