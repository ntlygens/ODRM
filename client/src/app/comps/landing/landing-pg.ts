import { Component, OnInit, WritableSignal } from '@angular/core';
import { GuiDataService } from '../../core-func/gui-data-service';
import { UserInterface } from './landing-pg-model';

@Component({
  selector: 'odm-landing-pg',
  standalone: false,
  template: `
      <p> Landing PG </p>
      <main>
        <router-outlet name='mainRO' id='mainRO' />
      </main>
  `,
  styles: [`
    main {
      // background: transparent $blankIntroBkgd center center no-repeat;
      //   -webkit-background-size: cover;
      //   background-size: cover;
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center; 
    }
  `],
})
export class LandingPg implements OnInit {
  userInterface$ =  {} as WritableSignal<UserInterface[]>;

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
 