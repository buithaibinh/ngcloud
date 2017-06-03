import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'sidenav-demo',
  templateUrl: 'sidenav-demo.html',
  styleUrls: ['sidenav-demo.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavDemo {
  invert = false;
}
