import "./App.css";

import React, { Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Logo } from "./components/";
import { Header } from "./components/Header";
import { Us } from './views';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Us />
      {/*<InProgress />*/}
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
      <h1 style={{fontWeight: 'bold'}}>
        The <Logo WIP /> site is currently under renovation.
        <br />
        Please come back later!
      </h1>
    </div>
  );
};

const App = () => <Home />;

export default App;
