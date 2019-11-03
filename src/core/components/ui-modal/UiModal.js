import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Scrollbars } from "react-custom-scrollbars";

import "./uiModal.css";
import { coreUi_closeModalAction } from "@core/models/core-ui";

export const UiModal = ({ modalProps, coreUi_closeModalAction }) => {
  const { title = "", message = "", show } = modalProps;
  return (
    <div>
      <Dialog
        open={show}
        onClose={coreUi_closeModalAction}
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
            onClick={coreUi_closeModalAction}
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

const mapStateToProps = state => ({
  modalProps: state.core.coreUi.modal
});

const mapActionsToProps = { coreUi_closeModalAction };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(UiModal);
