
import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import PrivateRoute from './route-private';
import Notices from '../containers/notice/notice'
import AboutUs from '../containers/aboutus/aboutus'
import Levels from '../containers/levels/levels'
import ParentCenters from '../containers/parentcenter/parentcenter'
import Methodology from '../containers/methodology/methodology'
import Layout from '../containers/layout'
import { BrowserRouter } from 'react-router-dom';

interface AppProps {
    history: History;
}

const RouteSwitch = ({ history }: AppProps): JSX.Element => {
    return (
        <BrowserRouter basename="/">
            <Layout>
                <Switch>
                        <PrivateRoute exact path="/inicio" component={Notices}></PrivateRoute>
                        <PrivateRoute exact path="/quienessomos" component={AboutUs}></PrivateRoute>
                        <PrivateRoute exact path="/niveles" component={Levels}></PrivateRoute>
                        <PrivateRoute exact path="/centropadres" component={ParentCenters}></PrivateRoute>
                        <PrivateRoute exact path="/metodologia" component={Methodology}></PrivateRoute>
                </Switch>
            </Layout>                
        </BrowserRouter>
    );
}
export default RouteSwitch;
