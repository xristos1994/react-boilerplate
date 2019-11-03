import { combineEpics } from "redux-observable";
import "rxjs";
import { coreUi_epic } from "./core-ui";

// // --------------------------------------------

export const coreRootEpic = combineEpics(coreUi_epic);
export default coreRootEpic;
