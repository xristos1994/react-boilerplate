import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WarningIcon from "@material-ui/icons/Warning";

import { styles } from "./styles";
import { coreUi_closeSnackbarAction } from "@core/models/core-ui";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const positions = {
  topLeft: {
    vertical: "top",
    horizontal: "left"
  },
  topRght: {
    vertical: "top",
    horizontal: "right"
  },
  bottomLeft: {
    vertical: "bottom",
    horizontal: "left"
  },
  bottomRight: {
    vertical: "bottom",
    horizontal: "right"
  }
};

const MySnackbarContentWrapper = props => {
  const classes = styles();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
};

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};

export const UiSnackbar = ({ snackbarProps, coreUi_closeSnackbarAction }) => {
  const {
    message = "",
    type = "info",
    position = "bottomRight",
    show
  } = snackbarProps;
  return (
    <div>
      {show && (
        <Snackbar
          anchorOrigin={positions[position]}
          open={show}
          onClose={coreUi_closeSnackbarAction}
        >
          <MySnackbarContentWrapper
            onClose={coreUi_closeSnackbarAction}
            variant={type}
            message={message}
          />
        </Snackbar>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  snackbarProps: state.core.coreUi.snackbar
});

const mapActionsToProps = {
  coreUi_closeSnackbarAction
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(UiSnackbar);
