// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { withProps } from '@core/utils/props';
import { isLogged } from '@core/models/authentication/props';
import { config } from '@core/configuration';
import {
  home,
  login,
  route3,
  articles,
  article,
  author,
  category,
} from 'routes';

type Props = {
  isLogged: boolean,
};

const SwitchRoutes = ({ isLogged }: Props) => {
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
            <Route exact path="/article/:articleId" component={article} />
            <Route exact path="/author/:authorId" component={author} />
            <Route exact path="/category/:categoryId" component={category} />
            <Route component={home} />
          </Switch>
        )}
      </>
    </>
  );
};

export default withProps({
  isLogged,
})(SwitchRoutes);
