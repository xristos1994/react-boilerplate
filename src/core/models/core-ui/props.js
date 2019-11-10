import { coreUi_closeModalAction, coreUi_closeSnackbarAction } from "./actions";

const coreUi_closeModal = ({ dispatch }) => payload =>
  dispatch(coreUi_closeModalAction(payload));

const modalProps = ({ state }) => state.core.coreUi.modal;

const coreUi_closeSnackbar = ({ dispatch }) => payload =>
  dispatch(coreUi_closeSnackbarAction(payload));

const snackbarProps = ({ state }) => state.core.coreUi.snackbar;

export { coreUi_closeModal, modalProps, coreUi_closeSnackbar, snackbarProps };
