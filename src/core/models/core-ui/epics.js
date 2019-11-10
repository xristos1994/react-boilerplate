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
import { createSnackbarState, createModalState } from "./helpers";

// Modal
const coreUi_openModalEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreUi_openModalAction.type),
    map(({ payload }) =>
      coreUi_updateModalState({
        ...createModalState(payload),
        show: true
      })
    )
  );
};

const coreUi_closeModalEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreUi_closeModalAction.type),
    map(() => coreUi_updateModalState({}))
  );
};
// ~Modal

// Snackbar
const coreUi_openSnackbarEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreUi_openSnackbarAction.type),
    mergeMap(({ payload }) => [
      coreUi_updateSnackbarState({
        ...createSnackbarState(payload),
        show: true
      }),
      coreUi_closeSnackbarAfterMs({
        ...createSnackbarState(payload),
        duration: payload.duration ? payload.duration : 2000
      })
    ])
  );
};

const coreUi_closeSnackbarEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreUi_closeSnackbarAction.type),
    map(({ payload }) => {
      return coreUi_updateSnackbarState(payload);
    })
  );
};

const coreUi_closeSnackbarAfterMsEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreUi_closeSnackbarAfterMs.type),
    delayWhen(({ payload }) => interval(payload.duration)),
    map(({ payload }) => coreUi_closeSnackbarAction(payload))
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
