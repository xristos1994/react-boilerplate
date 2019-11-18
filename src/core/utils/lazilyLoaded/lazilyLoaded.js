import React, { lazy, Suspense } from 'react';
import { Loader } from '@core/components';

const lazilyLoaded = (fetchComp, WhileWaiting = Loader) =>
  class LazilyLoaded extends React.Component {
    constructor(props) {
      super(props);
      this.Component = lazy(fetchComp);
    }

    render() {
      const { Component } = this;
      return (
        <Suspense fallback={<WhileWaiting />}>
          <Component {...this.props} />
        </Suspense>
      );
    }
  };

export default lazilyLoaded;
