import { createEpicMiddleware } from "redux-observable";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { websiteRootEpic, websiteRootReducer } from "models";
import { coreRootReducer, coreRootEpic } from "./models";

// --------------------------------------------------------------------------

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  combineReducers({ website: websiteRootReducer, core: coreRootReducer }),
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(combineEpics(websiteRootEpic, coreRootEpic));
//epicMiddleware.run(combineEpics(websiteRootEpic));

export default store;
