import { Component } from '@angular/core';

@Component({
  selector: 'odm-curbside-pg',
  standalone: false,
  template: `
    <p>
      curbside-pg works!
    </p>
    <main>
      <router-outlet name="mainRO" id="mainRO"></router-outlet>
    </main>
  `,
  styles: ``,
})
export class CurbsidePg {

}
