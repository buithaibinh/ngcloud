import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';

import { VideosComponent } from './videos/videos.component';

import { AppsRoutes } from './apps-routing';

const COMPONENTS = [
    VideosComponent
]

@NgModule({
    imports: [
        RouterModule.forChild(AppsRoutes),
        SharedModule,
    ],
    exports: [],
    declarations: COMPONENTS,
    providers: [],
})
export class AppsModule { }
