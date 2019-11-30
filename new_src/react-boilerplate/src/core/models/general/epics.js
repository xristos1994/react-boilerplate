import { of } from "rxjs";
import { combineEpics } from "redux-observable";
import { start } from "./actions";

const startEpic = () => of(start());

const coreGeneral_epic = combineEpics(startEpic);

export default coreGeneral_epic;
