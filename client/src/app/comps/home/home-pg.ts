import { Component, OnInit, WritableResource } from '@angular/core';
import { GuiDataService } from '../../core-func/gui-data-service';
import { HomeInterface } from './home-pg-model';

@Component({
  selector: 'odm-home-pg',
  standalone: false,
  template: `
    <p>
      home-pg works!
    </p>
    <main>
      <router-outlet name="mainRO" id="mainRO"></router-outlet>
    </main>
  `,
  styles: ``,
})
export class HomePg implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
  }


}
