import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useProps = (propsMapers, ownProps) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  if (!propsMapers) {
    return {};
  }

  return Object.entries(propsMapers).reduce(
    (props, [propName, maper]) =>
      Object.assign(props, {
        [propName]: maper({ state, dispatch }, ownProps),
      }),
    {}
  );
};

const withProps = propsMappers => Component => props => (
  <Component {...useProps(propsMappers, props)} {...props} />
);

export { useProps, withProps };
