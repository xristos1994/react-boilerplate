import { combineEpics, ofType } from "redux-observable";
import {
  map,
  mergeMap,
  tap,
  repeat
  //withLatestFrom
} from "rxjs/operators";

import { zip } from "rxjs";

import { request } from "@core/operators";
import { testAction, requestTestAction, requestTestAction1 } from "./actions";
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

const requestTestEpic1 = (action$, state$) => {
  return action$.pipe(
    ofType(requestTestAction.type),
    request(requestTestAction1, services.testService)
    //mergeMap(() => [requestTestAction.succeeded({ value: 0 })])
  );
};

const zipEpic = (action$, state$) => {
  const stream1$ = action$.pipe(ofType(requestTestAction.succeeded.type));
  const stream2$ = action$.pipe(ofType(requestTestAction1.succeeded.type));
  const combined$ = zip(stream1$, stream2$);
  console.log(combined$);

  return combined$.pipe(
    tap(([stream1, stream2]) => {
      console.log([stream1.payload, stream2.payload]);
    }),
    //map(([stream1, stream2]) => {
    map(payload => {
      return testAction.succeeded({ test: 1 });
    }),
    repeat()
  );
};

export const testEpic = combineEpics(
  epic,
  requestTestEpic,
  requestTestEpic1,
  zipEpic
);
