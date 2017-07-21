import { Component, OnInit, ElementRef, EventEmitter, Output, Input, ViewChild, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import {
  animate,
  trigger,
  state,
  style,
  transition,
  AnimationEvent,
} from '@angular/animations';

import { NgCloudAppState } from '../../store';
import { AppLayoutActions, ISkins, getSidebarExpanded$ } from '../../store/app-layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  animations: [
    trigger('toggleSearch', [
      state('void', style(
        {
          transform: 'translateZ(0)',
          opacity: 0
        }
      )),
      state('enter', style({ transform: 'translateZ(0)', opacity: 1 })),
      state('exit', style({ transform: 'translateZ(0)', opacity: 0.5 })),
      transition('* => *', animate('400ms cubic-bezier(0.250, 0.250, 0.750, 0.750)')),
    ])
  ],
  host: {
    '[@toggleSearch]': '_stateSearch',
    '(@toggleSearch.done)': '_onAnimationDone($event)',
  },
})
export class TopbarComponent implements OnInit {
  private sidebarExpanded: boolean;
  private showSearch: boolean = false;
  @ViewChild('search') search: ElementRef;

  /** State of the search animation. */
  _stateSearch: 'void' | 'enter' | 'exit' = 'enter';

  profileItems = [
    { name: 'Profile', route: 'profile', icon: 'person' },
    { name: 'Billing', route: 'billing', icon: 'payment' },
    { name: 'Settings', route: 'settings', icon: 'settings' },

  ];
  constructor(
    private appLayoutActions: AppLayoutActions,
    private store: Store<NgCloudAppState>,
    private _ngZone: NgZone
  ) {

  }

  ngOnInit() {
    this.store.let(getSidebarExpanded$).subscribe((val: boolean) => {
      this.sidebarExpanded = val;
    });
  }

  dark: boolean = false;
  changeTheme() {
    // this.dark = !this.dark;
    // let data: ITheme = {
    //   dark: this.dark
    // }
    // return this.store.dispatch(this.appLayoutActions.changeTheme(data));
  }

  toggleNotification() {
    return this.store.dispatch(this.appLayoutActions.toggleChatbar());
  }

  toggleSidebar() {
    return this.store.dispatch(this.appLayoutActions.toggleSidebar());
  }

  toggleSearchbar() {
    this.showSearch = !this.showSearch;
    if (this.showSearch) {
      // Give ngIf a chance to render the <input>.
      // Then set the focus, but do this outside the Angualar zone to be efficient.
      // There is no need to run change detection after setTimeout() runs,
      // since we're only focusing an element.
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.search.nativeElement.focus();
        }, 0);
      });
    }
  }

  /** Callback, invoked whenever an animation on the host completes. */
  _onAnimationDone(event: AnimationEvent) {
    console.log('Animation done');
  }
}
