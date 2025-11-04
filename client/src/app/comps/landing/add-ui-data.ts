import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { MatCardModule } from '@angular/material/card';
import { UserInterface } from './landing-pg-model';
import { GuiDataService } from '../../core-func/gui-data-service';

@Component({
  selector: 'odm-add-ui-data',
  standalone: false,
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Add New Interface Data</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <odm-landing-pg-form (formSubmitted)="addUiData($event)"></odm-landing-pg-form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [``],
})
export class AddUiData {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private uis: GuiDataService,
  ) {}

  addUiData(uiData: UserInterface) {
    this.uis.createUIData(uiData).
      subscribe({
        next: () => {
          this.router.navigate(['/'], {relativeTo: this.route});
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
