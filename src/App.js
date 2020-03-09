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
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
    <Router>
      <Route path="/" component={InProgress} exact />
      <Route path="/dev">
        <Header />

        <div style={{}}>
          <Switch>
            <Route path="/dev/us" exact component={Us} />
            <Route path="/dev/wip/us" exact>
              <Us wip={true} />
            </Route>
            <Route path="/dev/wip/design" exact component={Design} />
            <Route
              path="/dev/wip/facilities-management"
              component={FacilitiesManagement}
              exact
            />
            <Route
              path="/dev/wip/active-senior-living"
              exact
              component={ActiveSeniorLiving}
            />
            <Route path="/dev/wip/lifestyle" exact component={Lifestyle} />
            <Route path="/dev/wip/enquiry" exact component={Enquiry} />
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
