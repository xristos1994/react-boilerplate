import { actionProp, stateProp } from "@core/utils/props";
import { testAction } from "./actions";

const x = actionProp("testAction", testAction);
const y = stateProp("website.testState.test", "test", value => value + 3);
const z = stateProp("website.testState", "testState", value => value.test + 10);

export { x, y, z };
