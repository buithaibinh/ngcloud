import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';
import { AgGridModule } from "ag-grid-angular/main";

import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

import { CellDateComponent } from '../../core/components/ag-components/cell-date.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(DashboardRoutes),
        AgGridModule.withComponents(
            [CellDateComponent]
        ),
    ],
    declarations: [DashboardComponent, CellDateComponent]
})

export class DashboardModule { }
