import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './work-routing-module';
import { WorkPg } from './work-pg';



@NgModule({
  declarations: [
    WorkPg
  ],
  imports: [
    CommonModule,
    WorkRoutingModule,
  ]
})
export class WorkModule { }
