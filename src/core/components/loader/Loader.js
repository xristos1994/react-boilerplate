import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    position:'fixed',
    width: '50%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  test: {
    position:'fixed',
    top:'64px',
    backgroundColor: '#777777',
    width:'100%',
    height: 'calc(100vh - 64px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8
  }
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.test}>
      <div className={classes.root}>
        <LinearProgress variant="query" />
        <LinearProgress variant="query" color="secondary" />
      </div>
    </div>
  );
}

export default Loader;
