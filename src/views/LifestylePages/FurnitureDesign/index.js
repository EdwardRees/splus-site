import React from "react";
import one from "../../../assets/lifestyle/furniture-design.png";
import two from "../../../assets/lifestyle/furniture-design-2.png";


const FurnitureDesign = () => (
  <div className="d-flex justify-content-center flex-column" style={{}}>
    <img src={one} alt="first collection" height={window.innerHeight}/>
    <br />
    <img src={two} alt="second collection" height={window.innerHeight}/>
  </div>
);

export { FurnitureDesign };
