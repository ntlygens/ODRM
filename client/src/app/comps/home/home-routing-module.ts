import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePg } from './home-pg';
import { HomeInterface } from './home-pg-model';
import { HomeLandingPg } from './home-landing-pg';

export const routes: Routes = [
  {
    path: '',
    component: HomePg,
    children: [
        {
            path: '',
            component: HomeLandingPg,
            outlet: 'mainRO'
        },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
