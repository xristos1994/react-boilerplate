import { combineEpics, ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
//import { pushAction as push } from "@core/models/router";
//import { noAction } from "@core/models/general";
import {
  coreUi_openLoaderAction,
  coreUi_closeLoaderAction,
  coreUi_openSnackbarAction,
} from "@core/models/core-ui";

import { request } from "@core/operators";
import {
  fetchArticles,
  fetchArticlesByAuthor,
  fetchArticlesByCategory,
  updateIsFetchingArticles,
  updateArticles,
  updateArticlesCtiteria,
  fetchArticle,
  updateArticle,
} from "./actions";
import * as services from "services";

import { mockedArticles } from "./mockedArticles";
import { mockedArticle } from "./mockedArticle";

const fetchArticlesPrepareEpic = (action$, state$) => {
  return action$.pipe(
    ofType(fetchArticles.type),
    mergeMap(() => [
      updateArticlesCtiteria("all"),
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

const fetchArticlesByAuthorPrepareEpic = (action$, state$) => {
  return action$.pipe(
    ofType(fetchArticlesByAuthor.type),
    mergeMap(({ payload }) => [
      updateArticlesCtiteria(`author_${payload}`),
      updateIsFetchingArticles(true),
      updateArticles(),
      coreUi_openLoaderAction(),
    ]),
  );
};

const fetchArticlesByAuthorEpic = (action$, state$) => {
  return action$.pipe(
    ofType(fetchArticlesByAuthor.type),
    request(fetchArticles, services.successService),
  );
};

const fetchArticlesByCategoryPrepareEpic = (action$, state$) => {
  return action$.pipe(
    ofType(fetchArticlesByCategory.type),
    mergeMap(({ payload }) => [
      updateArticlesCtiteria(`category_${payload}`),
      updateIsFetchingArticles(true),
      updateArticles(),
      coreUi_openLoaderAction(),
    ]),
  );
};

const fetchArticlesByCategoryEpic = (action$, state$) => {
  return action$.pipe(
    ofType(fetchArticlesByCategory.type),
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

const fetchArticlePrepareEpic = (action$, state$) => {
  return action$.pipe(
    ofType(fetchArticle.type),
    mergeMap(() => [
      updateArticle(),
      updateIsFetchingArticles(true),
      coreUi_openLoaderAction(),
    ]),
  );
};

const fetchArticleEpic = (action$, state$) => {
  return action$.pipe(
    ofType(fetchArticle.type),
    request(fetchArticle, services.successService),
  );
};

const fetchArticleSucceededEpic = (action$, state$) => {
  return action$.pipe(
    ofType(fetchArticle.succeeded.type),
    mergeMap(({ payload }) => [
      updateArticle(mockedArticle),
      updateIsFetchingArticles(false),
      coreUi_closeLoaderAction(),
    ]),
  );
};

const fetchArticleFailedEpic = (action$, state$) => {
  return action$.pipe(
    ofType(fetchArticle.failed.type),
    mergeMap(({ payload }) => [
      updateArticle({}),
      updateIsFetchingArticles(false),
      coreUi_closeLoaderAction(),
      coreUi_openSnackbarAction({
        type: "error",
        message: "Could not Fetch Article",
      }),
    ]),
  );
};

export const articlesEpic = combineEpics(
  fetchArticlesPrepareEpic,
  fetchArticlesByAuthorPrepareEpic,
  fetchArticlesByAuthorEpic,
  fetchArticlesByCategoryPrepareEpic,
  fetchArticlesByCategoryEpic,
  fetchArticlesEpic,
  fetchArticlesSucceededEpic,
  fetchArticlesFailedEpic,
  fetchArticlePrepareEpic,
  fetchArticleEpic,
  fetchArticleSucceededEpic,
  fetchArticleFailedEpic,
);
