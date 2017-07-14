import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';
import { VideosModule } from './videos/index';
import { AppsRoutes } from './apps-routing';
import { GalleryComponent} from './gallery/gallery.component';

const COMPONENTS = [
    GalleryComponent
]

@NgModule({
    imports: [
        RouterModule.forChild(AppsRoutes),
        SharedModule,
        VideosModule
    ],
    exports: [],
    declarations: COMPONENTS,
    providers: [],
})
export class AppsModule { }
