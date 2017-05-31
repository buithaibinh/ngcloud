import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/index';
import { AgGridModule } from "ag-grid-angular/main";



import { ActivityComponent } from '../activity/activity.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeRoutingModule } from './home.routing'
import { HomeComponent } from './home.component';

import { CellDateComponent } from '../../core/components/ag-components/cell-date.component';

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule,
        AgGridModule.withComponents(
            [CellDateComponent]
        ),
    ],
    exports: [],
    declarations: [HomeComponent, DashboardComponent, ActivityComponent, CellDateComponent],
    providers: [],
})
export class HomeModule { }
