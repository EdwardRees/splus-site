import React from "react";


import landingscreen from "../img/landingscreen.png";

const Home = () => {
  return (
    <div className="container" style={{paddingBottom: "30px"}}>
      <div className="row">
        <div className="col-lg-2" />
        <div className="col-lg-8 text-center">
          <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="item active">
                <img
                  src={landingscreen}
                  alt="landing screen"
                  className="img-responsive"
                  width="100%"
                  // style={{ justifyContent: "center", alignItems: "center" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2" />
      </div>
    </div>
  );
};

export { Home };
