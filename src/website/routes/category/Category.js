import React from "react";
import { Helmet } from "react-helmet-async";
//import Article from "components/main-content/components/article";
//import { withProps } from "@core/utils/props";
// /import { articles, isFetching, fetchArticles } from "models/articles/props";

//export const Article_ = ({match, articles, isFetching, fetchArticles }) => {
export const Category_ = ({ match }) => {
  // if (!isFetching && !articles) {
  //   fetchArticles();
  // }
  return (
    <>
      <Helmet>
        <title>My App | Category</title>
      </Helmet>
      <div>Category {match.params.categoryId}</div>
      {/* <Articles /> */}
    </>
  );
};

export default Category_;
//export default withProps({ articles, isFetching, fetchArticles })(Articles_);