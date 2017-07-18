import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';
import { EditorsRoutes } from './editors.routing';
import { QuillComponent } from './quill/quill.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(EditorsRoutes),
    ],
    exports: [],
    declarations: [QuillComponent],
    providers: [],
})
export class EditorsModule { }
