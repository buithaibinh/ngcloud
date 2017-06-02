import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';
import { AgGridModule } from "ag-grid-angular/main";

import { ActivityComponent } from './activity/activity.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';

import { CellDateComponent } from '../../core/components/ag-components/cell-date.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(HomeRoutes),
        AgGridModule.withComponents(
            [CellDateComponent]
        ),
    ],
    exports: [],
    declarations: [HomeComponent, DashboardComponent, ActivityComponent, CellDateComponent],
    providers: [],
})
export class HomeModule { }
