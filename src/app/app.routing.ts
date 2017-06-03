import { Routes } from '@angular/router';

import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }, {
        path: '',
        component: HomeLayoutComponent,
        children: [
            {
                path: 'home',
                loadChildren: './containers/home/#HomeModule'
            },
            {
                path: 'material',
                loadChildren: './containers/material/#MaterialModule'
            },
        ]
    }
];
