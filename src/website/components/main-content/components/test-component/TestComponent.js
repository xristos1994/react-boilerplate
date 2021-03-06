// @flow
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
//import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
import { testIcon } from 'theme/icons';
import './testComponent.css';
import {
  test,
  doTest,
  requestTest,
  zip_1,
  zip_2,
  action1,
  action2,
  abort_zip,
} from 'models/test-model/props';
import { withProps } from '@core/utils/props';
import { coreUi_openModal, coreUi_openSnackbar } from '@core/models/core-ui';
import { navigateToTest } from 'models/app/props';
import { push } from '@core/models/router';
import LoginForm from './../loginForm';
import i18n from './../../../../../i18n/i18n';

type Props = {
  t: Function,
  test: number,
  doTest: Function,
  coreUi_openModal: Function,
  coreUi_openSnackbar: Function,
  requestTest: Function,
  zip_1: Function,
  zip_2: Function,
  push: Function,
  action1: Function,
  action2: Function,
  abort_zip: Function,
  navigateToTest: Function,
};

export const TestComponent = ({
  t,
  test,
  doTest,
  coreUi_openModal,
  coreUi_openSnackbar,
  requestTest,
  zip_1,
  zip_2,
  push,
  action1,
  action2,
  abort_zip,
  navigateToTest,
}: Props) => {
  const [act1, setAct1] = useState(0);
  const [act2, setAct2] = useState(100);
  const [state, setState] = useState(55);
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <div onClick={() => setState(state + 1)}>{state}</div>
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
        &nbsp; &nbsp; &nbsp; | zip 1 Network
      </Grid>
      <Grid item onClick={() => zip_2()}>
        &nbsp; &nbsp; &nbsp; | zip 2 Network
      </Grid>
      <Grid
        item
        onClick={() => {
          setAct1(act1 + 1);
          action1(act1 + 1);
        }}
      >
        &nbsp; &nbsp; &nbsp; | action 1
      </Grid>
      <Grid
        item
        onClick={() => {
          setAct2(act2 + 1);
          action2(act2 + 1);
        }}
      >
        &nbsp; &nbsp; &nbsp; | action 2
      </Grid>
      <Grid item onClick={() => abort_zip()}>
        &nbsp; &nbsp; &nbsp; | Abort ZIP
      </Grid>
      <Grid item onClick={() => push('/route1')}>
        &nbsp; &nbsp; &nbsp; | Route1
      </Grid>
      <Grid item>
        &nbsp; &nbsp; &nbsp; | <Link to="/route2">Route 2</Link>
      </Grid>
      <Grid item>
        &nbsp; &nbsp; &nbsp; |{' '}
        <Link
          to="/route3"
          onClick={e => {
            e.preventDefault();
            navigateToTest();
          }}
        >
          Route 3
        </Link>
      </Grid>
      <span onClick={() => i18n.changeLanguage('en')}>ENGLISH</span>
      {t('test')}
      <LoginForm />
    </Grid>
  );
};

export default withTranslation()(
  withProps({
    test,
    doTest,
    coreUi_openModal,
    coreUi_openSnackbar,
    requestTest,
    zip_1,
    zip_2,
    push,
    action1,
    action2,
    abort_zip,
    navigateToTest,
  })(TestComponent),
);
