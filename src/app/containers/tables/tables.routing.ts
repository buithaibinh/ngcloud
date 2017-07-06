import { Routes } from '@angular/router';

import { BasicTableComponent } from './basic/basic-table.component';
import { SelectionTableComponent } from './selection-table/selection-table.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { PagingTableComponent } from './paging-table/paging-table.component';
import { PinningTableComponent } from './pinning-table/pinning-table.component';
import { InlineTableComponent } from './inline-table/inline-table.component';
import { FullTableComponent } from './full-table/full-table.component';
import { TemplateTableComponent } from './template-table/template-table.component';

export const TablesRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'selection', pathMatch: 'full' },
            {
                path: 'basic',
                component: BasicTableComponent
            },
            {
                path: 'selection',
                component: SelectionTableComponent
            },
            {
                path: 'filter',
                component: FilterTableComponent
            },
            {
                path: 'paging',
                component: PagingTableComponent
            },
            {
                path: 'pinning',
                component: PinningTableComponent
            },
            {
                path: 'inline',
                component: InlineTableComponent
            },
            {
                path: 'full',
                component: FullTableComponent
            },
            {
                path: 'template',
                component: TemplateTableComponent
            },
        ]
    },
];
