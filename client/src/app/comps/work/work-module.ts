import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreCompsModule } from '../core-comps/core-comps-module';
import { NgMatModule } from '../../ng-mat/ng-mat.module';
import { WorkRoutingModule } from './work-routing-module';
import { WorkPg } from './work-pg';
import { WorkLandingPg } from './work-landing-pg';
import { JumboTronComponent, JumbotronDemoComponent } from '../core-comps/jumbo-tron';
import { CustomCardComponent } from '../core-comps/custom_card_component';

@NgModule({
  declarations: [
    WorkPg,
    WorkLandingPg,
  ],
  imports: [
    CommonModule,
    CoreCompsModule,
    WorkRoutingModule,
    CustomCardComponent,
    JumboTronComponent,
    JumbotronDemoComponent,
    NgMatModule
  ],
  exports: [
    WorkPg,
    WorkLandingPg,
    CustomCardComponent,
    
  ]
})
export class WorkModule { }
