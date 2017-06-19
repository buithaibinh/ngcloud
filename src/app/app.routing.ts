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
                loadChildren: './containers/material/#MaterialDemoModule'
            },
            {
                path: 'layouts',
                loadChildren: './containers/layouts/#LayoutsModule'
            },
            {
                path: 'tables',
                loadChildren: './containers/tables/#TablesModule'
            },
            {
                path: 'ag-grid',
                loadChildren: './containers/ag-grid/#A2GridModule'
            },
        ]
    }
];
