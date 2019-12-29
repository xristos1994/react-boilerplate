import React from 'react';
import { Helmet } from 'react-helmet-async';
import Articles from 'components/main-content/components/articles';
import { withProps } from '@core/utils/props';
import {
  articles,
  isFetching,
  fetchArticlesByCategory,
  articlesCriteria,
} from 'models/articles/props';

export const Category_ = ({
  match,
  articles,
  isFetching,
  fetchArticlesByCategory,
  articlesCriteria,
}) => {
  return (
    <>
      <Helmet>
        <title>My App | Category</title>
      </Helmet>
      <div>Category {match.params.categoryId}</div>
      <Articles />
    </>
  );
};

export default withProps({
  articles,
  isFetching,
  fetchArticlesByCategory,
  articlesCriteria,
})(Category_);
