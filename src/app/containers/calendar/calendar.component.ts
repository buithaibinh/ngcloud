import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarEventAction
} from 'angular-calendar';
import { Subject } from 'rxjs/Subject';
import {
  addDays,
  differenceInDays,
  startOfDay,
  isSameDay,
  isSameMonth,
} from 'date-fns';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

interface Film {
  id: number;
  title: string;
  release_date: string;
}

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
  warm: {
    primary: '#ff4081',
    secondary: '#FDF1BA'
  },
  accent: {
    primary: '#f44336',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  icons = [
    'cake', 'notifications', 'info', 'work', 'lock'
  ];
  eventIcon: string = 'notifications';

  view: string = 'month';
  title: string = '';

  viewDate: Date = new Date();
  actions: CalendarEventAction[] = [{
    label: '<i class="fa fa-fw fa-pencil"></i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      this.handleEvent('Edited', event);
    }
  }, {
    label: '<i class="fa fa-fw fa-times"></i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.handleEvent('Deleted', event);
    }
  }]

  externalEvents: CalendarEvent[] = [
    {
      title: 'Office Meeting',
      color: colors.yellow,
      start: new Date(),
      draggable: true,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    }, {
      title: 'Lunch Break',
      color: colors.blue,
      start: new Date(),
      draggable: true,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    }
    , {
      title: 'URGENT',
      color: colors.accent,
      start: new Date(),
      draggable: true,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    }
  ];

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = false;

  refresh: Subject<any> = new Subject();
  constructor(public dialog: MdDialog) { }
  eventDropped({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {

    const externalIndex: number = this.externalEvents.indexOf(event);
    if (externalIndex > -1) {
      this.externalEvents.splice(externalIndex, 1);
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    this.viewDate = newStart;
    this.activeDayIsOpen = true;

  }

  dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {

    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  handleEvent(action: string, event: CalendarEvent): void {
    switch (action) {
      case 'Edited':
        this.openDialog(event);
        break;

      default:
        break;
    }
    console.log(event.start);
  }

  createEvent(title: string) {
    let color = colors.yellow;
    switch (this.eventIcon) {
      case 'cake':
        color = colors.red;
        break;
      case 'notifications':
        color = colors.blue;
        break;
      case 'info':
        color = colors.yellow;
        break;
      case 'work':
        color = colors.accent;
        break;
      case 'lock':
        color = colors.warm;
        break;
      default:
        break;
    }
    let event = {
      title: title,
      color: color,
      start: new Date(),
      draggable: true,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    }
    this.externalEvents.push(event);
  }

  private _getIconFromColor(color: string): string {
    let icon = 'cake';
    if (color === colors.red.primary) {
      icon = 'cake'
    } else if (color === colors.blue.primary) {
      icon = 'cake'
    } else if (color === colors.yellow.primary) {
      icon = 'info'
    } else if (color === colors.accent.primary) {
      icon = 'work'
    } else {
      icon = 'lock'
    }
    return icon;
  }

  openDialog(event: CalendarEvent) {
    let dialogRef = this.dialog.open(EditCalendarDialog, {
      height: '150px',
      width: '320px',
      data: event.title,
      disableClose: false
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('NEW data:', result);
    });
  }
}
@Component({
  selector: 'dialog-result-example-dialog',
  template: `
   <md-dialog-content>
     <md-input-container class="full-width">
        <input mdInput type="text" [(ngModel)]="title" required placeholder="Event Title" #eventTitle maxLength="50">
        <md-hint align="end">{{eventTitle.value.length}} / 50</md-hint>
    </md-input-container>
   </md-dialog-content>
    <md-dialog-actions>
      <button md-button md-dialog-close>Cancel</button>
      <button md-button [disabled]="!eventTitle.value.trim().length>0" (click)="updateEvent(eventTitle.value.trim())">
          <md-icon class="md-18">add</md-icon>Add Event
      </button>
    </md-dialog-actions>
  `,
})
export class EditCalendarDialog {
  title: string = '';
  constructor(public dialogRef: MdDialogRef<EditCalendarDialog>, @Inject(MD_DIALOG_DATA) public data: any, ) {
    console.log('xxx:', data);
    this.title = data;
  }

  updateEvent(title: string) {
    this.dialogRef.close(title);
  }
}