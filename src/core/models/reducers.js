import { combineReducers } from "redux";
import { coreUi_reducer } from "./core-ui/";
import { coreAuth_reducer } from "./authentication/";

// ---------------------------------------------

export const coreRootReducer = combineReducers({
  ...coreUi_reducer,
  ...coreAuth_reducer
});

export default coreRootReducer;
