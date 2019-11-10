import React from "react";
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
import { withProps } from "@core/utils/props";
import { coreUi_closeSnackbar, snackbarProps } from "@core/models/core-ui";

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
  variant: PropTypes.oneOf(["error", "info", "success", "warning"])
};

export const UiSnackbar = ({ snackbarProps, coreUi_closeSnackbar }) => {
  const { message, type, position, show } = snackbarProps;
  return (
    <div>
      <Snackbar
        anchorOrigin={positions[position]}
        open={show}
        onClose={() => {
          coreUi_closeSnackbar({ message, type, position, show: false });
        }}
      >
        <MySnackbarContentWrapper
          onClose={() => {
            coreUi_closeSnackbar({ message, type, position, show: false });
          }}
          variant={type}
          message={message}
        />
      </Snackbar>
    </div>
  );
};
export default withProps({ coreUi_closeSnackbar, snackbarProps })(UiSnackbar);
