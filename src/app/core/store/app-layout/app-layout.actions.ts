import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { ActionCreatorFactory } from 'ngrx-action-creator-factory';

import { ISkins } from './app-layout.reducer';

@Injectable()
export class AppLayoutActions {
  static SIDEBAR_EXPAND = '[APP LAYOUT] SIDEBAR_EXPAND';
  static SIDEBAR_COLLAPSE = '[APP LAYOUT] SIDEBAR_COLLAPSE';
  static SIDEBAR_TOGGLE = '[APP LAYOUT] SIDEBAR_TOGGLE';

  static THEME_SKIN = '[APP LAYOUT] THEME_SKIN';
  static THEME_LAYOUT_TOGGLE = '[APP LAYOUT] THEME_LAYOUT_TOGGLE';
  static THEME_LAYOUT_EXPAND = '[APP LAYOUT] THEME_LAYOUT_EXPAND';
  static THEME_DIR = '[APP LAYOUT] THEME_DIR';

  static CHATBAR_EXPAND = '[APP LAYOUT] CHATBAR_EXPAND';
  static CHATBAR_COLLAPSE = '[APP LAYOUT] CHATBAR_COLLAPSE';
  static CHATBAR_TOGGLE = '[APP LAYOUT] CHATBAR_TOGGLE';

  static APP_VERSION_RECIEVED = '[APP] APP_VERSION_RECIEVED';
  static APP_UPDATE_VERSION = '[APP] APP_UPDATE_VERSION';
  static APP_CHECK_VERSION = '[APP] APP_CHECK_VERSION';

  recievedAppVersion = ActionCreatorFactory.create<any>(AppLayoutActions.APP_VERSION_RECIEVED);
  updateAppVersion = ActionCreatorFactory.create(AppLayoutActions.APP_UPDATE_VERSION);
  checkVersion = ActionCreatorFactory.create(AppLayoutActions.APP_CHECK_VERSION);

  expandSidebar(): Action {
    return {
      type: AppLayoutActions.SIDEBAR_EXPAND,
      payload: true
    };
  }

  collapseSidebar(): Action {
    return {
      type: AppLayoutActions.SIDEBAR_COLLAPSE,
      payload: false
    };
  }

  toggleSidebar(): Action {
    return {
      type: AppLayoutActions.SIDEBAR_TOGGLE
    };
  }

  // chat side bar
  expandChatbar(): Action {
    return {
      type: AppLayoutActions.CHATBAR_EXPAND,
      payload: true
    };
  }

  collapseChatbar(): Action {
    return {
      type: AppLayoutActions.CHATBAR_COLLAPSE,
      payload: false
    };
  }

  toggleChatbar(): Action {
    return {
      type: AppLayoutActions.CHATBAR_TOGGLE
    };
  }

  changeTheme(data: number): Action {
    return {
      type: AppLayoutActions.THEME_SKIN,
      payload: data
    };
  }

  toggleLayout(): Action {
    return {
      type: AppLayoutActions.THEME_LAYOUT_TOGGLE
    };
  }
  expandLayout(): Action {
    return {
      type: AppLayoutActions.THEME_LAYOUT_EXPAND
    };
  }
  changeDir(): Action {
    return {
      type: AppLayoutActions.THEME_DIR,
    };
  }
};
