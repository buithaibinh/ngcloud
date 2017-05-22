import { Component, OnInit } from '@angular/core';

const DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];
const ALIGN_OPTIONS = ["auto", "start", "center", "baseline", "end", "stretch"];

@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.scss']
})
export class FlexLayoutComponent implements OnInit {

  public direction = "row";
  public mainAxis = "space-around";
  public crossAxis = "center";
  someValue = 20;
  public alignTo = "center";

  layoutAlign () {
      return `${this.mainAxis} ${this.crossAxis}`;
  }

  ngOnInit() {
  }
  toggleDirection() {
    let next = (DIRECTIONS.indexOf(this.direction) +1 ) % DIRECTIONS.length;
    this.direction = DIRECTIONS[next];
  }
  toggleAlignment () {
      let j = ALIGN_OPTIONS.indexOf(this.alignTo);
      this.alignTo = ALIGN_OPTIONS[ (j + 1) % ALIGN_OPTIONS.length ];
  }

}
