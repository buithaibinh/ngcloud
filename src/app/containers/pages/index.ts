import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';
import { PagesRoutes } from './pages-routing';

import { ErrorComponent } from './error/error.component';

const COMPONENTS = [
    ErrorComponent
]

@NgModule({
    imports: [
        RouterModule.forChild(PagesRoutes),
        SharedModule,
    ],
    exports: [],
    declarations: [COMPONENTS],
    providers: [],
})
export class PagesModule { }
