import React from "react";
import { Helmet } from "react-helmet-async";
import Articles from "components/main-content/components/articles";
import { withProps } from "@core/utils/props";
import {
  articles,
  isFetching,
  fetchArticlesByAuthor,
  articlesCriteria,
} from "models/articles/props";

export const Author_ = ({
  match,
  articles,
  isFetching,
  fetchArticlesByAuthor,
  articlesCriteria,
}) => {
  if (!isFetching && articlesCriteria !== `author_${match.params.authorId}`) {
    fetchArticlesByAuthor(match.params.authorId);
  }
  return (
    <>
      <Helmet>
        <title>My App | Author</title>
      </Helmet>
      <div>Author {match.params.authorId}</div>
      <Articles />
    </>
  );
};

export default withProps({
  articles,
  isFetching,
  fetchArticlesByAuthor,
  articlesCriteria,
})(Author_);
