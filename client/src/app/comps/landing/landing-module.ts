import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing-module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMatModule } from '../../ng-mat/ng-mat.module';

import { LandingPg } from './landing-pg';
import { LandingPgForm } from './landing-pg-form';
import { LandingPgScreen } from './landing-pg-screen';

import { AddUiData } from './add-ui-data';
import { EditUiData } from './edit-ui-data';
import { SrvcSelectScreen } from './srvc-select-screen';


@NgModule({
  declarations: [
    LandingPg,
    SrvcSelectScreen,
    LandingPgForm,
    LandingPgScreen,
    AddUiData,
    EditUiData,
    
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgMatModule
    // FormsModule,
    // ReactiveFormsModule,
    // MatCardModule,
    // MatTableModule,
    // MatButtonModule,
    // MatInputModule,
    // MatFormFieldModule,
    // MatRadioModule,
  ],
  exports: [
    LandingPg,
    SrvcSelectScreen,
    LandingPgForm,
    LandingPgScreen,
    AddUiData,
    // EditUiData
  ]
})
export class LandingModule { }
