import { Routes } from '@angular/router';

import { InvoiceComponent } from './invoice/invoice.component';

export const SamplesRoutes: Routes = [
    {
        path: '',
        children: [
             { path: '', redirectTo: 'invoice', pathMatch: 'full'},
            {
                path: 'invoice',
                component: InvoiceComponent
            },
        ]
    },
];
