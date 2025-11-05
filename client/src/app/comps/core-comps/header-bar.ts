import { Component, signal } from '@angular/core';

@Component({
  selector: 'odm-header-bar',
  standalone: false,
  template: `
    <mat-toolbar color="primary">
      <h1>Welcome to {{ title() }}!</h1>
    </mat-toolbar>
  `,
  styles: [`
  $blankIntroBkgd: url("/assets/backgrounds/odm-interface.jpg ");
    mat-toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      opacity: 0.75;
      justify-content: center;
    }  

  `],
})
export class HeaderBar {
  protected readonly title = signal('ODRM Client');

}
