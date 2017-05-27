import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/index';

import { ActivityComponent } from '../activity/activity.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeRoutingModule } from './home.routing'
import { HomeComponent } from './home.component';

@NgModule({
    imports: [SharedModule, HomeRoutingModule],
    exports: [],
    declarations: [HomeComponent, DashboardComponent, ActivityComponent],
    providers: [],
})
export class HomeModule { }
