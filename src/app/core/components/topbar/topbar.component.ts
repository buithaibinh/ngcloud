import { Component, OnInit, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { NgCloudAppState } from '../../store';
import { AppLayoutActions, ITheme, getSidebarExpanded$ } from '../../store/app-layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  private sidebarExpanded: boolean;

  profileItems = [
    { name: 'Profile', route: 'profile', icon: 'person' },
    { name: 'Billing', route: 'billing', icon: 'payment' },
    { name: 'Settings', route: 'settings', icon: 'settings' },

  ];
  constructor(
    private appLayoutActions: AppLayoutActions,
    private store: Store<NgCloudAppState>
  ) {

  }

  ngOnInit() {
    this.store.let(getSidebarExpanded$).subscribe((val: boolean) => {
      this.sidebarExpanded = val;
    });
  }

  dark: boolean = false;
  changeTheme() {
    this.dark = !this.dark;
    let data: ITheme = {
      dark: this.dark
    }
    return this.store.dispatch(this.appLayoutActions.changeTheme(data));
  }

  toggleNotification(){
    return this.store.dispatch(this.appLayoutActions.toggleChatbar());
  }

  toggleSidebar() {
    return this.store.dispatch(this.appLayoutActions.toggleSidebar());
  }
}
