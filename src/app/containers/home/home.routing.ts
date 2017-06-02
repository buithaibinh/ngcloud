import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivityComponent } from './activity/activity.component';

export const HomeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }, {
                path: 'dashboard',
                component: DashboardComponent
            }, {
                path: 'activity',
                component: ActivityComponent
            }
        ]
    },
];
