import {
  coreAuth_login as coreAuth_loginAction,
  coreAuth_logout as coreAuth_logoutAction
} from "./actions";

const isLogged = ({ state }) => state.core.coreAuth.account.isLogged;

const coreAuth_login = ({ dispatch }) => payload =>
  dispatch(coreAuth_loginAction(payload));

const coreAuth_logout = ({ dispatch }) => payload =>
  dispatch(coreAuth_logoutAction(payload));

export { isLogged, coreAuth_login, coreAuth_logout };
