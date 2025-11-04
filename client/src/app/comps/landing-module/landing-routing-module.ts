import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPg } from './landing-pg';
import { LandingScreen } from './landing-screen';
import { AddUiData } from './add-ui-data';
import { EditUiData } from './edit-ui-data';

export const routes: Routes = [
    {
        path: '',
        component: LandingPg,
        children: [
            {
                path: '',
                component: LandingScreen,
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
