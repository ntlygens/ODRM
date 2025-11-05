import { Component, OnInit, WritableSignal } from '@angular/core';
import { GuiDataService } from '../../core-func/gui-data-service';
import { UserInterface } from './landing-pg-model';

@Component({
  selector: 'odm-landing-pg',
  standalone: false,
  template: `
      <main>
        <router-outlet name='mainRO' id='mainRO' />
      </main>
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
 