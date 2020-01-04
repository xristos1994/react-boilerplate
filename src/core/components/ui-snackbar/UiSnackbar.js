// @flow
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { SnackbarContentWrapper } from './components';

import { withProps } from '@core/utils/props';
import { coreUi_closeSnackbar, snackbarProps } from '@core/models/core-ui';

import { positions } from './utils';

type Props = {
  snackbarProps: {
    message?: string,
    type?: 'success' | 'warning' | 'error' | 'info',
    position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight',
    show: boolean,
  },
  coreUi_closeSnackbar: Function,
};

export const UiSnackbar = ({
  snackbarProps: { message, type, position, show },
  coreUi_closeSnackbar,
}: Props) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={positions[position]}
        open={show}
        onClose={() => {
          coreUi_closeSnackbar({ message, type, position, show: false });
        }}
      >
        <SnackbarContentWrapper
          onClose={() => {
            coreUi_closeSnackbar({ message, type, position, show: false });
          }}
          variant={type}
          message={message}
        />
      </Snackbar>
    </div>
  );
};

export default withProps({ coreUi_closeSnackbar, snackbarProps })(UiSnackbar);
