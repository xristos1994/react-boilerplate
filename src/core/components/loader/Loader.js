import React from 'react';
import { withProps } from '@core/utils/props';
import { loaderProps } from '@core/models/core-ui/props';
import LinearProgress from '@material-ui/core/LinearProgress';
import { styles } from './style';

export const Loader = ({ loaderProps, forceShow = false }) => {
  const { show } = loaderProps;
  const classes = styles();
  return (
    (show || forceShow) && (
      <div className={classes.test}>
        <div className={classes.root}>
          <LinearProgress variant="query" />
          <LinearProgress variant="query" color="secondary" />
        </div>
      </div>
    )
  );
};

export default withProps({ loaderProps })(Loader);
