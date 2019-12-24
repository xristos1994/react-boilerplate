import { Action, Actions } from '@core/actions-engine';

export const coreAuth_login = Actions('CORE_AUTH', 'LOGIN');

export const coreAuth_logout = Actions('CORE_AUTH', 'LOGOUT');

export const coreAuth_updateAccount = Action('CORE_AUTH', 'UPDATE_ACCOUNT');

export const coreAuth_updateInitialRoute = Action(
  'CORE_AUTH',
  'UPDATE_INITIAL_ROUTE'
);
