import React from "react";
import portfolio from "../../assets/portfolio/portfolio.png";

const Portfolio = () => (
  <div className="d-flex justify-content-center flex-column" style={{}}>
    <img src={portfolio} height={window.innerHeight}/>
    <img src={"https://via.placeholder.com/200x200"} />
  </div>
);

export { Portfolio };
