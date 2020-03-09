import "./App.css";

import React, { Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Logo, Header, Footer } from "./components/";
import {
  Us,
  Design,
  FacilitiesManagement,
  ActiveSeniorLiving,
  Lifestyle,
  Enquiry,
  Error404
} from "./views";

const InProgress = () => {
  return (
    <div
      className="text-center"
      style={{
        display: "flex",
        flex: 1,
        height: window.innerHeight * 0.9,
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
  <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
    <Router>
      <Route path="/" component={InProgress} exact />
      <Route path="/dev">
        <Header />
        <Switch>
          <Route path="/dev/us" component={Us} />
          <Route path="/dev/wip/design" component={Design} />
          <Route
            path="/dev/wip/facilities-management"
            component={FacilitiesManagement}
          />
          <Route
            path="/dev/wip/active-senior-living"
            component={ActiveSeniorLiving}
          />
          <Route path="/dev/wip/lifestyle" component={Lifestyle} />
          <Route path="/dev/wip/enquiry" component={Enquiry} />
        </Switch>
        <Route>
          <Error404 name="Not Found" />
        </Route>
        <Footer />
      </Route>
    </Router>
  </div>
);

const App = () => <RoutedApp />;

export default App;
