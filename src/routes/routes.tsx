import React from 'react';
import { Switch, Route } from 'react-router';
import RouteSwitch from './routes-switch';

const routes = (
    <Switch>
      <Route  component={RouteSwitch} />     
    </Switch>
)

export default routes;