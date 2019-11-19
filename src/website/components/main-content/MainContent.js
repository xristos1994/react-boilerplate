import React from "react";
import Grid from "@material-ui/core/Grid";

//import { Loader } from '@core/components';
import { withProps } from "@core/utils/props";
import { drawerProps } from "@core/models/core-ui/props";
import { SwitchRoutes } from "./components";
import { Scrollbars } from "react-custom-scrollbars";
import styles from "./style";

export const MainContent = ({ drawerProps }) => {
  const classes = styles(drawerProps.show)();
  return (
    <Scrollbars style={{ height: "calc(100vh - 64px)" }}>
      <Grid
        className={classes.mainContent}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {/*<Loader />*/}
        <SwitchRoutes />
      </Grid>
    </Scrollbars>
  );
};

export default withProps({
  drawerProps
})(MainContent);
