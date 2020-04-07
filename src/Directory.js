import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Header, Logo } from "./components/";
import { ACTIVE_SENIOR_LIVING, ART_CONSULTANCY, DESIGN, ENQUIRY, FACILITIES_MANAGEMENT, FURNITURE_DESIGN, HOME, LIFESTYLE, PORTFOLIO, STYLING_AND_FURNISHING, TERMS, US } from "./constants/routes";
import { ActiveSeniorLiving, ArtConsultancy, Design, Enquiry, Error404, FacilitiesManagement, FurnitureDesign, Lifestyle, Portfolio, StylingAndFurnishing, Terms, Us } from "./views";


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
      <Route path={`${HOME}`} component={InProgress} exact />
      <Route path="/dev">
        <Header />
        <div style={{}}>
          <Switch>
            <Route path={`/dev${US}`} exact component={Us} />
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
              path={`/dev${STYLING_AND_FURNISHING}`}
              exact
              component={StylingAndFurnishing}
            />
            <Route path={`/dev${ENQUIRY}`} exact component={Enquiry} />
            <Route path={`/dev${PORTFOLIO}`} exact component={Portfolio} />
            <Route path={`/dev${TERMS}`} exact component={Terms} />
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

