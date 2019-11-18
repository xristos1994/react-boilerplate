import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles(theme => {
  console.log(theme);
  return {
    success: {
      backgroundColor: theme.palette.success.main
    },
    error: {
      backgroundColor: theme.palette.error.main
    },
    info: {
      backgroundColor: theme.palette.info.main
    },
    warning: {
      backgroundColor: theme.palette.warning.main
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    message: {
      display: "flex",
      alignItems: "center"
    }
  };
});
