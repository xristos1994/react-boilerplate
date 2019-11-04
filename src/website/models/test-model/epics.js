import { combineEpics, ofType } from "redux-observable";
import {
  //map,
  mergeMap
  //withLatestFrom
} from "rxjs/operators";
import { testAction } from "./actions";
import { coreUi_openModalAction } from "@core/models/core-ui";

const epic = (action$, state$) => {
  return action$.pipe(
    ofType(testAction.type),
    mergeMap(() => [
      coreUi_openModalAction({
        title: "Test Title",
        message: "Test Message"
      }),
      testAction.succeeded({ test: 1 })
    ])
  );
};

export const testEpic = combineEpics(epic);
export default testEpic;
