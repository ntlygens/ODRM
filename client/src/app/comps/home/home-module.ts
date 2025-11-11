import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgMatModule } from '../../ng-mat/ng-mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing-module';
import { HomePg } from './home-pg';
import { HomeLandingPg } from './home-landing-pg';

@NgModule({
  declarations: [
    HomePg,
    HomeLandingPg,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgMatModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomePg,
    HomeLandingPg,
  ]
})
export class HomeModule { }
