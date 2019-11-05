import { actionProp, stateProp } from "@core/utils/props";
import { testAction } from "./actions";

const x = actionProp("x", testAction);
const y = stateProp("website.testState.test", "y", value => value + 3);
const z = stateProp("website.testState", "z", value => value.test + 10);

export { x, y, z };
