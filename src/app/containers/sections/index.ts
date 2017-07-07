import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';
import { SectionsRoutes } from './sections-routing';

import { ErrorComponent } from './error/error.component';

const COMPONENTS = [
    ErrorComponent
]

@NgModule({
    imports: [
        RouterModule.forChild(SectionsRoutes),
        SharedModule,
    ],
    exports: [],
    declarations: [COMPONENTS],
    providers: [],
})
export class SectionsModule { }
