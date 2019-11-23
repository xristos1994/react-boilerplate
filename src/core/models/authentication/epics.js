import { combineEpics } from "redux-observable";
import { ofType } from "redux-observable";

import { config } from "@core/configuration";

import { map, tap, mergeMap } from "rxjs/operators";
import { start, noAction } from "@core/models/general/actions";
import {
  coreAuth_updateInitialRoute,
  coreAuth_tryAuth,
  coreAuth_updateAccount
} from "./actions";
import { pushAction as push } from "@core/models/router";

const onStartEpic = (action$, state$) => {
  return action$.pipe(
    ofType(start.type),
    tap(() => console.log("In Auth Epic -> " + window.location.hash)),
    mergeMap(() =>
      config.hasLogin
        ? [
            coreAuth_updateInitialRoute(
              window.location.hash.startsWith("#/login")
                ? "#/home"
                : window.location.hash
            ),
            push("/login")
          ]
        : [noAction()]
    )
  );
};

const onTryAuthEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreAuth_tryAuth.type),
    map(({ payload }) =>
      payload.accessToken === undefined ||
      payload.accessToken === null ||
      payload.accessToken === ""
        ? coreAuth_tryAuth.failed(payload)
        : coreAuth_tryAuth.succeeded(payload)
    )
  );
};

const onAuthSucceededEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreAuth_tryAuth.succeeded.type),
    mergeMap(({ payload }) => [
      coreAuth_updateAccount(payload),
      push(
        state$.value.core.coreAuth.initialRoute.length > 0 &&
          state$.value.core.coreAuth.initialRoute[0] === "#"
          ? state$.value.core.coreAuth.initialRoute.slice(1)
          : state$.value.core.coreAuth.initialRoute
      )
    ])
  );
};

const onAuthFailededEpic = (action$, state$) => {
  return action$.pipe(
    ofType(coreAuth_tryAuth.failed.type),
    map(() => coreAuth_updateAccount())
  );
};

const coreAuth_epic = combineEpics(
  onStartEpic,
  onTryAuthEpic,
  onAuthSucceededEpic,
  onAuthFailededEpic
);

export default coreAuth_epic;