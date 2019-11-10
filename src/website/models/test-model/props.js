import { testAction } from "./actions";

const doTest = ({ dispatch }) => payload => dispatch(testAction(payload));

const test = ({ state }) => state.website.testState.test;

export { test, doTest };
