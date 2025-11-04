import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule],
  template: `
    <mat-toolbar color="primary">
      <h1>Welcome to {{ title() }}!</h1>
    </mat-toolbar>
    <main>
      <router-outlet />
    </main>
  `,
  styles: [`
    $blankIntroBkgd: url("/assets/backgrounds/odm-interface.jpg ");

    mat-toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      opacity: 0.5;
      justify-content: center;
    }
    main {
      // background: transparent $blankIntroBkgd center center no-repeat;
      //   -webkit-background-size: cover;
      //   background-size: cover;
      padding: 2rem 4rem;
      display: flex;
      justify-content: center; 
      margin-top: 6rem;
    }
  `],
})

export class App {
  protected readonly title = signal('ODRM Client');
}
