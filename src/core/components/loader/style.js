import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles(theme => ({
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
