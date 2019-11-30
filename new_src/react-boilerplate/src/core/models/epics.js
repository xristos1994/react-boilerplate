import { combineEpics } from "redux-observable";
import { coreUi_epic } from "./core-ui";
import { coreGeneral_epic } from "./general";
import { coreAuth_epic } from "./authentication";
// // --------------------------------------------

export const coreRootEpic = combineEpics(
  coreUi_epic,
  coreGeneral_epic,
  coreAuth_epic
);
export default coreRootEpic;
