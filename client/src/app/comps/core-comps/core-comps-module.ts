import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMatModule } from '../../ng-mat/ng-mat.module';
import { HeaderBar } from './header-bar';
import { FooterBar } from './footer-bar';



@NgModule({
  declarations: [
    HeaderBar,
    FooterBar
  ],
  imports: [
    CommonModule,
    NgMatModule

  ],
  exports: [
    HeaderBar,
    FooterBar
  ]
})
export class CoreCompsModule { }
