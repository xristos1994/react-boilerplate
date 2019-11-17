import React from "react";
import Grid from "@material-ui/core/Grid";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { testIcon } from "theme/icons";
import "./testComponent.css";
import {
  test,
  doTest,
  requestTest,
  zip_1,
  zip_2
} from "models/test-model/props";
import { withProps } from "@core/utils/props";
import { coreUi_openModal, coreUi_openSnackbar } from "@core/models/core-ui";
import { push } from "@core/models/router";

export const TestComponent = ({
  test,
  doTest,
  coreUi_openModal,
  coreUi_openSnackbar,
  requestTest,
  zip_1,
  zip_2,
  push
}) => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Helmet>
        <title>Test</title>
        <link rel="icon" type="image/png" href={testIcon} sizes="16x16" />
      </Helmet>
      <Grid item onClick={() => doTest({ test })}>
        Add 1:
      </Grid>
      <Grid item>{test}</Grid>
      <Grid item onClick={() => coreUi_openModal({})}>
        &nbsp; &nbsp; &nbsp; | Open Modal
      </Grid>
      <Grid item onClick={() => coreUi_openSnackbar({})}>
        &nbsp; &nbsp; &nbsp; | Open Snackbar
      </Grid>
      <Grid item onClick={() => requestTest()}>
        &nbsp; &nbsp; &nbsp; | Request
      </Grid>
      <Grid item onClick={() => zip_1()}>
        &nbsp; &nbsp; &nbsp; | zip 1
      </Grid>
      <Grid item onClick={() => zip_2()}>
        &nbsp; &nbsp; &nbsp; | zip 2
      </Grid>
      <Grid item onClick={() => push("/route1")}>
        &nbsp; &nbsp; &nbsp; | Route1
      </Grid>
      <Grid item>
        &nbsp; &nbsp; &nbsp; | <Link to="/route2">Route 2</Link>
      </Grid>
      <Grid item>
        &nbsp; &nbsp; &nbsp; | <Link to="/route3">Route 3</Link>
      </Grid>
    </Grid>
  );
};

export default withProps({
  test,
  doTest,
  coreUi_openModal,
  coreUi_openSnackbar,
  requestTest,
  zip_1,
  zip_2,
  push
})(TestComponent);
