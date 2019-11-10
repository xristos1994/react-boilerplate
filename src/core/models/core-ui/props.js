import {
  coreUi_openModalAction,
  coreUi_closeModalAction,
  coreUi_openSnackbarAction,
  coreUi_closeSnackbarAction
} from "./actions";

const coreUi_openModal = ({ dispatch }) => payload =>
  dispatch(coreUi_openModalAction(payload));

const coreUi_closeModal = ({ dispatch }) => payload =>
  dispatch(coreUi_closeModalAction(payload));

const modalProps = ({ state }) => state.core.coreUi.modal;

const coreUi_openSnackbar = ({ dispatch }) => payload =>
  dispatch(coreUi_openSnackbarAction(payload));

const coreUi_closeSnackbar = ({ dispatch }) => payload =>
  dispatch(coreUi_closeSnackbarAction(payload));

const snackbarProps = ({ state }) => state.core.coreUi.snackbar;

export {
  coreUi_openModal,
  coreUi_closeModal,
  modalProps,
  coreUi_openSnackbar,
  coreUi_closeSnackbar,
  snackbarProps
};
