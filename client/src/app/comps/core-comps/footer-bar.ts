import { Component } from '@angular/core';

@Component({
  selector: 'odm-footer-bar',
  standalone: false,
  template: `
    <mat-toolbar color="primary">
      <h1>Footer Bar!</h1>
    </mat-toolbar>
  `,
  styles: [`
    mat-toolbar {
      position: sticky;
      bottom: 0;
      z-index: 1000;
      opacity: 0.75;
      justify-content: center;
    } 

  `],
})
export class FooterBar {

}
