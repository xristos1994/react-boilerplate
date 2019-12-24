import React from 'react';

import { MainContent } from 'components';
import { UiModal, UiSnackbar, UiAppbar, UiDrawer } from '@core/components';

const Website = () => {
  return (
    <>
      <UiAppbar />
      <UiDrawer />
      <UiModal />
      <UiSnackbar />
      <MainContent />
    </>
  );
};

export default Website;
