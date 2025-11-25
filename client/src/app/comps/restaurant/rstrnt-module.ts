import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMatModule } from '../../ng-mat/ng-mat.module';

import { RstrntRoutingModule } from './rstrnt-routing-module';
import { RstrntLandingPg } from './rstrnt-landing-pg';
import { RstrntPg } from './rstrnt-pg';
import { JumboTronComponent } from '../core-comps/jumbo-tron';

@NgModule({
  declarations: [
    RstrntLandingPg,
    RstrntPg
  ],
  imports: [
    CommonModule,
    RstrntRoutingModule,
    JumboTronComponent,
    NgMatModule,
  ],
  exports: [
    RstrntPg,
    RstrntLandingPg
  ]
})
export class RstrntModule { }
