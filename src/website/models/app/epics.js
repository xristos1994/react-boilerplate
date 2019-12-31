import { combineEpics, ofType } from 'redux-observable';
import store from '@core/store';
import { map, tap } from 'rxjs/operators';
import {
  start,
  navigateToLogin,
  navigateToHome,
  navigateToArticles,
  navigateToArticle,
  navigateToAuthor,
  navigateToCategory,
  navigateToTest,
  changeHash,
} from './actions';

import { ROUTES } from 'website/utils';

const navigateOnInitializationEpic = (action$, state$) => {
  return action$.pipe(
    ofType(start.type),
    tap(() => {
      window.onhashchange = function() {
        store.dispatch({
          type: changeHash.type,
        });
      };
    }),
    map(() => changeHash()),
  );
};

const navigateOnHashChangeEpic = (action$, state$) => {
  return action$.pipe(
    ofType(changeHash.type),
    map(() => {
      let location = window.location.hash;
      location =
        location[location.length - 1] === '/' ? location : location + '/';
      const splittedLocation = location.split('/');
      switch (location.toUpperCase()) {
        case ROUTES.login:
          return navigateToLogin(location);
        case ROUTES.home:
          return navigateToHome(location);
        case ROUTES.articles:
          return navigateToArticles(location);
        case (location.toUpperCase().match(/^#\/ARTICLE\//) || {}).input +
          (splittedLocation.length === 4 && splittedLocation[3] === ''
            ? ''
            : '_'):
          return navigateToArticle(location);
        case (location.toUpperCase().match(/^#\/AUTHOR\//) || {}).input +
          (splittedLocation.length === 4 && splittedLocation[3] === ''
            ? ''
            : '_'):
          return navigateToAuthor(location);
        case (location.toUpperCase().match(/^#\/CATEGORY\//) || {}).input +
          (splittedLocation.length === 4 && splittedLocation[3] === ''
            ? ''
            : '_'):
          return navigateToCategory(location);
        case ROUTES.test:
          return navigateToTest(location);
        default:
          return navigateToHome();
      }
    }),
  );
};

export const appEpic = combineEpics(
  navigateOnInitializationEpic,
  navigateOnHashChangeEpic,
);
