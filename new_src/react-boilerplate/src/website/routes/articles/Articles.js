import React from "react";
import { Helmet } from "react-helmet-async";
import Articles from 'components/main-content/components/articles';

export const Articles_ = () => {
  return (
    <>
      <Helmet>
        <title>My App | Articles</title>
      </Helmet>
      <Articles />
    </>
  );
};

export default Articles_;
