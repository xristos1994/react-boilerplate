// @flow
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Articles from 'components/main-content/components/articles';

type Props = {
  match: object,
};

export const Category_ = ({ match }: Props) => {
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

export default Category_;
