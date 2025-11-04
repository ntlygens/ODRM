import { Component, OnInit, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface, ODMStateType } from '../landing/landing-pg-model';
import { GuiDataService } from '../../core-func/gui-data-service';

@Component({
  selector: 'odm-srvc-select-screen',
  standalone: false,
  template: `
    <div id='srvcSlctrCntnr' class="">
      <div id='CTA_div'>
        <button color='warn' (click)='startUserXp(); $event.preventDefault()' routerLinkActive='true' mat-flat-button type='button'>Get Started</button>
          <br>
        <button color='secondary' (click)='startMrchntXp();' routerLinkActive='true' mat-flat-button type='button'>Merchant</button>           
      </div>
    </div>     
  `,
  styles: [`
      #srvcSlctrCntnr {
        width: 100%;
        height: 100%;
      }
    `],
})

export class SrvcSelectScreen implements OnInit {
  userInterface$ =  {} as WritableSignal<UserInterface[]>;

  constructor(
    private uis: GuiDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const homeUI = ODMStateType.HOME;
    console.log(`home: ${homeUI}`)
  }

  ngOnInit(): void {
    this.getAllData();
  }

  private getAllData() {
    this.userInterface$ = this.uis.allData$;
    this.uis.getAllData();
  } 

  startUserXp() {
    // this.uis.setStartPg(false);
    this.router.navigate(['u'], {relativeTo: this.route});
  }

  startMrchntXp() {
    // console.log('accessed from web');
    // this.gs.setStartPg(false);
    // window.open(`${this.rmtURL}`, '_self');
   }

}
