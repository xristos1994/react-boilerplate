import { combineEpics } from 'redux-observable';
import 'rxjs';
import { appEpic } from './app';
import { articlesEpic } from './articles';
import { testEpic } from './test-model';

// // --------------------------------------------

export const websiteRootEpic = combineEpics(testEpic, articlesEpic, appEpic);
export default websiteRootEpic;
