import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
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
      <Grid item onClick={() => push("/home")}>
        &nbsp; &nbsp; &nbsp; | Home
      </Grid>
      <Grid item>
        &nbsp; &nbsp; &nbsp; | <Link to="/login">Login</Link>
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
