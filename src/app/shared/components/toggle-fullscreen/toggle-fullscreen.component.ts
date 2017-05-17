import { Component, HostListener, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as screenfull from 'screenfull'

@Component({
  selector: 'app-toggle-fullscreen',
  template: `
    <button md-icon-button>
      <md-icon class="md-24" >{{icon}}</md-icon>
    </button>
  `,
  styleUrls: ['./toggle-fullscreen.component.scss'],
})
export class ToggleFullscreenComponent implements OnInit {

  @Output() onToggleFullscreen: EventEmitter<boolean> = new EventEmitter();
  private icon: string = 'fullscreen';
  constructor(private _element: ElementRef) {

  }

  @HostListener('click') onClick() {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }

  ngOnInit() {
    document.addEventListener(screenfull.raw.fullscreenchange, () => {
      let isFullscreen = screenfull.isFullscreen
      this.icon = isFullscreen ? 'fullscreen_exit' : 'fullscreen';
      this.onToggleFullscreen.emit(isFullscreen);
    });
  }
}
