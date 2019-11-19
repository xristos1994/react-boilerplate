import React from "react";
import { Helmet } from "react-helmet-async";
import { testIcon } from "theme/icons";
import { TestComponent } from "components/main-content/components";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>My App | Home</title>
        <link rel="icon" type="image/png" href={testIcon} sizes="16x16" />
      </Helmet>
      <div> Home </div>
      <TestComponent />
    </>
  );
};

export default Home;
