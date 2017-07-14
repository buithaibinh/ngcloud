import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';

import { VideosModule } from './videos/index';

import { AppsRoutes } from './apps-routing';

const COMPONENTS = [
    
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
