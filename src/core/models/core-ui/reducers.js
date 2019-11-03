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
      const { title, message, show = false } = action.payload;
      return { ...state, modal: show ? { title, message, show } : { show } };
    }
    case coreUi_updateSnackbarState.type: {
      const { message, type, position, show = false } = action.payload;
      return {
        ...state,
        snackbar: show ? { message, type, position, show } : { show, type }
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
