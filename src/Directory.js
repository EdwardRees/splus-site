import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Header, Logo } from "./components/";
import {
  ACTIVE_SENIOR_LIVING,
  ART_CONSULTANCY,
  DESIGN,
  ENQUIRY,
  FACILITIES_MANAGEMENT,
  FURNITURE_DESIGN,
  HOME,
  LIFESTYLE,
  PORTFOLIO,
  STYLING_AND_FURNISHING,
  TERMS,
  US,
} from "./constants/routes";
import {
  ActiveSeniorLiving,
  ArtConsultancy,
  Design,
  Enquiry,
  Error404,
  FacilitiesManagement,
  FurnitureDesign,
  Lifestyle,
  Portfolio,
  StylingAndFurnishing,
  Terms,
  Us,
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
      <Route path="/">
        <Header />
        <div style={{}}>
          <Switch>
            <Route path={`${HOME}`} exact component={Us} />
            <Route path={`${US}`} exact component={Us} />
            <Route path={`${DESIGN}`} exact component={Design} />
            <Route
              path={`${FACILITIES_MANAGEMENT}`}
              component={FacilitiesManagement}
              exact
            />
            <Route
              path={`${ACTIVE_SENIOR_LIVING}`}
              exact
              component={ActiveSeniorLiving}
            />
            <Route path={`${LIFESTYLE}`} exact component={Lifestyle} />
            <Route
              path={`${ART_CONSULTANCY}`}
              exact
              component={ArtConsultancy}
            />
            <Route
              path={`${FURNITURE_DESIGN}`}
              exact
              component={FurnitureDesign}
            />
            <Route
              path={`${STYLING_AND_FURNISHING}`}
              exact
              component={StylingAndFurnishing}
            />
            <Route path={`${ENQUIRY}`} exact component={Enquiry} />
            <Route path={`${PORTFOLIO}`} exact component={Portfolio} />
            <Route path={`${TERMS}`} exact component={Terms} />
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
