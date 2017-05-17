import { Component, OnInit, ElementRef, EventEmitter, Output, Input } from '@angular/core';

import { EchoesState } from '../../store';
import { Store } from '@ngrx/store';
import { AppLayoutActions } from '../../store/app-layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    private appLayoutActions: AppLayoutActions,
    private store: Store<EchoesState>
  ) {

  }

  ngOnInit() {
  }

  toggleSidebar() {
    return this.store.dispatch(this.appLayoutActions.toggleSidebar());
  }
}
