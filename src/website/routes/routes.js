import lazilyLoaded from '@core/utils/lazilyLoaded';

const home = lazilyLoaded(() => import('./home'));
home.route = '/home';

const login = lazilyLoaded(() => import('./login'));
login.route = '/login';

const route3 = lazilyLoaded(() => import('./testRoute3'));

const articles = lazilyLoaded(() => import('./articles'));

const article = lazilyLoaded(() => import('./article'));

const author = lazilyLoaded(() => import('./author'));

const category = lazilyLoaded(() => import('./category'));

export { home, login, route3, articles, article, author, category };
