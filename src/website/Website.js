import React from "react";
import { TestComponent } from "components";
import { UiModal } from "@core/components";
import { UiSnackbar } from "@core/components";

const Website = () => {
  return (
    <>
      <TestComponent />
      <UiModal />
      <UiSnackbar />
    </>
  );
};

export default Website;
