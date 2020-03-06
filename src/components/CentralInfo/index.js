import React from "react";
import { TemplateCenter } from "../TemplateCenter";

const CentralInfo = ({ leftImage, rightImage, children, debug }) => {
  return (
    <div className="text-center row  no-gutters" style={{ flex: 1 }}>
      <div className="col-md">
        <img src={leftImage} 
        style={{maxWidth: "100%", height: "auto"}}
        
        />
      </div>
      <div className="col-md text-center">
        <TemplateCenter specificHeight={"auto"}>{children}</TemplateCenter>
      </div>
      <div className="col-md">
        <img src={rightImage} 
        style={{maxWidth: "100%", height: "auto"}}
         />
      </div>
    </div>
  );
  // <img
  //   src={rightImage}
  //   // className="img-fluid"
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center center",
  //   style={{ height: "auto", maxWidth: "100%",

  // }}
  //   alt="Right"
  // />
  // return (
  //   <div
  //     className="text-center"
  //     style={{
  //       display: "flex",
  //       flexDirection: "row",
  //       justifyContent: "center",
  //       flex: 3
  //     }}
  //   >
  //     <div style={{ flex: 1 }}>
  //       <img src={leftImage} alt="Left" height="100%" style={{}}  />
  //     </div>
  //     <div style={{ flex: 1 }}>
  //       <TemplateCenter>{children}</TemplateCenter>
  //     </div>
  //     <div style={{ flex: 1 }}>
  //       <img src={rightImage} alt="Right" height="100%" />
  //     </div>
  //   </div>
  // );
};

export { CentralInfo };
