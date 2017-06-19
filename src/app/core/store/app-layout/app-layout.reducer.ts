import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { AppLayoutActions } from './app-layout.actions';

export interface IAppVersion {
  semver: string;
  isNewAvailable: boolean;
  checkingForVersion: boolean;
}
export interface ITheme {
  dark: boolean;
}
export interface IAppSettings {
  sidebarExpanded: boolean;
  chatbarExpanded: boolean;
  requestInProcess: boolean;
  version: IAppVersion;
  theme: ITheme;
}
const initialState: IAppSettings = {
  sidebarExpanded: true,
  chatbarExpanded: false,
  requestInProcess: false,
  theme: {
    dark: false
  },
  version: {
    semver: '',
    isNewAvailable: false,
    checkingForVersion: false
  }
};
export function appLayout(state: IAppSettings = initialState, action: Action): IAppSettings {
  switch (action.type) {
    case AppLayoutActions.SIDEBAR_EXPAND:
      return Object.assign({}, state, { sidebarExpanded: true });

    case AppLayoutActions.SIDEBAR_COLLAPSE:
      return Object.assign({}, state, { sidebarExpanded: false });

    case AppLayoutActions.SIDEBAR_TOGGLE:
      return Object.assign({}, state, { sidebarExpanded: !state.sidebarExpanded });

    // chatbar side bar
    case AppLayoutActions.CHATBAR_EXPAND:
      return Object.assign({}, state, { chatbarExpanded: true });

    case AppLayoutActions.CHATBAR_COLLAPSE:
      return Object.assign({}, state, { chatbarExpanded: false });

    case AppLayoutActions.CHATBAR_TOGGLE:
      return Object.assign({}, state, { chatbarExpanded: !state.chatbarExpanded });
    // end chatbar side bar

    case AppLayoutActions.APP_VERSION_RECIEVED: {
      const version = getVersion(state, action.payload);
      return Object.assign({}, state, { version });
    }

    case AppLayoutActions.APP_CHECK_VERSION: {
      const version = Object.assign({}, state.version, {
        checkingForVersion: true
      });
      return Object.assign({}, state, { version });
    }

    case AppLayoutActions.THEME_CHANGED: {
      if (state.theme !== action.payload)
        return (<any>Object).assign({}, state, {
          theme: action.payload
        });

      return state;
    }

    default:
      return Object.assign({}, initialState, state);
  }
};

export const appLayoutRegister = {
  reducer: { appLayout },
  actions: AppLayoutActions
};

function getVersion(state: IAppSettings, packageJson: any): IAppVersion {
  const currentVersion = state.version.semver;
  const remoteVersion = packageJson.version;
  const version: IAppVersion = {
    semver: '',
    isNewAvailable: state.version.isNewAvailable,
    checkingForVersion: false
  };
  const isCurrentVersionEmpty = '' === currentVersion;
  const isCurrentDifferentFromRemote = !isCurrentVersionEmpty && currentVersion !== remoteVersion;
  if (isCurrentVersionEmpty) {
    version.semver = remoteVersion;
  }
  if (isCurrentDifferentFromRemote && !version.isNewAvailable) {
    version.semver = currentVersion;
    version.isNewAvailable = true;
  } else {
    // upgrade is completed
    version.semver = remoteVersion;
    version.isNewAvailable = false;
  }
  return version;
};
