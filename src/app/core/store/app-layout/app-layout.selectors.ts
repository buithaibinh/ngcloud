import { Observable } from 'rxjs/Observable';
import { IAppSettings, ITheme } from './app-layout.reducer';
import { NgCloudAppState } from '../reducers';

export function getAppLayoutState$(state$: Observable<NgCloudAppState>): Observable<IAppSettings> {
  return state$.select(state => state.appLayout);
}

export function getSidebarExpanded$(state$: Observable<NgCloudAppState>) {
  return state$.select((state) => state.appLayout.sidebarExpanded);
}

export function getChatbarExpanded$(state$: Observable<NgCloudAppState>) {
  return state$.select((state) => state.appLayout.chatbarExpanded);
}

export function getAppVersion$(state$: Observable<NgCloudAppState>): Observable<any> {
  return state$.select(state => state.appLayout.version);
}

export function getAppTheme$(state$: Observable<NgCloudAppState>): Observable<ITheme> {
  return state$.select(state => {
    return state.appLayout.theme;
  });
}
export function getDarkTheme$(state$: Observable<NgCloudAppState>) {
  return state$.select((state) => state.appLayout.theme.dark);
}