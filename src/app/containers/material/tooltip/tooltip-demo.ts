import {Component} from '@angular/core';
import {TooltipPosition} from '@angular/material';


@Component({
  moduleId: module.id,
  selector: 'tooltip-demo',
  templateUrl: 'tooltip-demo.html',
  styleUrls: ['tooltip-demo.scss'],
})
export class TooltipDemo {
  position: TooltipPosition = 'below';
  message: string = 'Here is the tooltip';
  disabled = false;
  showDelay = 0;
  hideDelay = 1000;
}
