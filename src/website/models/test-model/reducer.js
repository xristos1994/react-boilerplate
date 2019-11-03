import { testAction } from "./actions";

const reducer = (state = { test: 0 }, action) => {
  switch (action.type) {
    case testAction.succeeded.type:
      return action.payload;
    default:
      return state;
  }
};

export const testReducer = {
  testState: reducer
};

export default testReducer;
