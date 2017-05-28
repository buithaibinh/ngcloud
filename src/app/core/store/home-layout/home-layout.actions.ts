import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { ActionCreatorFactory } from 'ngrx-action-creator-factory';

@Injectable()
export class HomeLayoutActions {
  static EDIT_DASHBOARD = '[HOME LAYOUT] EDIT_DASHBOARD';


  editDashboard(isEditDashboard: boolean): Action {
    return {
      type: HomeLayoutActions.EDIT_DASHBOARD,
      payload: {
        editDashboard: isEditDashboard
      }
    };
  }
};
