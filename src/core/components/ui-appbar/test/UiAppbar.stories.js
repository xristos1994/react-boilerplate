import React from 'react';
import { UiAppbar } from './../UiAppbar';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { config } from '@core/configuration';

storiesOf('Core Ui', module).add(
  'UiAppbar',
  ({
    drawerProps = {
      show: select('show Drawer', { true: true, false: false }, true),
    },
    isLogged = select('isLogged', { true: true, false: false }, true),
    coreAuth_logout = () => console.log('Logout pressed'),
    coreUi_openDrawer = () => console.log('Open Drawer pressed'),
    coreUi_closeDrawer = () => console.log('Close Drawer pressed'),
    hasLogin = select('config.hasLogin', { true: true, false: false }, true),
  }) => {
    config.hasLogin = hasLogin;
    return (
      <UiAppbar
        drawerProps={drawerProps}
        isLogged={isLogged}
        coreAuth_logout={coreAuth_logout}
        coreUi_openDrawer={coreUi_openDrawer}
        coreUi_closeDrawer={coreUi_closeDrawer}
      />
    );
  },
);

// export default { title: 'Appbar States' }; //, decorators: [withKnobs] };

// storiesOf('Appbar States', module).add(
//   'with text',
//   withScreenshot()(() => {
//     config.hasLogin = true;
//     return <UiAppbar drawerProps={{ show: true }} isLogged={true} />;
//   })
// );
