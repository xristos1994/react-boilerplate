import React from "react";
import Grid from "@material-ui/core/Grid";

import "./testComponent.css";
import { test, doTest } from "models/test-model/props";
import { withProps } from "@core/utils/props";
import { coreUi_openModal, coreUi_openSnackbar } from "@core/models/core-ui";

export const TestComponent = ({
  test,
  doTest,
  coreUi_openModal,
  coreUi_openSnackbar
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
    </Grid>
  );
};

export default withProps({
  test,
  doTest,
  coreUi_openModal,
  coreUi_openSnackbar
})(TestComponent);
