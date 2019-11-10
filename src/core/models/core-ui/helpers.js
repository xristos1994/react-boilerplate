import { nullOrUndefinedToValue } from "@core/utils/helpers";

const createSnackbarState = payload => ({
  message: nullOrUndefinedToValue(
    payload.message,
    "Undefined Application Meassage"
  ),
  type: nullOrUndefinedToValue(payload.type, "info"),
  position: nullOrUndefinedToValue(payload.position, "bottomRight")
});

const createModalState = payload => ({
  title: nullOrUndefinedToValue(payload.title, "Undefined Modal Title"),
  message: nullOrUndefinedToValue(payload.message, "Undefined Message")
});

export { createSnackbarState, createModalState };
