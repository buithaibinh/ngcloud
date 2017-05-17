import { Observable } from 'rxjs/Observable';
// reducers
import { IAppSettings, appLayout, AppLayoutActions } from './app-layout';

import { IMultilingualState, reducer } from '../i18n/index';

// The top level ng cloud application interface
// each reducer is reponsible for manipulating a certain state
export interface EchoesState {
  appLayout: IAppSettings;
  i18n: IMultilingualState;
};

export let EchoesReducers = {
  appLayout,
  i18n: reducer
};

export let EchoesActions = [
  AppLayoutActions
];

export function getAppLayout$($state: Observable<EchoesState>): Observable<IAppSettings> {
  return $state.select(state => state.appLayout);
};
