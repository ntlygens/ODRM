import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurbsidePg } from './curbside-pg';
import { CurbsideLandingPg } from './curbside-landing-pg';

export const routes: Routes = [
  {
      path: '',
      component: CurbsidePg,
      children: [
        {
          path: '',
          component: CurbsideLandingPg,
          outlet: 'mainRO'
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurbsideRoutingModule { }
