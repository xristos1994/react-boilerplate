import { push as pushAction } from './actions';

const push = ({ dispatch }) => payload => dispatch(pushAction(payload));

export { push };
