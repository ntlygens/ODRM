import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './work-routing-module';
import { WorkPg } from './work-pg';
import { WorkLandingPg } from './work-landing-pg';



@NgModule({
  declarations: [
    WorkPg,
    WorkLandingPg
  ],
  imports: [
    CommonModule,
    WorkRoutingModule,
  ],
  exports: [
    WorkPg,
    WorkLandingPg
  ]
})
export class WorkModule { }
