import { Routes } from '@angular/router';
import { EmployeeList } from './comps/employee-list';
import { AddEmpoloyee } from './comps/add-employee';
import { EditEmployee } from './comps/edit-employee';
import { Component } from '@angular/core';
import { LandingPg } from './comps/landing-pg';
import { AddUiData } from './comps/add-ui-data';
import { EditUiData } from './comps/edit-ui-data';

export const routes: Routes = [
    {
        path: '',
        component: LandingPg,
        // component: EmployeeList,
        title: 'Employees List'
    },
    {
        path: 'add',
        component: AddUiData,
        title: 'Add Employees'
    },
    {
        path: 'edit/:id',
        component: EditUiData,
        // loadComponent: () => import('./comps/edit-employee').
        //     then(Component => Component.EditEmployee),
        title: 'Edit Employee Details'
    }
];
