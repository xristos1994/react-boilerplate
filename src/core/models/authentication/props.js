import {
  coreAuth_tryAuth as coreAuth_tryAuthAction,
  coreAuth_Logout as coreAuth_LogoutAction
} from "./actions";

const coreAuth_tryAuth = ({ dispatch }) => payload =>
  dispatch(coreAuth_tryAuthAction(payload));

const isLogged = ({ state }) => state.core.coreAuth.isLogged;

const coreAuth_Logout = ({ dispatch }) => payload =>
  dispatch(coreAuth_LogoutAction(payload));

export { coreAuth_tryAuth, isLogged, coreAuth_Logout };
