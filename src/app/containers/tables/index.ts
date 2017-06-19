import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';

import { NgxTableComponent } from './ngx-table/ngx-table.component';
import { SelectionTableComponent } from './selection-table/selection-table.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { PagingTableComponent } from './paging-table/paging-table.component';
import { PinningTableComponent } from './pinning-table/pinning-table.component';
import { InlineTableComponent } from './inline-table/inline-table.component';
import { FullTableComponent } from './full-table/full-table.component';
import { TemplateTableComponent } from './template-table/template-table.component';
import { ContactComponent } from './contact/contact.component';

import { TablesRoutes } from './tables.routing';

const TABLE_COMPONENTS = [
    NgxTableComponent,
    SelectionTableComponent,
    FilterTableComponent,
    PagingTableComponent,
    PinningTableComponent,
    InlineTableComponent,
    FullTableComponent,
    TemplateTableComponent,
    ContactComponent
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(TablesRoutes),
    ],
    exports: [],
    declarations: [TABLE_COMPONENTS],
    providers: [],
})
export class TablesModule { }
