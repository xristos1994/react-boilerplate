import { combineEpics, ofType } from "redux-observable";
import {
  //map,
  mergeMap
  //withLatestFrom
} from "rxjs/operators";

import { request } from "@core/operators";
import { testAction, requestTestAction } from "./actions";
import * as services from "services";

const epic = (action$, state$) => {
  return action$.pipe(
    ofType(testAction.type),
    mergeMap(({ payload }) => [
      testAction.succeeded({ test: payload.test + 1 })
    ])
  );
};

const requestTestEpic = (action$, state$) => {
  return action$.pipe(
    ofType(requestTestAction.type),
    request(requestTestAction, services.testService1)
    //mergeMap(() => [requestTestAction.succeeded({ value: 0 })])
  );
};

export const testEpic = combineEpics(epic, requestTestEpic);
