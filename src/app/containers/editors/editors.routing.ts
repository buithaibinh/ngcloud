import { Routes } from '@angular/router';

import { QuillComponent } from './quill/quill.component';

export const EditorsRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'quill', pathMatch: 'full' },
            { path: 'quill', component: QuillComponent},
        ]
    },
];
