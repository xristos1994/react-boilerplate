import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { config } from "@core/configuration";
import { isLogged, coreAuth_logout } from "@core/models/authentication/props";
import {
  coreUi_openDrawer,
  coreUi_closeDrawer,
  drawerProps
} from "@core/models/core-ui/props";
import { withProps } from "@core/utils/props";
import { styles } from "./style";

export const UiAppbar = ({
  isLogged,
  coreAuth_logout,
  coreUi_openDrawer,
  coreUi_closeDrawer,
  drawerProps
}) => {
  const classes = styles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {isLogged && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() =>
                drawerProps.show ? coreUi_closeDrawer() : coreUi_openDrawer()
              }
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" className={classes.title}>
            React Boilerplate
          </Typography>
          {isLogged && config.hasLogin && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    coreAuth_logout();
                  }}
                >
                  Log out
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withProps({
  isLogged,
  coreAuth_logout,
  coreUi_openDrawer,
  coreUi_closeDrawer,
  drawerProps
})(UiAppbar);
