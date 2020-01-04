// @flow
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Articles from 'components/main-content/components/articles';

type Props = {
  match: object,
};

export const Author_ = ({ match }: Props) => {
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

export default Author_;
