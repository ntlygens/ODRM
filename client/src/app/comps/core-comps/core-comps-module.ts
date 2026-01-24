import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgMatModule } from '../../ng-mat/ng-mat.module';
import { HeaderBar } from './header-bar';
import { FooterBar } from './footer-bar';
import { DataCarousel } from './data-carousel';
import { UncontainedDataCarousel } from './uncontained-data-carousel';
import { CarouselItem } from './carousel-item';
import { DynamicContentGridComponent } from './dynamic-content-grid';
import { DynamicCardComponent } from './dynamic-card-component';
import { DynamicGridComponent } from './dynamic-grid-component';


@NgModule({
  declarations: [
    HeaderBar,
    FooterBar,
    DataCarousel,
    UncontainedDataCarousel,
    CarouselItem,
    DynamicContentGridComponent,
    DynamicCardComponent,
    DynamicGridComponent
    
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
    CarouselItem,
    DynamicCardComponent,
    DynamicGridComponent,
    DynamicContentGridComponent
    
  ]
})
export class CoreCompsModule { }
