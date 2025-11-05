import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPg } from './landing-pg';
import { LandingPgScreen } from './landing-pg-screen';
import { AddUiData } from './add-ui-data';
import { EditUiData } from './edit-ui-data';
import { SrvcSelectScreen } from '../core-comps/srvc-select-screen';

export const routes: Routes = [
    {
        path: '',
        component: LandingPg,
        children: [
            {
                path: '',
                component: LandingPgScreen,
                outlet: 'mainRO'
            },
        ]
    },
    {
        path: 'add',
        component: LandingPg,
        children: [
            {
                path: '',
                component: AddUiData,
                outlet: 'mainRO'
            },
        ]
    },
    {
        path: 'edit/:id',
        component: LandingPg,
        children: [
            {
                path: '',
                component: EditUiData,
                outlet: 'mainRO'
            }
        ],

    },
    // {
    //     path: 'delete/:id',
    //     component: IntroComponent,
    //     children: [
    //         {
    //             path: '',
    //             component: ResetPassComponent,
    //             outlet: 'mainRO'
    //         }
    //     ],

    // },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
