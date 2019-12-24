import React from 'react';
import { UiDrawer } from './../ui-drawer/UiDrawer';
import { UiAppbar } from './../ui-appbar/UiAppbar';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { config } from '@core/configuration';

storiesOf('Core Ui', module).add(
  'Appbar & Drawer',
  ({
    drawerProps = {
      show: select('Drawer show', { true: true, false: false }, true),
    },
    isLogged = select('isLogged', { true: true, false: false }, true),
    coreAuth_logout = () => console.log('Logout pressed'),
    coreUi_openDrawer = () => console.log('Open Drawer pressed'),
    coreUi_closeDrawer = () => console.log('Close Drawer pressed'),
    hasLogin = select('config.hasLogin', { true: true, false: false }, true),
  }) => {
    config.hasLogin = hasLogin;
    return (
      <>
        <UiAppbar
          drawerProps={drawerProps}
          isLogged={isLogged}
          coreAuth_logout={coreAuth_logout}
          coreUi_openDrawer={coreUi_openDrawer}
          coreUi_closeDrawer={coreUi_closeDrawer}
        />
        <UiDrawer
          isLogged={isLogged}
          coreUi_closeDrawer={coreUi_closeDrawer}
          drawerProps={{ ...drawerProps, show: drawerProps.show && isLogged }}
        />
      </>
    );
  }
);
