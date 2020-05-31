import React, {useEffect, useState, FunctionComponent, Component} from "react";
import { Route, Redirect,RouteComponentProps, RouteProps } from "react-router-dom";
import { History } from 'history';

interface IPrivateRoute{
    component: FunctionComponent<any>;
}
const PrivateRoute = (props:IPrivateRoute& RouteProps):JSX.Element => {
    return (
            <Route component={props.component} {...props} /> 
    )
        
   
};
export default PrivateRoute;