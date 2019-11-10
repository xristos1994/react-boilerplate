import { coreUi_updateModalState, coreUi_updateSnackbarState } from "./actions";

const reducer = (
  state = {
    modal: { show: false },
    snackbar: { show: false }
  },
  action
) => {
  switch (action.type) {
    case coreUi_updateModalState.type: {
      return { ...state, modal: action.payload };
    }
    case coreUi_updateSnackbarState.type: {
      return {
        ...state,
        snackbar: action.payload
      };
    }
    default:
      return state;
  }
};

export const coreUi_reducer = {
  coreUi: reducer
};

export default coreUi_reducer;
