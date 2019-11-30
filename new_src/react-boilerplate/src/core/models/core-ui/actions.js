import { Action } from "@core/actions-engine";

//  Modal
export const coreUi_openModalAction = Action("CORE_UI", "OPEN_MODAL");

export const coreUi_closeModalAction = Action("CORE_UI", "CLOSE_MODAL");

export const coreUi_updateModalState = Action("CORE_UI", "UPDATE_MODAL_STATE");
// ~ Modal

//  Snackbar
export const coreUi_openSnackbarAction = Action("CORE_UI", "OPEN_SNACKBAR");

export const coreUi_closeSnackbarAction = Action("CORE_UI", "CLOSE_SNACKBAR");

export const coreUi_closeSnackbarAfterMs = Action(
  "CORE_UI",
  "CLOSE_SNACKBAR_AFTER_MS"
);

export const coreUi_updateSnackbarState = Action(
  "CORE_UI",
  "UPDATE_SNACKBAR_STATE"
);
// ~ Snackbar

// Drawer
  export const coreUi_openDrawerAction = Action("CORE_UI", "OPEN_DRAWER");

  export const coreUi_closeDrawerAction = Action("CORE_UI", "CLOSE_DRAWER");

  export const coreUi_updateDrawerState = Action("CORE_UI", "UPDATE_DRAWER_STATE");
// ~Drawer

// Loader
  export const coreUi_openLoaderAction = Action("CORE_UI", "OPEN_LOADER");

  export const coreUi_closeLoaderAction = Action("CORE_UI", "CLOSE_LOADER");

  export const coreUi_updateLoaderState = Action("CORE_UI", "UPDATE_LOADER_STATE");
// ~Loader
