import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';
import { EditorRoutes } from './editor.routing';
import { EditorComponent } from './editor.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(EditorRoutes),
    ],
    exports: [],
    declarations: [EditorComponent],
    providers: [],
})
export class EditorModule { }
