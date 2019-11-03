import { combineEpics } from "redux-observable";
import { ofType } from "redux-observable";
import { interval } from "rxjs";

import {
  map,
  mergeMap,
  //withLatestFrom,
  //tap,
  delayWhen
} from "rxjs/operators";
import {
  coreUi_openModalAction,
  coreUi_closeModalAction,
  coreUi_updateModalState,
  coreUi_openSnackbarAction,
  coreUi_closeSnackbarAction,
  coreUi_closeSnackbarAfterMs,
  coreUi_updateSnackbarState
} from "./actions";

// Modal
const coreUi_openModalEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreUi_openModalAction.type),
    map(({ payload }) =>
      coreUi_updateModalState({
        show: true,
        title: payload.title,
        message: payload.message
      })
    )
  );
};

const coreUi_closeModalEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreUi_closeModalAction.type),
    mergeMap(() => [
      coreUi_updateModalState({}),
      coreUi_openSnackbarAction({
        message: "testMessage",
        type: "error",
        position: "bottomLeft"
        //duration: 2000
      })
    ])
  );
};

// ~Modal

// Snackbar
const coreUi_openSnackbarEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreUi_openSnackbarAction.type),
    mergeMap(({ payload }) => [
      coreUi_updateSnackbarState({
        show: true,
        message: payload.message,
        type: payload.type,
        position: payload.position
      }),
      coreUi_closeSnackbarAfterMs({
        duration: payload.duration ? payload.duration : 2000
      })
    ])
  );
};

const coreUi_closeSnackbarEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreUi_closeSnackbarAction.type),
    map(() => coreUi_updateSnackbarState({}))
  );
};

const coreUi_closeSnackbarAfterMsEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreUi_closeSnackbarAfterMs.type),
    delayWhen(({ payload }) => interval(payload.duration)),
    map(() => coreUi_closeSnackbarAction())
  );
};

// ~Snackbar

export const coreUi_epic = combineEpics(
  coreUi_openModalEpic,
  coreUi_closeModalEpic,
  coreUi_openSnackbarEpic,
  coreUi_closeSnackbarEpic,
  coreUi_closeSnackbarAfterMsEpic
);
export default coreUi_epic;
