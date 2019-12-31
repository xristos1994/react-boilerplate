import React from 'react';
import { UiDrawer } from './../UiDrawer';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
const options = [
  {
    label: 'Articles',
    action: () => console.log('Articles Clicked'),
    icon: <MailIcon />,
  },
  {
    label: 'Test',
    action: () => console.log('Test Clicked'),
    icon: <InboxIcon />,
  },
];

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
        options={options}
        isLogged={true}
        coreUi_closeDrawer={coreUi_closeDrawer}
        drawerProps={drawerProps}
      />
    );
  },
);
