import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { UserInterface } from '../core-func/landing-pg-model';
import { LandingPgForm } from './landing-pg-form';
import { GuiDataService } from '../core-func/gui-data-service';

@Component({
  selector: 'odm-add-ui-data',
  standalone: true,
  imports: [LandingPgForm, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Add New UserInterface</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <odm-landing-pg-form (formSubmitted)="addUiData($event)"></odm-landing-pg-form>
      </mat-card-content>
    </mat-card>
  `,
  styles: ``,
})
export class AddUiData {

  constructor(
    private router: Router,
    private uis: GuiDataService,
  ) {}

  addUiData(uiData: UserInterface) {
    this.uis.createUIData(uiData).
      subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err: any) => {
          alert('Failed to create uiData. Please try again.');
          console.error('Error creating uiData:', err);
        }
      });
      this.uis.getAllData();
      console.log('UserInterface created:', uiData);
  }

  
}
