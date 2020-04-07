import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Logo, Footer, Header } from "./components/";
import {
  ActiveSeniorLiving,
  ArtConsultancy,
  Design,
  Enquiry,
  Error404,
  FacilitiesManagement,
  Lifestyle,
  Portfolio,
  Us,
  FurnitureDesign,
  InteriorDesign,
  StylingAndFurnishing,
} from "./views";

import {
  HOME,
  US,
  DESIGN,
  FACILITIES_MANAGEMENT,
  ACTIVE_SENIOR_LIVING,
  LIFESTYLE,
  ART_CONSULTANCY,
  FURNITURE_DESIGN,
  INTERIOR_DESIGN,
  STYLING_AND_FURNISHING,
  ENQUIRY,
  PORTFOLIO,
} from "./constants/routes";

const InProgress = () => {
  return (
    <div
      className="text-center"
      style={{
        display: "flex",
        flex: 1,
        minHeight: window.innerHeight,
        justifyContent: "center",
        alignItems: "center",
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
const Directory = () => (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
    <Router>
      <Route path="/" component={InProgress} exact />
      <Route path="/dev">
        <Header />

        <div style={{}}>
          <Switch>
            <Route path={`/dev${US}`} exact component={Us}></Route>
            <Route path={`/dev${DESIGN}`} exact component={Design} />
            <Route
              path={`/dev${FACILITIES_MANAGEMENT}`}
              component={FacilitiesManagement}
              exact
            />
            <Route
              path={`/dev${ACTIVE_SENIOR_LIVING}`}
              exact
              component={ActiveSeniorLiving}
            />
            <Route path={`/dev${LIFESTYLE}`} exact component={Lifestyle} />
            <Route
              path={`/dev${ART_CONSULTANCY}`}
              exact
              component={ArtConsultancy}
            />
            <Route
              path={`/dev${FURNITURE_DESIGN}`}
              exact
              component={FurnitureDesign}
            />
            <Route
              path={`/dev${INTERIOR_DESIGN}`}
              exact
              component={InteriorDesign}
            />
            <Route
              path={`/dev${STYLING_AND_FURNISHING}`}
              exact
              component={StylingAndFurnishing}
            />
            <Route path={`/dev${ENQUIRY}`} exact component={Enquiry} />
            <Route path={`/dev${PORTFOLIO}`} exact component={Portfolio} />
            <Route>
              <Error404 name={`404 Not Found`} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Route>
    </Router>
  </div>
);

export { Directory };
