import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

import "./testComponent.css";
import { testAction } from "models/test-model";

export const TestComponent = ({ test, testAction }) => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item onClick={testAction}>
        <AccessAlarmIcon />
        Click Me
      </Grid>
      <Grid item>{test}</Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  test: state.website.testState.test
});

const mapActionsToProps = { testAction };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TestComponent);
