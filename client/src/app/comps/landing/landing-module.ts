import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing-module';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button'; 

import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';

import { LandingPg } from './landing-pg';
import { LandingPgForm } from './landing-pg-form';

import { AddUiData } from './add-ui-data';
import { EditUiData } from './edit-ui-data';


@NgModule({
  declarations: [
    LandingPg,
    LandingPgForm,
    AddUiData,
    EditUiData,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
  ],
  exports: [
    LandingPg,
    LandingPgForm,
    AddUiData,
    // EditUiData
  ]
})
export class LandingModule { }
