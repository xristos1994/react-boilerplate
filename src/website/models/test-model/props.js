import {
  testAction,
  requestTestAction,
  zipAction_1,
  zipAction_2,
  action1 as action1_,
  action2 as action2_,
  abort_zip as abort_zip_,
} from './actions';

const doTest = ({ dispatch }) => payload => dispatch(testAction(payload));

const requestTest = ({ dispatch }) => payload =>
  dispatch(requestTestAction(payload));

const zip_1 = ({ dispatch }) => () => dispatch(zipAction_1());

const zip_2 = ({ dispatch }) => () => dispatch(zipAction_2());

const test = ({ state }) => state.website.testState.test;

const action1 = ({ dispatch }) => payload => dispatch(action1_(payload));
const action2 = ({ dispatch }) => payload => dispatch(action2_(payload));
const abort_zip = ({ dispatch }) => payload => dispatch(abort_zip_(payload));

export { test, doTest, requestTest, zip_1, zip_2, action1, action2, abort_zip };
