import { Component, OnInit, WritableSignal } from '@angular/core';
import { GuiDataService } from '../core-func/gui-data-service';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card';
import { UserInterface } from '../core-func/landing-pg-model';

@Component({
  selector: 'odm-landing-pg',
  standalone: true,
  imports: [RouterModule, MatTableModule, MatButtonModule, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Interface Logo</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <table mat-table [dataSource]="userInterface$()" class="mat-elevation-z8">
          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef> Name </th>
            <td mat-cell *matCellDef="let userInterface"> {{userInterface.name}} </td>
          </ng-container>

          <ng-container matColumnDef="img">
            <th mat-header-cell *matHeaderCellDef> Image </th>
            <td mat-cell *matCellDef="let userInterface"> {{userInterface.img}} </td>
          </ng-container>

          <ng-container matColumnDef="desc">
            <th mat-header-cell *matHeaderCellDef> Description </th>
            <td mat-cell *matCellDef="let userInterface"> {{userInterface.desc}} </td>
          </ng-container>

          <ng-container matColumnDef="content">
            <th mat-header-cell *matHeaderCellDef> Content </th>
            <td mat-cell *matCellDef="let userInterface"> {{userInterface.content}} </td>
          </ng-container>

          <ng-container matColumnDef="pgLoc">
            <th mat-header-cell *matHeaderCellDef> Page Loc </th>
            <td mat-cell *matCellDef="let userInterface"> {{userInterface.pgLoc}} </td>
          </ng-container>

          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef> Action </th>
            <td mat-cell *matCellDef="let userInterface">
              <button mat-raised-button [routerLink]="['/edit', userInterface._id]">Edit</button>
              <button mat-raised-button color="warn" (click)="deleteSelectedData(userInterface._id)">Delete</button>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: ['name', 'img', 'desc', 'content', 'pgLoc', 'actions'];"></tr>
        </table>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="/add">Add New Data</button>
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
export class LandingPg implements OnInit {
  userInterface$ =  {} as WritableSignal<UserInterface[]>;
  displayedColumns: string[] = ['name', 'img', 'desc', 'content', 'pgLoc', 'actions'];

  constructor(public uis: GuiDataService) {}

  ngOnInit() {
    this.getAllData();  
  }

  deleteSelectedData(id: string): void {
    this.uis.deleteUIData(id).
      subscribe({
        next: (response) => {
          this.getAllData(); // Refresh the userInterface list after deletion
          console.log('Employee deleted successfully:', response);
        }
      });

  }

  private getAllData() {
    this.userInterface$ = this.uis.allData$;
    this.uis.getAllData();
  } 
}
 