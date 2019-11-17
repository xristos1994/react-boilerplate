import { coreAuth_tryAuth as coreAuth_tryAuthAction } from "./actions";

const coreAuth_tryAuth = ({ dispatch }) => payload =>
  dispatch(coreAuth_tryAuthAction(payload));

export { coreAuth_tryAuth };
