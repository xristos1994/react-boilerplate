import { coreAuth_tryAuth as coreAuth_tryAuthAction } from "./actions";

const coreAuth_tryAuth = ({ dispatch }) => payload =>
  dispatch(coreAuth_tryAuthAction(payload));

const isLogged = ({ state }) => state.core.coreAuth.isLogged;

export { coreAuth_tryAuth, isLogged };
