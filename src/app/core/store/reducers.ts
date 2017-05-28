import { Observable } from 'rxjs/Observable';
// reducers
import { IAppSettings, appLayout, AppLayoutActions } from './app-layout';
import { IHomeLayout, homeLayout, HomeLayoutActions } from './home-layout';

import { IMultilingualState, reducer } from '../i18n/index';

// The top level ng cloud application interface
// each reducer is reponsible for manipulating a certain state
export interface NgCloudAppState {
  appLayout: IAppSettings;
  i18n: IMultilingualState;
};

export interface HomeLayoutState {
  homeLayout: IHomeLayout
};

export let NgCloudReducers = {
  appLayout,
  i18n: reducer,
  homeLayout: homeLayout,
};

export let NgCloudActions = [
  AppLayoutActions,
  HomeLayoutActions
];
