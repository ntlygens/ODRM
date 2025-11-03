import { Routes } from '@angular/router';
import { EmployeeList } from './comps/employee-list';
import { AddEmpoloyee } from './comps/add-employee';
import { EditEmployee } from './comps/edit-employee';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: EmployeeList,
        title: 'Employees List'
    },
    {
        path: 'add',
        component: AddEmpoloyee,
        title: 'Add Employees'
    },
    {
        path: 'edit/:id',
        component: EditEmployee,
        // loadComponent: () => import('./comps/edit-employee').
        //     then(Component => Component.EditEmployee),
        title: 'Edit Employee Details'
    }
];
