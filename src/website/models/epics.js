import { combineEpics } from "redux-observable";
import "rxjs";
import { testEpic } from "./test-model";
import { articlesEpic } from "./articles";

// // --------------------------------------------

export const websiteRootEpic = combineEpics(testEpic, articlesEpic);
export default websiteRootEpic;
