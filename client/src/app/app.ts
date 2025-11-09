import { Component, signal } from '@angular/core';
// import { NgMatModule } from './ng-mat/ng-mat.module';
import { RouterOutlet } from '@angular/router';
import { CoreCompsModule } from './comps/core-comps/core-comps-module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    // NgMatModule, 
    CoreCompsModule
  ],
  template: `
    <odm-header-bar />
    <main>
      <router-outlet />
    </main>
    <odm-footer-bar />
  `,
  styles: [`
    // $blankIntroBkgd: url("/assets/backgrounds/odm-interface.jpg ");

    // mat-toolbar {
    //   position: sticky;
    //   top: 0;
    //   z-index: 1000;
    //   opacity: 0.5;
    //   justify-content: center;
    // }
    main {
      // background: transparent $blankIntroBkgd center center no-repeat;
      //   -webkit-background-size: cover;
      //   background-size: cover;
      padding: 10px 20px;
      justify-content: center; 
      margin-top: 0;
    }
  `],
})

export class App {
  // protected readonly title = signal('ODRM Client');
}
