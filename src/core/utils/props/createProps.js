import { useSelector, useDispatch } from "react-redux";
import React from "react";

const findValue = (object, property) => {
  let value = object;
  const splitted = property.split(".");
  for (let s of splitted) {
    value = value[s];
    if (value === undefined) return value;
  }
  return value;
};

const actionProp = (name, action) => {
  return { action, type: "action", name };
};

const stateProp = (property, name, selector = value => value) => ({
  name,
  property,
  type: "prop",
  selector
});

const withProps = (...stateActionProps) => Component => props => {
  const dispatch = useDispatch();

  const myProps = useSelector(state => {
    const tempProps = {};
    for (let prop of stateActionProps.filter(s => s.type === "prop")) {
      tempProps[prop.name] = prop.selector(findValue(state, prop.property));
    }
    return tempProps;
  });

  const myActions = {};
  for (let prop of stateActionProps.filter(s => s.type === "action")) {
    myActions[prop.name] = props => dispatch(prop.action(props));
  }

  return <Component {...myProps} {...myActions} {...props} />;
};

export { actionProp, stateProp, withProps };
