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
import { DynamicGridComponent } from './dynamic-grid-component';
import { DynamicCardComponent } from './dynamic-card-component';
import { CustomCardComponent, CardHeaderComponent, CardFooterComponent, CardContentComponent, CardActionsComponent } from './custom_card_component';


@NgModule({
  declarations: [
    HeaderBar,
    FooterBar,
    DataCarousel,
    UncontainedDataCarousel,
    CarouselItem,
    DynamicContentGridComponent,
    DynamicGridComponent,
    DynamicCardComponent,
    CustomCardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    CardContentComponent,
    CardActionsComponent
    
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
    DynamicGridComponent,
    DynamicCardComponent,
    DynamicContentGridComponent,
    CustomCardComponent
    
  ]
})
export class CoreCompsModule { }
