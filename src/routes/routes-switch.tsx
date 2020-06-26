import React from "react";
import { Switch, Router, Redirect } from "react-router";
import PrivateRoute from "./route-private";
import Notices from "../containers/notice/notice";
import AboutUs from "../containers/aboutus/aboutus";
import Levels from "../containers/levels/levels";
import EducationalMaterial from "../containers/levels/educational";
import ParentCenters from "../containers/parentcenter/parentcenter";
import Methodology from "../containers/methodology/methodology";
import VideoLayout from "../containers/videos/videoLayout";
import Layout from "../containers/layout";
import ActivityImage from "../components/image-activity/activity-image";
import { BrowserRouter } from "react-router-dom";

interface AppProps {
  history: History;
}

const RouteSwitch = ({ history }: AppProps): JSX.Element => {
  return (
    <BrowserRouter basename="">
      <Layout>
        <Switch>
          <PrivateRoute exact path="/" component={Notices}></PrivateRoute>
          <PrivateRoute
            exact
            path="/image"
            component={ActivityImage}
          ></PrivateRoute>
          <PrivateRoute exact path="/inicio" component={Notices}></PrivateRoute>
          <PrivateRoute
            exact
            path="/quienessomos"
            component={AboutUs}
          ></PrivateRoute>
          <PrivateRoute exact path="/niveles" component={Levels}></PrivateRoute>
          <PrivateRoute
            exact
            path="/aprenderfamilia"
            component={ParentCenters}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/metodologia"
            component={Methodology}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/videos"
            component={VideoLayout}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path="/niveles/:nivel"
            component={EducationalMaterial}
          ></PrivateRoute>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default RouteSwitch;
