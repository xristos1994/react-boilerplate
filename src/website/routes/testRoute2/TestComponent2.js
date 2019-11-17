import React from "react";
import { Helmet } from "react-helmet-async";
import { LoginWrapper } from "@core/components";

export const TestComponent2 = () => {
  return (
    <>
      <Helmet>
        <title>Route 2</title>
      </Helmet>
      <div> Route 2 </div>
      <LoginWrapper />
    </>
  );
};

export default TestComponent2;
