import { combineEpics } from "redux-observable";
import { ofType } from "redux-observable";
import { interval } from "rxjs";

import {
  map,
  mergeMap,
  delayWhen
} from "rxjs/operators";
import {
  coreUi_openModalAction,
  coreUi_closeModalAction,
  coreUi_updateModalState,
  coreUi_openSnackbarAction,
  coreUi_closeSnackbarAction,
  coreUi_closeSnackbarAfterMs,
  coreUi_updateSnackbarState,
  coreUi_openDrawerAction,
  coreUi_closeDrawerAction,
  coreUi_updateDrawerState,
  coreUi_openLoaderAction,
  coreUi_closeLoaderAction,
  coreUi_updateLoaderState
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

// Drawer
const coreUi_openDrawerEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreUi_openDrawerAction.type),
    map(() => coreUi_updateDrawerState({ show: true }))
  );
};

const coreUi_closeDrawerEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreUi_closeDrawerAction.type),
    map(() => coreUi_updateDrawerState({ show: false }))
  );
};
// ~Drawer

// Drawer
const coreUi_openLoaderEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreUi_openLoaderAction.type),
    map(() => coreUi_updateLoaderState({ show: true }))
  );
};

const coreUi_closeLoaderEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreUi_closeLoaderAction.type),
    map(() => coreUi_updateLoaderState({ show: false }))
  );
};
// ~Drawer

export const coreUi_epic = combineEpics(
  coreUi_openModalEpic,
  coreUi_closeModalEpic,
  coreUi_openSnackbarEpic,
  coreUi_closeSnackbarEpic,
  coreUi_closeSnackbarAfterMsEpic,
  coreUi_openDrawerEpic,
  coreUi_closeDrawerEpic,
  coreUi_openLoaderEpic,
  coreUi_closeLoaderEpic
);
export default coreUi_epic;
