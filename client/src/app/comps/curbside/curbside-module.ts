import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurbsideRoutingModule } from './curbside-routing-module';
import { CurbsidePg } from './curbside-pg';
import { CurbsideLandingPg } from './curbside-landing-pg';


@NgModule({
  declarations: [
    CurbsidePg,
    CurbsideLandingPg
  ],
  imports: [
    CommonModule,
    CurbsideRoutingModule
  ],
  exports: [
    CurbsidePg,
    CurbsideLandingPg
  ]
})
export class CurbsideModule { }
