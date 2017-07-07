import { Routes } from '@angular/router';

import { BlankComponent } from './blank/blank.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { UserListComponent } from './user-list/user-list.component';

export const PagesRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'invoice', pathMatch: 'full' },
            {
                path: 'blank',
                component: BlankComponent
            },
            {
                path: 'google-map',
                component: GoogleMapComponent
            },
            {
                path: 'invoice',
                component: InvoiceComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'search-result',
                component: SearchResultComponent
            },
            {
                path: 'user-list',
                component: UserListComponent
            },
        ]
    },
];
