import { Observable } from 'rxjs/Observable';
// reducers
import { IAppSettings, appLayout, AppLayoutActions } from './app-layout';

// The top level ng cloud application interface
// each reducer is reponsible for manipulating a certain state
export interface EchoesState {
  appLayout: IAppSettings;
};

export let EchoesReducers = {
  appLayout,
};

export let EchoesActions = [
  AppLayoutActions
];

export function getAppLayout$ ($state: Observable<EchoesState>): Observable<IAppSettings> {
  return $state.select(state => state.appLayout);
};
