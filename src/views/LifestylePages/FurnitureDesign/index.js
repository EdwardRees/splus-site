import React from "react";
import one from "../../../assets/lifestyle/furniture-design.png";
import two from "../../../assets/lifestyle/furniture-design-2.png";


const FurnitureDesign = () => (
  <div className="d-flex justify-content-center flex-column" style={{}}>
    <img src={one} height={window.innerHeight}/>
    <br />
    <img src={two} height={window.innerHeight}/>
  </div>
);

export { FurnitureDesign };
