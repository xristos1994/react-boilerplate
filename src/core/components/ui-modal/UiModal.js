import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Scrollbars } from "react-custom-scrollbars";

import "./uiModal.css";
import { withProps } from "@core/utils/props";
import { coreUi_closeModal, modalProps } from "@core/models/core-ui/";

export const UiModal = ({ modalProps, coreUi_closeModal }) => {
  const { title = "", message = "", show = false } = modalProps;
  return (
    <div>
      <Dialog
        open={show}
        onClose={() => coreUi_closeModal()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <Scrollbars autoHeight={true}>
            <DialogContentText id="alert-dialog-description">
              {message}
            </DialogContentText>
          </Scrollbars>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => coreUi_closeModal()}
            color="primary"
            autoFocus={true}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withProps({ modalProps, coreUi_closeModal })(UiModal);
