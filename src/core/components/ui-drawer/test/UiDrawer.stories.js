import React from 'react';
import { UiDrawer } from './../UiDrawer';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

storiesOf('Core Ui', module).add(
  'UiDrawer',
  ({
    drawerProps = {
      show: select('show', { true: true, false: false }, true),
    },
    coreUi_closeDrawer = () => {
      alert('Close Drawer Pressed');
    },
  }) => {
    return (
      <UiDrawer
        isLogged={true}
        coreUi_closeDrawer={coreUi_closeDrawer}
        drawerProps={drawerProps}
      />
    );
  },
);
