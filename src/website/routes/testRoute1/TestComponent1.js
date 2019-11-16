import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export const TestComponent1 = () => {
  let id = useParams();
  console.log(id);
  return (
    <>
      <Helmet>
        <title>Route 1</title>
      </Helmet>
      <div> Route 1 </div>
    </>
  );
};

export default TestComponent1;
