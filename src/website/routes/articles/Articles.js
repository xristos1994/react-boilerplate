import React from "react";
import { Helmet } from "react-helmet-async";
import Articles from "components/main-content/components/articles";
import { withProps } from "@core/utils/props";
import { articles, isFetching, fetchArticles } from "models/articles/props";

export const Articles_ = ({ articles, isFetching, fetchArticles }) => {
  if (!isFetching && !articles) {
    fetchArticles();
  }
  return (
    <>
      <Helmet>
        <title>My App | Articles</title>
      </Helmet>
      <Articles />
    </>
  );
};

//export default Articles_;
export default withProps({ articles, isFetching, fetchArticles })(Articles_);
