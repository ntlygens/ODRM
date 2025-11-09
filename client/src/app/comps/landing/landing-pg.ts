import { Component, OnInit, WritableSignal } from '@angular/core';
import { GuiDataService } from '../../core-func/gui-data-service';
import { UserInterface, ServiceScreenInterface } from './landing-pg-model';

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
    }
  `],
})
export class LandingPg implements OnInit {
  userInterface$ =  {} as WritableSignal<UserInterface[]>;
  srvcScrnInterface$ =  {} as WritableSignal<ServiceScreenInterface[]>;

  constructor(public uis: GuiDataService) {}

  ngOnInit() {
    this.getAllUserData();  
    this.getAllSrvcSrcnData();
  }

  deleteSelectedData(id: string): void {
    this.uis.deleteUIData(id).
      subscribe({
        next: (response) => {
          this.getAllUserData(); // Refresh the userInterface list after deletion
          console.log('Employee deleted successfully:', response);
        }
      });

  }

  private getAllUserData() {
    this.userInterface$ = this.uis.allUserData$;
    // this.uis.getAllUserData();
  } 
  
  private getAllSrvcSrcnData() {
    this.srvcScrnInterface$ = this.uis.allSrvcScrnData$;
    // this.uis.getAllSrvcScrnData();
  } 
}
 