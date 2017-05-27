import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {
    // Initialize the index by checking if a tab link is contained in the url.
    // This is not an ideal check and can be removed if routerLink exposes if it is active.
    // https://github.com/angular/angular/pull/12525
    this.activeLinkIndex =
      this.tabLinks.indexOf(this.tabLinks.find(tab => router.url.indexOf(tab.link) != -1));
  }

  ngOnInit() {

  }

}
