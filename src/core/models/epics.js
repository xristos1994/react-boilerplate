import { combineEpics } from "redux-observable";
import { coreUi_epic } from "./core-ui";
import { coreGeneral_epic } from "./general";
// // --------------------------------------------

export const coreRootEpic = combineEpics(coreUi_epic, coreGeneral_epic);
export default coreRootEpic;
