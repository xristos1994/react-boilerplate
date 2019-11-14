import { testAction, requestTestAction } from "./actions";

const doTest = ({ dispatch }) => payload => dispatch(testAction(payload));

const requestTest = ({ dispatch }) => payload =>
  dispatch(requestTestAction(payload));

const test = ({ state }) => state.website.testState.test;

export { test, doTest, requestTest };
