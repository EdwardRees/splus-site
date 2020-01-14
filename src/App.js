import "./App.css";

import React, { Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import { Footer, Header } from "./components";
import { About, Articles, Home, Products, Projects } from "./views";

const Previous = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/articles" component={Articles} />
        <Route path="/products" component={Products} />
        <Route path="/projects" component={Projects} />
        <Footer />
      </div>
    </Router>
  );
};

const SPlusLogo = () => {
  return (
    <Fragment>
      <span style={{ color: "#BFBFBF" }}>S</span>
      <span style={{ color: " #F46100" }}>
        <sup>+</sup>
      </span>
    </Fragment>
  );
};

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
      <h1>
        The <SPlusLogo /> site is currently under renovation.
        <br />
        Please come back later!
      </h1>
    </div>
  );
};

const RoutedInProgress = () => {
  return (
    <Router>
    <Route path="/" component={InProgress} exact />
      <div>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/articles" component={Articles} />
        <Route path="/products" component={Products} />
        <Route path="/projects" component={Projects} />
        </Switch>
        <Footer />
        </div>
    </Router>
  );
};

const App = () => {
  // return <RoutedInProgress />;
  // return <InProgress />;
  return <Previous />;
};

export default App;
