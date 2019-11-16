import lazilyLoaded from '@core/utils/lazilyLoaded';


const route1 = lazilyLoaded(() => import('./testRoute1'));

const route2 = lazilyLoaded(() => import('./testRoute2'));

const route3 = lazilyLoaded(() => import('./testRoute3'));

export { route1, route2, route3 };
