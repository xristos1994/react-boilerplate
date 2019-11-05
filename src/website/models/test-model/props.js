import { testAction } from "./actions";

const x = ({ dispatch }) => () => dispatch(testAction());
const y = ({
  state: {
    website: {
      testState: { test },
    },
  },
}) => test + 3;
const z = ({
  state: {
    website: { testState },
  },
}) => testState.test + 10;

export { x, y, z };
