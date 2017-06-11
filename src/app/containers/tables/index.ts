import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PaginationModule } from 'ngx-bootstrap';

import { SharedModule } from '../../shared/index';
import { Ng2TableComponent } from './ng2-table/ng2-table.component';
import { NgxTableComponent } from './ngx-table/ngx-table.component';
import { TablesRoutes } from './tables.routing';

@NgModule({
    imports: [SharedModule, RouterModule.forChild(TablesRoutes),
        PaginationModule.forRoot(),
    ],
    exports: [],
    declarations: [Ng2TableComponent, NgxTableComponent],
    providers: [],
})
export class TablesModule { }
