import { Routes } from '@angular/router';

import { VideosComponent } from './videos/videos.component';

export const AppsRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'videos', pathMatch: 'full' },
            {
                path: 'videos',
                component: VideosComponent
            },
        ]
    },
];
