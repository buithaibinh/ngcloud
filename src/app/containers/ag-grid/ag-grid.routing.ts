import { Routes } from '@angular/router';
import { RichGridComponent } from "./rich-grid/rich-grid.component";

export const A2GridRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'rich-grid', pathMatch: 'full' },
            { path: 'rich-grid', component: RichGridComponent }
        ]
    },
];
