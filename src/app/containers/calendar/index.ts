import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'angular-calendar';

import { SharedModule } from '../../shared/index';
import { CalendarComponent, EditCalendarDialog } from './calendar.component';
import { CalendarRoutes } from './calendar.routing';

@NgModule({
    imports: [
        SharedModule,
        CalendarModule.forRoot(),
        RouterModule.forChild(CalendarRoutes),
    ],
    exports: [CalendarComponent],
    declarations: [EditCalendarDialog, CalendarComponent],
    providers: [],
    entryComponents: [EditCalendarDialog]
})
export class MyCalendarModule { }
