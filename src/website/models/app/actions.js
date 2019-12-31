import { Action } from '@core/actions-engine';
import { start } from '@core/models/general/actions';

const navigateToLogin = Action('ROUTER', 'NAVIGATE_TO_LOGIN');

const navigateToHome = Action('ROUTER', 'NAVIGATE_TO_HOME');

const navigateToArticles = Action('ROUTER', 'NAVIGATE_TO_ARTICLES');

const navigateToArticle = Action('ROUTER', 'NAVIGATE_TO_ARTICLE');

const navigateToAuthor = Action('ROUTER', 'NAVIGATE_TO_AUTHOR');

const navigateToCategory = Action('ROUTER', 'NAVIGATE_TO_CATEGORY');

const navigateToTest = Action('ROUTER', 'NAVIGATE_TO_TEST');

const changeHash = Action('ROUTER', 'CHANGE_HASH');

export {
  start,
  navigateToLogin,
  navigateToHome,
  navigateToArticles,
  navigateToArticle,
  navigateToAuthor,
  navigateToCategory,
  navigateToTest,
  changeHash,
};
