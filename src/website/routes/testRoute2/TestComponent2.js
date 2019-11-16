import React from "react";
import { Helmet } from 'react-helmet-async';

export const TestComponent2 = () => {
  return (
    <>
      <Helmet>
          <title>Route 2</title>
      </Helmet>
      <div> Route 2 </div>
    </>
  );
};

export default TestComponent2;
