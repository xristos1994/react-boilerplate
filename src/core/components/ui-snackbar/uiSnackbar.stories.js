import React from "react";
import { UiSnackbar } from "./UiSnackbar";
import { select, text } from "@storybook/addon-knobs";

export const uiSnackbar = ({
  snackbarProps = {
    message: text("message", "test"),
    show: select("show", { true: true, false: false }, true),
    position: select(
      "position",
      {
        topLeft: "topLeft",
        topRight: "topRight",
        bottomLeft: "bottomLeft",
        bottomRight: "bottomRight",
      },
      "topLeft",
    ),
    type: select(
      "type",
      {
        success: "success",
        error: "error",
        warning: "warning",
        info: "info",
      },
      "success",
    ),
  },
  coreUi_closeSnackbar = () => alert("Close Button Pressed"),
}) => {
  return (
    <UiSnackbar
      snackbarProps={snackbarProps}
      coreUi_closeSnackbar={coreUi_closeSnackbar}
    />
  );
};
