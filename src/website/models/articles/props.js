import {
  fetchArticles as fetchArticlesAction,
  updateIsFetchingArticles as updateIsFetchingArticlesAction,
} from "./actions";

const fetchArticles = ({ dispatch }) => payload =>
  dispatch(fetchArticlesAction(payload));

const updateIsFetchingArticles = ({ dispatch }) => payload =>
  dispatch(updateIsFetchingArticlesAction(payload));

const isFetching = ({ state }) => state.website.articles.isFetching;

const articles = ({ state }) => state.website.articles.articles;

export { fetchArticles, updateIsFetchingArticles, isFetching, articles };
