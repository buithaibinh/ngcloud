import { Routes } from '@angular/router';

import { VideosComponent } from './videos/videos.component';
import { GalleryComponent} from './gallery/gallery.component';

export const AppsRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'videos', pathMatch: 'full' },
            { path: 'videos', component: VideosComponent},
            { path: 'gallery', component: GalleryComponent},
        ]
    },
];
