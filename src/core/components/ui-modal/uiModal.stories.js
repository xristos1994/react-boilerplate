import React from "react";
import { UiModal } from "./UiModal";
import { select, text } from "@storybook/addon-knobs";

export const uiModal = ({
  modalProps = {
    message: text("message", "test Message"),
    show: select("show", { true: true, false: false }, true),
    title: text("title", "test"),
  },
  coreUi_closeModal = () => {
    alert("Close Modal Pressed");
  },
}) => {
  setTimeout(() => {
    document.querySelectorAll('[tabindex="-1"]').forEach(elem => {
      elem.removeAttribute("tabindex");
    });
  }, 100);

  return (
    <UiModal modalProps={modalProps} coreUi_closeModal={coreUi_closeModal} />
  );
};
