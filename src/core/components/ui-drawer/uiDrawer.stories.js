import React from "react";
import { UiDrawer } from "./UiDrawer";
import { select } from "@storybook/addon-knobs";

export const uiDrawer = ({
  drawerProps = {
    show: select("show", { true: true, false: false }, true),
  },
  coreUi_closeDrawer = () => {
    alert("Close Drawer Pressed");
  },
}) => {
  return (
    <UiDrawer
      isLogged={true}
      coreUi_closeDrawer={coreUi_closeDrawer}
      drawerProps={drawerProps}
    />
  );
};
