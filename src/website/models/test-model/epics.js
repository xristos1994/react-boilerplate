import { combineEpics, ofType } from "redux-observable";
import {
  //map,
  mergeMap
  //withLatestFrom
} from "rxjs/operators";
import { testAction, requestTestAction } from "./actions";

// ---------------
import { ajax } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";
// --------------
const testService = { url: `https://api.github.com/users` };
const testService1 = {
  url: "https://httpbin.org/delay/2",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "rxjs-custom-header": "Rxjs"
  },
  body: {
    rxjs: "Hello World!"
  }
};
const request = (responseAction, service) =>
  mergeMap(action =>
    ajax(service).pipe(
      map(response => {
        return responseAction.succeeded(response);
      }),
      catchError(error => {
        return of(responseAction.failed(error));
      })
    )
  );
// ----------------

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
    request(requestTestAction, testService1)
    //mergeMap(() => [requestTestAction.succeeded({ value: 0 })])
  );
};

export const testEpic = combineEpics(epic, requestTestEpic);
