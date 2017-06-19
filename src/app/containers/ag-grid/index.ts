import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';

// ag-grid
import { AgGridModule } from "ag-grid-angular/main";

import { A2GridRoutes } from './ag-grid.routing';
// rich grid
import { RichGridComponent } from "./rich-grid/rich-grid.component";
import { DateComponent } from "./date-component/date.component";
import { HeaderComponent } from "./header-component/header.component";
import { HeaderGroupComponent } from "./header-group-component/header-group.component";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(A2GridRoutes),
        AgGridModule.withComponents(
            [
                DateComponent,
                HeaderComponent,
                HeaderGroupComponent
            ]
        )
    ],
    declarations: [
        RichGridComponent,
        DateComponent,
        HeaderComponent,
        HeaderGroupComponent
    ],
})
export class A2GridModule { }
