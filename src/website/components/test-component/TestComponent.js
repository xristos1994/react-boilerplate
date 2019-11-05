import React from "react";
import Grid from "@material-ui/core/Grid";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

import "./testComponent.css";
import { x, y, z } from "models/test-model/props";
import { withProps } from "@core/utils/props";

export const TestComponent = ({ x, y, z }) => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item onClick={() => x()}>
        <AccessAlarmIcon />
        Click Me
      </Grid>
      <Grid item>{y}</Grid>
    </Grid>
  );
};

export default withProps({ x, y, z })(TestComponent);
