// @flow
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Scrollbars } from 'react-custom-scrollbars';

import { withProps } from '@core/utils/props';
import { coreUi_closeModal, modalProps } from '@core/models/core-ui/';

type Props = {
  modalProps: {
    title?: string,
    message?: string,
    show: boolean,
  },
  coreUi_closeModal: Function,
};

export const UiModal = ({
  modalProps: { title = '', message = '', show = false },
  coreUi_closeModal,
}: Props) => {
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
