import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMatModule } from '../../ng-mat/ng-mat.module';
import { HeaderBar } from './header-bar';
import { FooterBar } from './footer-bar';
import { DataCarousel } from './data-carousel';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UncontainedDataCarousel } from './uncontained-data-carousel';
import { CarouselItem } from './carousel-item';



@NgModule({
  declarations: [
    HeaderBar,
    FooterBar,
    DataCarousel,
    UncontainedDataCarousel,
    CarouselItem
  ],
  imports: [
    CommonModule,
    NgMatModule,
    DragDropModule,

  ],
  exports: [
    HeaderBar,
    FooterBar,
    DataCarousel,
    UncontainedDataCarousel,
    CarouselItem
  ]
})
export class CoreCompsModule { }
