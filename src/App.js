import "./App.css";

import React, { Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Logo, Header, Footer } from "./components/";
import { Us } from "./views";

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
  <div style={{display: 'flex', flexDirection: "column", height: "100vh"}}>
    <Router>
      <Route path="/" component={InProgress} exact />
      <Route path="/dev">
        <Header />
        <Switch>
          <Route path="/dev/us" component={Us} />
        </Switch>
        <Footer />
      </Route>
    </Router>
  </div>
);

const App = () => <RoutedApp />;

export default App;
