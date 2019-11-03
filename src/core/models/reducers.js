import { combineReducers } from "redux";
import { coreUi_reducer } from "./core-ui/";
// ---------------------------------------------

export const coreRootReducer = combineReducers({
  ...coreUi_reducer
});

export default coreRootReducer;
