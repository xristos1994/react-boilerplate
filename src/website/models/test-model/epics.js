import { combineEpics, ofType } from "redux-observable";
import {
  //map,
  mergeMap
  //withLatestFrom
} from "rxjs/operators";
import { testAction } from "./actions";

const epic = (action$, state$) => {
  return action$.pipe(
    ofType(testAction.type),
    mergeMap(({ payload }) => [
      testAction.succeeded({ test: payload.test + 1 })
    ])
  );
};

export const testEpic = combineEpics(epic);
export default testEpic;
