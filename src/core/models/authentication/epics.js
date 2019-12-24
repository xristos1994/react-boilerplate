import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable';
import { request } from '@core/operators';

import { config } from '@core/configuration';

import { map, tap, mergeMap, delay } from 'rxjs/operators';
import { start, noAction } from '@core/models/general/actions';
import {
  coreAuth_updateInitialRoute,
  coreAuth_login,
  coreAuth_logout,
  coreAuth_updateAccount,
} from './actions';
import { pushAction as push } from '@core/models/router';
import services from './services';
import {
  coreUi_openLoaderAction,
  coreUi_closeLoaderAction,
} from '@core/models/core-ui';
import { setToken, getToken } from './utils';
import { nullOrUndefinedToValue } from '@core/utils/helpers';

const onStartEpic = (action$, state$) => {
  return action$.pipe(
    ofType(start.type),
    tap(() =>
      console.log('In Auth Epic -> ' + getToken('reactBoilerplateToken'))
    ),
    mergeMap(() =>
      config.hasLogin
        ? [
            coreAuth_updateInitialRoute(
              window.location.hash.startsWith('#/login')
                ? '/home'
                : window.location.hash.slice(1)
            ),
            getToken() === 'null'
              ? push('/login')
              : coreAuth_login({
                  body: {
                    token: nullOrUndefinedToValue(getToken(), ' '),
                  },
                }),
          ]
        : [noAction()]
    )
  );
};

const showLoaderEpic = action$ => {
  return action$.pipe(
    ofType(coreAuth_login.type),
    map(() => coreUi_openLoaderAction())
  );
};

const hideLoaderEpic = action$ => {
  return action$.pipe(
    ofType(coreAuth_login.succeeded.type, coreAuth_login.failed.type),
    map(() => coreUi_closeLoaderAction())
  );
};

const loginEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreAuth_login.type),
    request(coreAuth_login, services.login)
  );
};

const logoutFromServerEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreAuth_logout.type),
    request(coreAuth_logout, services.logout)
  );
};

const logoutLocalEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreAuth_logout.type),
    delay(100),
    tap(() => setToken('null')),
    mergeMap(() => [
      coreAuth_updateAccount({ isLogged: false }),
      coreAuth_updateInitialRoute('/home'),
      push('/login'),
    ])
  );
};

const loginSucceededEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreAuth_login.succeeded.type),
    tap(({ payload }) => {
      setToken(payload.response.account.token);
    }),
    mergeMap(({ payload }) => [
      coreAuth_updateAccount(payload.response.account),
      push(state$.value.core.coreAuth.initialRoute),
    ])
  );
};

const coreAuth_epic = combineEpics(
  onStartEpic,
  showLoaderEpic,
  hideLoaderEpic,
  loginEpic,
  logoutFromServerEpic,
  logoutLocalEpic,
  loginSucceededEpic
);

export default coreAuth_epic;
