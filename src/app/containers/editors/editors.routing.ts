import { Routes } from '@angular/router';

import { QuillComponent } from './quill/quill.component';
import { CkEditorComponent } from './ck-editor/ck-editor.component';

export const EditorsRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'quill', pathMatch: 'full' },
            { path: 'quill', component: QuillComponent },
            { path: 'ck-editor', component: CkEditorComponent },
        ]
    },
];
