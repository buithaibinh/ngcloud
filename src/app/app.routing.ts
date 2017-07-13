import { Routes } from '@angular/router';

import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

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
            {
                path: 'pages',
                loadChildren: './containers/pages/#PagesModule'
            },
            {
                path: 'apps',
                loadChildren: './containers/apps/#AppsModule'
            },
        ]
    },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'miscellaneous',
            loadChildren: './containers/miscellaneous/#MiscellaneousModule'
        }]
    }, {
        path: '**',
        redirectTo: 'miscellaneous/err-404'
    }
];
