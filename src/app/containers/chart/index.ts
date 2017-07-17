import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';
import { ChartRoutes } from './chart.routing';
import { ChartComponent } from './chart.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(ChartRoutes),
    ],
    exports: [],
    declarations: [ChartComponent],
    providers: [],
})
export class ChartModule { }
