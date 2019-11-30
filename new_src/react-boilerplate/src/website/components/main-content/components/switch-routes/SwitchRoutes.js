import React from "react";
import { Switch, Route } from "react-router-dom";

import { withProps } from "@core/utils/props";
import { isLogged } from "@core/models/authentication/props";
import { config } from "@core/configuration";
import { home, login, route3, articles } from "routes";

const SwitchRoutes = ({ isLogged }) => {
  return (
    <>
      <>
        {config.hasLogin && !isLogged && (
          <Switch>
            <Route path="/login" component={login} />
            <Route component={login} />
          </Switch>
        )}
      </>

      <>
        {(!config.hasLogin || isLogged) && (
          <Switch>
            <Route exact path="/home" component={home} />
            <Route exact path="/route3" component={route3} />
            <Route exact path="/articles" component={articles} />
            <Route component={home} />
          </Switch>
        )}
      </>
    </>
  );
};

export default withProps({
  isLogged
})(SwitchRoutes);
