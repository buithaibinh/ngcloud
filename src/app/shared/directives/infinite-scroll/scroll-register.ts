import { ContainerRef } from './models';
import { Injectable, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/operator/filter';


export interface ScrollRegisterConfig {
  container: ContainerRef;
  throttleType: string;
  throttleDuration: number;
  filterBefore: Function;
  mergeMap: Function;
  scrollHandler: Function;
}

@Injectable()
export class ScrollRegister {
  attachEvent (options: ScrollRegisterConfig): Subscription {
    const scroller$: Subscription = Observable.fromEvent(options.container, 'scroll')
      [options.throttleType](() => Observable.timer(options.throttleDuration))
      .filter(options.filterBefore)
      .mergeMap((ev) => Observable.of(options.mergeMap(ev)))
      .subscribe(options.scrollHandler);
    return scroller$;
  }
}
