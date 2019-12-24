import React from 'react';
import { Helmet } from 'react-helmet-async';
//import Article from "components/main-content/components/article";
import { withProps } from '@core/utils/props';
import { article, isFetching, fetchArticle } from 'models/articles/props';

export const Article_ = ({ match, article, isFetching, fetchArticle }) => {
  if (
    (!isFetching && !article) ||
    // eslint-disable-next-line
    (!isFetching && article && article.id != match.params.articleId)
  ) {
    debugger;
    fetchArticle(match.params.articleId);
  }
  return (
    <>
      <Helmet>
        <title>My App | Article</title>
      </Helmet>
      <div>Article {match.params.articleId}</div>
      {/* <Articles /> */}
    </>
  );
};

export default withProps({ article, isFetching, fetchArticle })(Article_);
