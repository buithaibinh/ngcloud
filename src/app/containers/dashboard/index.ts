import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/index';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
    imports: [DashboardRoutingModule, SharedModule],
    exports: [],
    declarations: [DashboardComponent],
    providers: [],
})
export class DasboardModule { }
