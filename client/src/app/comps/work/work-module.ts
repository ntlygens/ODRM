import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMatModule } from '../../ng-mat/ng-mat.module';
import { WorkRoutingModule } from './work-routing-module';
import { WorkPg } from './work-pg';
import { WorkLandingPg } from './work-landing-pg';
import { JumboTronComponent } from '../core-comps/jumbo-tron';
import { CustomCardComponent } from '../core-comps/custom_card_component';


@NgModule({
  declarations: [
    WorkPg,
    WorkLandingPg
  ],
  imports: [
    CommonModule,
    WorkRoutingModule,
    JumboTronComponent,
    CustomCardComponent,
    NgMatModule
  ],
  exports: [
    WorkPg,
    WorkLandingPg
  ]
})
export class WorkModule { }
