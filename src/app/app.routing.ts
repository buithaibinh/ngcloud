import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

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
                loadChildren: 'app/containers/home/index#HomeModule'
            },
            {
                path: 'material',
                loadChildren: 'app/containers/material/#MaterialDemoModule'
            },
            {
                path: 'layouts',
                loadChildren: 'app/containers/layouts/#LayoutsModule'
            },
            {
                path: 'tables',
                loadChildren: 'app/containers/tables/#TablesModule'
            },
            {
                path: 'ag-grid',
                loadChildren: 'app/containers/ag-grid/#A2GridModule'
            },
            {
                path: 'pages',
                loadChildren: 'app/containers/pages/#PagesModule'
            },
            {
                path: 'apps',
                loadChildren: 'app/containers/apps/#AppsModule'
            },
            {
                path: 'chart',
                loadChildren: 'app/containers/chart/#ChartModule'
            },
            {
                path: 'editors',
                loadChildren: 'app/containers/editors/#EditorsModule'
            },
            {
                path: 'calendar',
                loadChildren: 'app/containers/calendar/#MyCalendarModule'
            },
        ]
    },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'miscellaneous',
            loadChildren: 'app/containers/miscellaneous/#MiscellaneousModule'
        }]
    }, {
        path: '**',
        redirectTo: 'miscellaneous/err-404'
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes, {
    preloadingStrategy: PreloadAllModules
});