import {
  navigateToLogin as navigateToLoginAction,
  navigateToHome as navigateToHomeAction,
  navigateToArticles as navigateToArticlesAction,
  navigateToArticle as navigateToArticleAction,
  navigateToAuthor as navigateToAuthorAction,
  navigateToCategory as navigateToCategoryAction,
  navigateToTest as navigateToTestAction,
} from './actions';

const navigateToLogin = ({ dispatch }) => payload =>
  dispatch(navigateToLoginAction(payload));
const navigateToHome = ({ dispatch }) => payload =>
  dispatch(navigateToHomeAction(payload));
const navigateToArticles = ({ dispatch }) => payload =>
  dispatch(navigateToArticlesAction(payload));
const navigateToArticle = ({ dispatch }) => payload =>
  dispatch(navigateToArticleAction(payload));
const navigateToAuthor = ({ dispatch }) => payload =>
  dispatch(navigateToAuthorAction(payload));
const navigateToCategory = ({ dispatch }) => payload =>
  dispatch(navigateToCategoryAction(payload));
const navigateToTest = ({ dispatch }) => payload =>
  dispatch(navigateToTestAction(payload));

export {
  navigateToLogin,
  navigateToHome,
  navigateToArticles,
  navigateToArticle,
  navigateToAuthor,
  navigateToCategory,
  navigateToTest,
};
