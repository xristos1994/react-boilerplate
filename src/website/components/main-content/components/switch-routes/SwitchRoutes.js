import React from "react";
import { Switch, Route } from "react-router-dom";

import { isLogged } from "@core/models/authentication/props";
import { withProps } from "@core/utils/props";
import { config } from "@core/configuration";
import { home, login, route3 } from "routes";

const SwitchRoutes = ({ isLogged }) => {
  return (
    <Switch>
      {config.hasLogin && !isLogged && (
        <>
          <Route component={login} />
        </>
      )}
      {isLogged && (
        <Switch>
          <Route path="/home" component={home} />
          <Route path="/route3" component={route3} />
          <Route component={home} />
        </Switch>
      )}
    </Switch>
  );
};

export default withProps({
  isLogged
})(SwitchRoutes);
