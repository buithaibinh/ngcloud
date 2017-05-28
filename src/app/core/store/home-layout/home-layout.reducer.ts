import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { HomeLayoutActions } from './home-layout.actions';

export interface IHomeLayout {
  editDashboard: boolean;
}
const initialState: IHomeLayout = {
  editDashboard: false,
};
export function homeLayout(state: IHomeLayout = initialState, action: Action): IHomeLayout {
  switch (action.type) {
    case HomeLayoutActions.EDIT_DASHBOARD:
      return Object.assign({}, state, { editDashboard: !state.editDashboard });

    default:
      return Object.assign({}, initialState, state);
  }
};
