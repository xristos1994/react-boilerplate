import React from 'react';
import Grid from '@material-ui/core/Grid';
import Article from './components/article';
import { withProps } from '@core/utils/props';
import { articles, isFetching } from 'models/articles/props';

import { styles } from './style';

export const Articles = ({ articles, isFetching }) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      {!isFetching && articles && (
        <Grid container direction="row">
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default withProps({ articles, isFetching })(Articles);
