import React from "react";
import one from "../../assets/portfolio/1.png";
import two from "../../assets/portfolio/2.png";
import three from "../../assets/portfolio/3.png";
import four from "../../assets/portfolio/4.png";
import five from "../../assets/portfolio/5.png";


const Portfolio = () => (
  <div className="d-flex justify-content-center flex-column" style={{}}>
    <img src={one} alt="first collection" height={window.innerHeight}/>
    <img src={two} height={window.innerHeight} alt="second collection" />
    <br />
    <img src={three} height={window.innerHeight} alt="third collection" />
    <br />
    <img src={four} height={window.innerHeight} alt="fourth collection"/>
    <br />
    <img src={five} height={window.innerHeight} alt="fifth collection"/>
  </div>
);

export { Portfolio };
