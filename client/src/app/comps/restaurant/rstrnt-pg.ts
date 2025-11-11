import { Component } from '@angular/core';
import { GuiDataService } from '../../core-func/gui-data-service';


@Component({
  selector: 'odm-rstrnt-pg',
  standalone: false,
  template: `
    <p>
      rstrnt-pg works!
    </p>
    <main>
      <router-outlet name="mainRO" id="mainRO"></router-outlet>
    </main>
  `,
  styles: ``,
})
export class RstrntPg {

}
