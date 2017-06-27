import { Routes } from '@angular/router';

import { Error400Component } from './error400/error400.component';
import { Error403Component } from './error403/error403.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { Error503Component } from './error503/error503.component';

export const PagesRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'err-404', pathMatch: 'full' },
            {
                path: 'err-400',
                component: Error400Component
            },
            {
                path: 'err-403',
                component: Error403Component
            },
            {
                path: 'err-404',
                component: Error404Component
            },
            {
                path: 'err-500',
                component: Error500Component
            },
            {
                path: 'err-503',
                component: Error503Component
            },
        ]
    },
];
