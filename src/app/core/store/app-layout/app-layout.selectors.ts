import { Observable } from 'rxjs/Observable';
import { IAppSettings } from './app-layout.reducer';
import { NgCloudAppState } from '../reducers';

export function getAppLayoutState$(state$: Observable<NgCloudAppState>): Observable<IAppSettings> {
  return state$.select(state => state.appLayout);
}

export function getSidebarExpanded$(state$: Observable<NgCloudAppState>) {
  return state$.select((state) => state.appLayout.sidebarExpanded);
}

export function getAppVersion$(state$: Observable<NgCloudAppState>): Observable<any> {
  return state$.select(state => state.appLayout.version);
}
