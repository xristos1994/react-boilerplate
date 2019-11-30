import { createEpicMiddleware } from "redux-observable";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { websiteRootEpic, websiteRootReducer } from "models";
import { history } from "@core/models/router/utils";
import { coreRootReducer, coreRootEpic } from "./models";

// --------------------------------------------------------------------------

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  combineReducers({
    website: websiteRootReducer,
    core: coreRootReducer
  }),
  composeWithDevTools(
    applyMiddleware(epicMiddleware, routerMiddleware(history))
  )
);

epicMiddleware.run(combineEpics(websiteRootEpic, coreRootEpic));

export default store;
