import { Routes } from '@angular/router';

import { Ng2TableComponent } from './ng2-table/ng2-table.component';

export const TablesRoutes: Routes = [
    {
        path: '',
        children: [
             { path: '', redirectTo: 'ng2-table', pathMatch: 'full'},
            {
                path: 'ng2-table',
                component: Ng2TableComponent
            },
        ]
    },
];
