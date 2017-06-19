import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusMeDirective {

  @Input('focus') hasFocus: boolean;
  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit() {
  }
  ngOnChanges(changes) {
    //console.log(changes);
    if (changes.hasFocus && changes.hasFocus.currentValue === true) {
      this.elementRef.nativeElement.focus();
    }
  }
}
