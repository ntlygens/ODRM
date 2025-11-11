import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RstrntPg } from './rstrnt-pg';
import { RstrntLandingPg } from './rstrnt-landing-pg';


export const routes: Routes = [
  {
    path: '',
    component: RstrntPg,
    children: [
      {
        path: '',
        component: RstrntLandingPg,
        outlet: 'mainRO'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RstrntRoutingModule { }
