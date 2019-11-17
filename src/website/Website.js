import React from "react";
import { Switch, Route } from "react-router-dom";

import { TestComponent } from "components";
import { UiModal } from "@core/components";
import { UiSnackbar } from "@core/components";
import { route1, route2, route3 } from "routes";

const Website = () => {
  return (
    <>
      <TestComponent />
      <UiModal />
      <UiSnackbar />
      <Switch>
        <Route exact path="/route1/:id" component={route1} />
        <Route exact path="/route2" component={route2} />
        <Route exact path="/route3" component={route3} />
        <Route component={route1} />{" "}
        {/*default route --> Spinner  when load push to any of the paths*/}
      </Switch>
    </>
  );
};

export default Website;
