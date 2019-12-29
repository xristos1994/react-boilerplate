import { combineEpics, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { replaceAction as replace } from '@core/models/router';
//import { noAction } from "@core/models/general";
import {
  coreUi_openLoaderAction,
  coreUi_closeLoaderAction,
  coreUi_openSnackbarAction,
} from '@core/models/core-ui';

import { request } from '@core/operators';
import {
  fetchArticles,
  fetchArticlesByAuthor,
  fetchArticlesByCategory,
  updateIsFetchingArticles,
  updateArticles,
  updateArticlesCtiteria,
  fetchArticle,
  updateArticle,
  navigateToLogin,
  navigateToHome,
  navigateToArticles,
  navigateToArticle,
  navigateToAuthor,
  navigateToCategory,
  navigateToTest,
} from './actions';
import * as services from 'services';

import { mockedArticles } from './mockedArticles';
import { mockedArticle } from './mockedArticle';

const navigateToHomeEpic = (action$, state$) => {
  return action$.pipe(
    ofType(navigateToHome.type),
    mergeMap(() => [replace('/home/')]),
  );
};

const navigateToTestEpic = (action$, state$) => {
  return action$.pipe(
    ofType(navigateToTest.type),
    mergeMap(() => [replace('/route3/')]),
  );
};

const navigateToLoginEpic = (action$, state$) => {
  return action$.pipe(
    ofType(navigateToLogin.type),
    mergeMap(() => [replace('/login/')]),
  );
};

const navigateToArticlesEpic = (action$, state$) => {
  return action$.pipe(
    ofType(navigateToArticles.type),
    mergeMap(() => [fetchArticles(), replace('/articles/')]),
  );
};

const navigateToAuthorEpic = (action$, state$) => {
  return action$.pipe(
    ofType(navigateToAuthor.type),
    mergeMap(({ payload }) => {
      let authorId;
      if (payload.split('/').length === 1) authorId = payload;
      else authorId = payload.split('/')[2];
      return [
        fetchArticlesByAuthor(authorId),
        replace('/author/' + authorId + '/'),
      ];
    }),
  );
};

const navigateToCategoryEpic = (action$, state$) => {
  return action$.pipe(
    ofType(navigateToCategory.type),
    mergeMap(({ payload }) => {
      let categoryId;
      if (payload.split('/').length === 1) categoryId = payload;
      else categoryId = payload.split('/')[2];
      return [
        fetchArticlesByCategory(categoryId),
        replace('/category/' + categoryId + '/'),
      ];
    }),
  );
};

const navigateToArticleEpic = (action$, state$) => {
  return action$.pipe(
    ofType(navigateToArticle.type),
    mergeMap(({ payload }) => {
      let articleId;
      if (payload.split('/').length === 1) articleId = payload;
      else articleId = payload.split('/')[2];
      return [fetchArticle(articleId), replace('/article/' + articleId + '/')];
    }),
  );
};

const fetchArticlesPrepareEpic = (action$, state$) => {
  return action$.pipe(
    ofType(fetchArticles.type),
    mergeMap(() => [
      updateArticlesCtiteria('all'),
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
        type: 'error',
        message: 'Could not Fetch Articles',
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
        type: 'error',
        message: 'Could not Fetch Article',
      }),
    ]),
  );
};

export const articlesEpic = combineEpics(
  navigateToTestEpic,
  navigateToHomeEpic,
  navigateToLoginEpic,
  navigateToArticlesEpic,
  navigateToArticleEpic,
  navigateToAuthorEpic,
  navigateToCategoryEpic,
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
