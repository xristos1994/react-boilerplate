import React from "react";
import { Switch, Route } from "react-router-dom";

import { config } from "@core/configuration";
import { home, login, route3, articles } from "routes";

const SwitchRoutes = () => {
  return (
      <Switch>
        <Route exact path="/home" component={home} />
        {config.hasLogin && <Route exact path="/login" component={login} />}
        <Route exact path="/route3" component={route3} />
        <Route exact path="/articles" component={articles} />
        <Route component={home} />
      </Switch>
  );
};

export default SwitchRoutes;
