import { combineEpics, ofType } from "redux-observable";
import {
  map,
  mergeMap,
  tap,
  repeat
  //take,
  //combineAll
  //withLatestFrom
} from "rxjs/operators";
import { zip } from "rxjs";
import { push } from "react-router-redux";

import { request } from "@core/operators";
import {
  testAction,
  requestTestAction,
  zipAction_1,
  zipAction_2
} from "./actions";
import * as services from "services";

const epic = (action$, state$) => {
  return action$.pipe(
    ofType(testAction.type),
    mergeMap(({ payload }) => [
      testAction.succeeded({ test: payload.test + 1 }),
      push("/route1")
    ])
  );
};

const requestTestEpic = (action$, state$) => {
  return action$.pipe(
    ofType(requestTestAction.type),
    request(requestTestAction, services.testService)
    //mergeMap(() => [requestTestAction.succeeded({ value: 0 })])
  );
};

const zipEpic_1 = (action$, state$) => {
  return action$.pipe(
    ofType(zipAction_1.type),
    request(zipAction_1, services.testService)
  );
};

const zipEpic_2 = (action$, state$) => {
  return action$.pipe(
    ofType(zipAction_2.type),
    request(zipAction_2, services.testService1)
  );
};

const zipEpic = (action$, state$) => {
  const stream1$ = action$.pipe(ofType(zipAction_1.succeeded.type));
  const stream2$ = action$.pipe(ofType(zipAction_2.succeeded.type));
  const combined$ = zip(stream1$, stream2$);

  return combined$.pipe(
    tap(([stream1, stream2]) => {
      console.log("Zip Result");
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
  zipEpic_1,
  zipEpic_2,
  zipEpic
);
