import React from "react";
import one from "../../../assets/lifestyle/styling-and-furnishing.png";
import two from "../../../assets/lifestyle/styling-and-furnishing-2.png";


const StylingAndFurnishing = () => (
  <div className="d-flex container justify-content-center flex-column" style={{}}>
    <img src={one} alt="first collection" height={window.innerHeight}/>
    <br />
    <img src={two} alt="second collection" height={window.innerHeight}/>
  </div>
);

export { StylingAndFurnishing };
