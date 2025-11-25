import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMatModule } from '../../ng-mat/ng-mat.module'; 

import { CurbsideRoutingModule } from './curbside-routing-module';
import { CurbsidePg } from './curbside-pg';
import { CurbsideLandingPg } from './curbside-landing-pg';

import { JumboTronComponent } from '../core-comps/jumbo-tron';

@NgModule({
  declarations: [
    CurbsidePg,
    CurbsideLandingPg
  ],
  imports: [
    CommonModule,
    CurbsideRoutingModule,
    JumboTronComponent,
    NgMatModule,
  ],
  exports: [
    CurbsidePg,
    CurbsideLandingPg
  ]
})
export class CurbsideModule { }
