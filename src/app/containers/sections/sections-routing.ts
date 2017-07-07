import { Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';

export const SectionsRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'err', pathMatch: 'full' },
            {
                path: 'err',
                component: ErrorComponent
            },
        ]
    },
];
