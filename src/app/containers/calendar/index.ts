import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/index';
import { CalendarComponent, EditCalendarDialog } from './calendar.component';
import { CalendarRoutes } from './calendar.routing';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(CalendarRoutes),
    ],
    exports: [CalendarComponent],
    declarations: [EditCalendarDialog, CalendarComponent],
    providers: [],
    entryComponents: [EditCalendarDialog]
})
export class MyCalendarModule { }
