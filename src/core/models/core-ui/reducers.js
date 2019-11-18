import { coreUi_updateModalState, coreUi_updateSnackbarState, coreUi_updateDrawerState } from "./actions";

const reducer = (
  state = {
    modal: { show: false },
    snackbar: { show: false },
    drawer: {show: false}
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
    case coreUi_updateDrawerState.type: {
      return { ...state, drawer: action.payload };
    }
    default:
      return state;
  }
};

export const coreUi_reducer = {
  coreUi: reducer
};

export default coreUi_reducer;
