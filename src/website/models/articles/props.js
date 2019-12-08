import {
  fetchArticles as fetchArticlesAction,
  fetchArticlesByAuthor as fetchArticlesByAuthorAction,
  fetchArticlesByCategory as fetchArticlesByCategoryAction,
  updateIsFetchingArticles as updateIsFetchingArticlesAction,
  fetchArticle as fetchArticleAction,
} from "./actions";

const fetchArticles = ({ dispatch }) => payload =>
  dispatch(fetchArticlesAction(payload));

const fetchArticlesByAuthor = ({ dispatch }) => payload =>
  dispatch(fetchArticlesByAuthorAction(payload));

const fetchArticlesByCategory = ({ dispatch }) => payload =>
  dispatch(fetchArticlesByCategoryAction(payload));

const updateIsFetchingArticles = ({ dispatch }) => payload =>
  dispatch(updateIsFetchingArticlesAction(payload));

const isFetching = ({ state }) => state.website.articles.isFetching;

const articlesCriteria = ({ state }) => state.website.articles.articlesCriteria;

const articles = ({ state }) => state.website.articles.articles;

const fetchArticle = ({ dispatch }) => payload =>
  dispatch(fetchArticleAction(payload));

const article = ({ state }) => state.website.articles.article;

export {
  fetchArticles,
  fetchArticlesByAuthor,
  fetchArticlesByCategory,
  updateIsFetchingArticles,
  isFetching,
  articles,
  articlesCriteria,
  fetchArticle,
  article,
};
