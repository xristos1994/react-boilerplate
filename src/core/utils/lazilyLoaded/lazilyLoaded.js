import React, { lazy, Suspense } from 'react';

//import Spinner from './spinner';

const Spinner = () => <h1>W A I T I N G</h1>

//const lazilyLoaded = (fetchComp, WhileWaiting = Spinner) =>
const lazilyLoaded = (fetchComp, WhileWaiting = Spinner) =>
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
