import { NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { EmployeeList } from './comps/employee-list';
import { AddEmpoloyee } from './comps/add-employee';
import { EditEmployee } from './comps/edit-employee';
import { Component } from '@angular/core';
import { LandingPg } from './comps/landing-module/landing-pg';
import { AddUiData } from './comps/landing-module/add-ui-data';
import { EditUiData } from './comps/landing-module/edit-ui-data';
import { ODMRouteInterface } from './comps/landing-module/landing-pg-model';

export const MAINROUTES: ODMRouteInterface[] = [
    {
        path: '',
        loadChildren: () => import('./comps/landing-module/landing-module').then(
            module => module.LandingModule
        ),
        data: {
            state: 'appIntro',
            animation: 'isLeft'
        },
        outlets: [ 'mainAppRO' ]
    },
    // {
    //     path: 'u',
    //     component: ListComponent,
    //     data: {
    //         state: 'UserMode',
    //         animation: 'isRight'
    //     },
    //     outlets: [ 'mainAppRO' ]

    // },
    // {
    //     path: 'c',
    //     component: MenuComponent,
    //     data: {
    //         state: 'ClientMode',
    //         animation: 'isLeft'
    //     },
    //     outlets: [ 'mainAppRO' ]
    // },
    // {
    //     path: 'p',
    //     component: FoodPaymentComponent,
    //     data: {
    //         state: 'PaymentMode',
    //         animation: 'isLeft'
    //     },
    //     outlets: [ 'mainAppRO' ]
    // },
    // {
    //     path: 'm',
    //     loadChildren: () => import('./merchant/merchant.module').then(
    //         module => module.MerchantModule
    //     ),
    //     data: {
    //         state: 'MerchantMode',
    //         animation: 'isLeft',
    //         mobile: GuiService.prototype.isMobileDevice()
    //     },
    //     outlets: [ 'mainAppRO' ]
    // },
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