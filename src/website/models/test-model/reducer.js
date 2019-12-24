import { testAction, requestTestAction } from './actions';

const reducer = (state = { test: 0 }, action) => {
  switch (action.type) {
    case testAction.succeeded.type:
      return action.payload;
    case requestTestAction.succeeded.type:
      return { ...state, testSuccess: action.payload, testFail: '' };
    case requestTestAction.failed.type:
      return { ...state, testSuccess: '', testFail: action.payload };
    default:
      return state;
  }
};

export const testReducer = {
  testState: reducer,
};
