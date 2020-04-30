    
import React from 'react';
import { Switch, Route } from 'react-router';
import  Inicio  from './../containers/index'
const routes = (
    <Switch>
        <Route exact path="/" component={Inicio}></Route>
    </Switch>
)

export default routes