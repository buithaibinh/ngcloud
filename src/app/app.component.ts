import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs';

import { EchoesState, getSidebarExpanded$ } from './core/store';
import { AppLayoutActions } from './core/store/app-layout';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  sidebarExpanded$: Observable<any> = this.store.let(getSidebarExpanded$);

  navItems = [
    { name: 'Autocomplete', route: 'autocomplete' },
    { name: 'Button', route: 'button' },
    { name: 'Button Toggle', route: 'button-toggle' },
    { name: 'Card', route: 'card' },
    { name: 'Chips', route: 'chips' },
    { name: 'Checkbox', route: 'checkbox' },
    { name: 'Dialog', route: 'dialog' },
    { name: 'Gestures', route: 'gestures' },
    { name: 'Grid List', route: 'grid-list' },
    { name: 'Icons', route: 'icons' },
    { name: 'Input', route: 'input' },
    { name: 'List', route: 'list' },
    { name: 'Menu', route: 'menu' },
    { name: 'Live Announcer', route: 'live-announcer' },
    { name: 'Overlay', route: 'overlay' },
    { name: 'Portal', route: 'portal' },
    { name: 'Progress Bar', route: 'progress-bar' },
    { name: 'Progress Spinner', route: 'progress-spinner' },
    { name: 'Radio', route: 'radio' },
    { name: 'Ripple', route: 'ripple' },
    { name: 'Select', route: 'select' },
    { name: 'Sidenav', route: 'sidenav' },
    { name: 'Slider', route: 'slider' },
    { name: 'Slide Toggle', route: 'slide-toggle' },
    { name: 'Snack Bar', route: 'snack-bar' },
    { name: 'Tabs', route: 'tabs' },
    { name: 'Toolbar', route: 'toolbar' },
    { name: 'Tooltip', route: 'tooltip' },
    { name: 'Platform', route: 'platform' },
    { name: 'Style', route: 'style' }
  ];

  constructor(
    private appLayoutActions: AppLayoutActions,
    private store: Store<EchoesState>, ) {
    console.log('jQuery version  = ', $().jquery);
  }

  closeSidebar(){
    return this.store.dispatch(this.appLayoutActions.collapseSidebar());
  }
  openSidebar(){
    return this.store.dispatch(this.appLayoutActions.expandSidebar());
  }
}
