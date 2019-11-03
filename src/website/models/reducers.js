import { combineReducers } from "redux";
import { testReducer } from "models/test-model";
// ---------------------------------------------

export const websiteRootReducer = combineReducers({
  ...testReducer
});

export default websiteRootReducer;
