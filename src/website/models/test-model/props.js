import { testAction, requestTestAction, zipAction_1, zipAction_2 } from "./actions";

const doTest = ({ dispatch }) => payload => dispatch(testAction(payload));

const requestTest = ({ dispatch }) => payload =>
  dispatch(requestTestAction(payload));

const zip_1 = ({ dispatch }) => () =>
  dispatch(zipAction_1());

const zip_2 = ({ dispatch }) => () =>
  dispatch(zipAction_2());

const test = ({ state }) => state.website.testState.test;

export { test, doTest, requestTest, zip_1, zip_2 };
