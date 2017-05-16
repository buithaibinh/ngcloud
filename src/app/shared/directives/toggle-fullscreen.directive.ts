import { Directive, HostListener, Output, EventEmitter, OnInit } from '@angular/core';
import * as screenfull from 'screenfull'

@Directive({
  selector: '[toggleFullscreen]'
})
export class ToggleFullscreenDirective implements OnInit {
  @Output() onToggleFullscreen: EventEmitter<boolean> = new EventEmitter();
  constructor() {
   
  }

  @HostListener('click') onClick() {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }

  ngOnInit(){
     document.addEventListener(screenfull.raw.fullscreenchange, this._onFullscreenchange);
  }

  private _onFullscreenchange(){
    this.onToggleFullscreen.emit(screenfull.isFullscreen);
  }
}
