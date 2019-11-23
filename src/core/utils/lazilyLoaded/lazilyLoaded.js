import React, { lazy, Suspense } from 'react';
import { Loader } from '@core/components';

const ForceLoader = () => <Loader forceShow={true} />

const lazilyLoaded = (fetchComp, WhileWaiting = ForceLoader) =>
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
