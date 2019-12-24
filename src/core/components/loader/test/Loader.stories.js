import React from 'react';
import { Loader } from './../Loader';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

storiesOf('Core Ui', module).add(
  'Loader',
  ({
    loaderProps = {
      show: select('show', { true: true, false: false }, true),
    },
    forceShow = select('forceShow', { true: true, false: false }, false),
  }) => {
    return <Loader loaderProps={loaderProps} forceShow={forceShow} />;
  },
);
