import { Action, Actions } from '@core/actions-engine';

export const fetchArticles = Actions('ARTICLES', 'FETCH_ARTICLES');

export const fetchArticlesByAuthor = Action(
  'ARTICLES',
  'FETCH_ARTICLES_BY_AUTHOR'
);

export const fetchArticlesByCategory = Action(
  'ARTICLES',
  'FETCH_ARTICLES_BY_CATEGORY'
);

export const updateArticles = Action('ARTICLES', 'UPDATE_ARTICLES');

export const updateIsFetchingArticles = Action(
  'ARTICLES',
  'UPDATE_IS_FETCHING_ARTICLES'
);

export const updateArticlesCtiteria = Action(
  'ARTICLES',
  'UPDATE_ARTICLES_CRITERIA'
);

export const fetchArticle = Actions('ARTICLES', 'FETCH_ARTICLE');

export const updateArticle = Action('ARTICLES', 'UPDATE_ARTICLE');
