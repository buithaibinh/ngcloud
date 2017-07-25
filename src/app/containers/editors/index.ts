import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CKEditorModule } from 'ng2-ckeditor';
import { SharedModule } from '../../shared/index';

import { EditorsRoutes } from './editors.routing';
import { QuillComponent } from './quill/quill.component';
import { CkEditorComponent } from './ck-editor/ck-editor.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(EditorsRoutes),
        CKEditorModule
    ],
    exports: [],
    declarations: [QuillComponent, CkEditorComponent],
    providers: [],
})
export class EditorsModule { }
