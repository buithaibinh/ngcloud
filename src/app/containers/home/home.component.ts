import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Subscription, Observable } from 'rxjs/Rx';

import { Router } from '@angular/router';

import { HomeLayoutState } from '../../core/store';
import { HomeLayoutActions, getDashboardEditMode$ } from '../../core/store/home-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabLinks = [
    { label: 'Dashboard', link: 'dashboard' },
    { label: 'Activity', link: 'activity' }
  ];
  activeLinkIndex = 0;

  dashboardEditMode: boolean;

  constructor(private router: Router, private homeLayoutActions: HomeLayoutActions,
    private store: Store<HomeLayoutState>) {
    // Initialize the index by checking if a tab link is contained in the url.
    // This is not an ideal check and can be removed if routerLink exposes if it is active.
    // https://github.com/angular/angular/pull/12525
    this.activeLinkIndex =
      this.tabLinks.indexOf(this.tabLinks.find(tab => router.url.indexOf(tab.link) != -1));
  }

  ngOnInit() {
    this.store.let(getDashboardEditMode$).subscribe((val: any) => {
      this.dashboardEditMode = val;
    })
  }

  customize() {
    return this.store.dispatch(this.homeLayoutActions.editDashboard(!this.dashboardEditMode));
  }
  changeTab(index: number) {
    this.activeLinkIndex = index;
    if (this.dashboardEditMode) {
      return this.store.dispatch(this.homeLayoutActions.editDashboard(false));
    }
  }
}
