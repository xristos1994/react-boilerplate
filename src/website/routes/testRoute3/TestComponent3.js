import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TestComponent } from 'components/main-content/components';

export const TestComponent3 = () => {
  return (
    <>
      <Helmet>
        <title>Route 3</title>
      </Helmet>
      <TestComponent />
    </>
  );
};

export default TestComponent3;
