import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { SnackbarContentWrapper } from './components';

import { withProps } from '@core/utils/props';
import { coreUi_closeSnackbar, snackbarProps } from '@core/models/core-ui';

import { positions } from './utils';

export const UiSnackbar = ({ snackbarProps, coreUi_closeSnackbar }) => {
  const { message, type, position, show } = snackbarProps;
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
