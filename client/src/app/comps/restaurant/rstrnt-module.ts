import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RstrntRoutingModule } from './rstrnt-routing-module';
import { RstrntLandingPg } from './rstrnt-landing-pg';
import { RstrntPg } from './rstrnt-pg';


@NgModule({
  declarations: [
    RstrntLandingPg,
    RstrntPg
  ],
  imports: [
    CommonModule,
    RstrntRoutingModule
  ],
  exports: [
    RstrntPg,
    RstrntLandingPg
  ]
})
export class RstrntModule { }
