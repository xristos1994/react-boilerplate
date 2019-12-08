import { combineEpics, ofType } from "redux-observable";
//import { map, mergeMap, tap } from "rxjs/operators";
import { mergeMap } from "rxjs/operators";
//import { pushAction as push } from "@core/models/router";
import {
  coreUi_openLoaderAction,
  coreUi_closeLoaderAction,
  coreUi_openSnackbarAction,
} from "@core/models/core-ui";

//import { noAction } from "@core/models/general";
import { request } from "@core/operators";
import {
  fetchArticles,
  updateIsFetchingArticles,
  updateArticles,
} from "./actions";
import * as services from "services";

import { mockedArticles } from "./mockedArticles";

const fetchArticlesPrepareEpic = (action$, state$) => {
  return action$.pipe(
    ofType(fetchArticles.type),
    mergeMap(() => [
      updateIsFetchingArticles(true),
      updateArticles(),
      coreUi_openLoaderAction(),
    ]),
  );
};

const fetchArticlesEpic = (action$, state$) => {
  return action$.pipe(
    ofType(fetchArticles.type),
    request(fetchArticles, services.successService),
  );
};

const fetchArticlesSucceededEpic = (action$, state$) => {
  return action$.pipe(
    ofType(fetchArticles.succeeded.type),
    mergeMap(({ payload }) => [
      updateArticles(mockedArticles),
      updateIsFetchingArticles(false),
      coreUi_closeLoaderAction(),
    ]),
  );
};

const fetchArticlesFailedEpic = (action$, state$) => {
  return action$.pipe(
    ofType(fetchArticles.failed.type),
    mergeMap(({ payload }) => [
      updateArticles([]),
      updateIsFetchingArticles(false),
      coreUi_closeLoaderAction(),
      coreUi_openSnackbarAction({
        type: "error",
        message: "Could not Fetch Articles",
      }),
    ]),
  );
};

export const articlesEpic = combineEpics(
  fetchArticlesPrepareEpic,
  fetchArticlesEpic,
  fetchArticlesSucceededEpic,
  fetchArticlesFailedEpic,
);
