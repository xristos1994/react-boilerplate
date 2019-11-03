import { combineEpics } from "redux-observable";
import "rxjs";
import { testEpic } from "./test-model";

// // --------------------------------------------

export const websiteRootEpic = combineEpics(testEpic);
export default websiteRootEpic;
