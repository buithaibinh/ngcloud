import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'icon-svg',
  template: `<md-icon svgIcon="thumbs-up"></md-icon>`,
  styleUrls: ['./icon-svg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSvgComponent {
  @Input() iconName: string; // ex: thumbs-up
  @Input() url: string; // ex: assets/img/examples/thumbup-icon.svg
  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      this.iconName,
      sanitizer.bypassSecurityTrustResourceUrl(this.url));
  }
}
