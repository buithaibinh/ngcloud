import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
    imports: [DashboardRoutingModule],
    exports: [],
    declarations: [DashboardComponent],
    providers: [],
})
export class DasboardModule { }
