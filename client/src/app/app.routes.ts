import { NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { EmployeeList } from './comps/employee-list';
import { AddEmpoloyee } from './comps/add-employee';
import { EditEmployee } from './comps/edit-employee';
import { Component } from '@angular/core';
import { LandingPg } from './comps/landing/landing-pg';
import { AddUiData } from './comps/landing/add-ui-data';
import { EditUiData } from './comps/landing/edit-ui-data';
import { ODMRouteInterface } from './comps/landing/landing-pg-model';

export const MAINROUTES: ODMRouteInterface[] = [
    {
        path: '',
        loadChildren: () => import('./comps/landing/landing-module')
            .then(
                module => module.LandingModule
        ),
        data: {
            state: 'appIntro',
            animation: 'isLeft'
        },
        outlets: [ 'mainAppRO' ]
    },
    {
        path: 'h',
        loadChildren: () => import('./comps/home/home-module')
            .then(
                module => module.HomeModule
            ),
        data: {
            state: 'HomeMode',
            animation: 'isRight'
        },
        outlets: [ 'mainAppRO' ]

    },
    {
        path: 'w',
        loadChildren: () => import('./comps/work/work-module')
            .then(
                module => module.WorkModule
            ),
        data: {
            state: 'WorkMode',
            animation: 'isRight'
        },
        outlets: [ 'mainAppRO' ]

    },
    {
        path: 'r',
        loadChildren: () => import('./comps/restaurant/rstrnt-module')
            .then(
                module => module.RstrntModule
            ),
        data: {
            state: 'RstrntMode',
            animation: 'isLeft'
        },
        outlets: [ 'mainAppRO' ]
    },
    {
        path: 'c',
        loadChildren: () => import('./comps/curbside/curbside-module')
            .then(
                module => module.CurbsideModule
            ),
        data: {
            state: 'CrbSdeMode',
            animation: 'isLeft'
        },
        outlets: [ 'mainAppRO' ]
    },
   
    // {
    //     path: 'campaign',
    //     loadChildren: () => import('./campaign/campaign.module').then(
    //         module => module.CampaignModule
    //     ),
    //     data: {
    //         state: 'CampaignMode',
    //         animation: 'isLeft'
    //     },
    //     outlets: [ 'mainAppRO' ]
    // },
    // {
    //     path: 'eula',
    //     component: TermsComponent,
    //     data: {
    //         state: 'EULA',
    //         animation: 'isLeft'
    //     },
    //     outlets: [ 'mainAppRO' ]
    // },
    // {
    //     path: 'privacy',
    //     component: PolicyComponent,
    //     data: {
    //         state: 'Privacy',
    //         animation: 'isLeft'
    //     },
    //     outlets: [ 'mainAppRO' ]
    // },
    { path: '**', redirectTo: '', pathMatch: 'full'}

];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(MAINROUTES,
        {enableTracing: false})]
})
export class ODMRoutingModule { }