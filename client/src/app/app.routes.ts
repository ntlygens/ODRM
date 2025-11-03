import { Routes } from '@angular/router';
import { EmployeeList } from './comps/employee-list';
import { AddEmpoloyee } from './comps/add-employee';
import { EditEmployee } from './comps/edit-employee';

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
        title: 'Edit Employee Details'
    }
];
