import { combineReducers } from 'redux';
import { testReducer } from 'models/test-model';
import { articlesReducer } from 'models/articles';
// ---------------------------------------------

export const websiteRootReducer = combineReducers({
  ...testReducer,
  ...articlesReducer,
});

export default websiteRootReducer;
