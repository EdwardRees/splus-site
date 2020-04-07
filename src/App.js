import "./App.css";

import React, { Fragment } from "react";
import {
  Switch,
  Redirect,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { Logo, Header, Footer } from "./components/";
import {
  Us,
  Design,
  FacilitiesManagement,
  ActiveSeniorLiving,
  Lifestyle,
  Enquiry,
  Error404,
  ImagesSlideshow,
  Portfolio
} from "./views";

const InProgress = () => {
  return (
    <div
      className="text-center"
      style={{
        display: "flex",
        flex: 1,
        minHeight: window.innerHeight,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1 style={{ fontWeight: "bold" }}>
        The <Logo WIP /> site is currently under renovation.
        <br />
        Please come back later!
      </h1>
    </div>
  );
};

const RoutedApp = () => (
  // <div style={{ display: 'flex', height: "100vh", flexDirection: 'column' }}>
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
    <Router>
      <Route path="/" component={InProgress} exact />
      <Route path="/dev">
        <Header />

        <div style={{}}>
          <Switch>
            <Route path="/dev/us" exact>
              <Us wip={true} />
            </Route>
            <Route path="/dev/slide" exact component={ImagesSlideshow} />
            <Route path="/dev/design" exact component={Design} />
            <Route
              path="/dev/facilities-management"
              component={FacilitiesManagement}
              exact
            />
            <Route
              path="/dev/active-senior-living"
              exact
              component={ActiveSeniorLiving}
            />
            <Route path="/dev/lifestyle" exact component={Lifestyle} />
            <Route path="/dev/enquiry" exact component={Enquiry} />
            <Route path="/dev/portfolio" exact component={Portfolio} />
            <Route>
              <Error404 name="404 Not Found" />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Route>
    </Router>
  </div>
);

const App = () => <RoutedApp />;

export default App;
