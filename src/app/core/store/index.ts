import { Observable } from 'rxjs/Observable';
import { NgModule } from '@angular/core';
import { StoreModule, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import 'rxjs/add/operator/let';

// import { ActionCreatorFactory } from 'ngrx-action-creator-factory';
// import { NgrxActionCreatorFactoryModule } from './action-creator.util';

import { environment } from '../../../environments/environment';
import { NgCloudAppState, NgCloudReducers, NgCloudActions, HomeLayoutState } from './reducers';

// import { storeFreeze } from 'ngrx-store-freeze';
import * as fromMultilingual from '../i18n/index';

export { NgCloudAppState } from './reducers';
export { HomeLayoutState } from './reducers';

const actions = NgCloudActions;
const reducers = NgCloudReducers;
const composeStore = reducers;
const optionalImports = [];
// const productionReducer = compose(localStorageSync(Object.keys(reducers)), combineReducers)(reducers);
const productionReducer = combineReducers(reducers);
// This is required for AOT
export function appReducer(state: any, action: any) {
  return productionReducer(state, action);
}
if (!environment.production) {
    // Note that you must instrument after importing StoreModule
    optionalImports.push(StoreDevtoolsModule.instrumentOnlyWithExtension());
}
@NgModule({
  imports: [
    StoreModule.provideStore(appReducer),
    ...optionalImports
  ],
  declarations: [],
  exports: [],
  providers: [ ...actions ]
})
export class CoreStoreModule {};
