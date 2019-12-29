import React from 'react';

import { UiModal, UiSnackbar, UiAppbar, UiDrawer } from '@core/components';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { navigateToArticles, navigateToTest } from 'models/app/props';
import { withProps } from '@core/utils/props';

const UiComponents = ({ navigateToArticles, navigateToTest }) => {
  const options = [
    {
      label: 'Articles',
      action: () => navigateToArticles(),
      icon: <MailIcon />,
    },
    { label: 'Test', action: () => navigateToTest(), icon: <InboxIcon /> },
  ];
  return (
    <>
      <UiAppbar />
      <UiDrawer options={options} />
      <UiModal />
      <UiSnackbar />
    </>
  );
};

export default withProps({ navigateToArticles, navigateToTest })(UiComponents);
