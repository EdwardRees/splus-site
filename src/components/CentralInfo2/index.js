import React from "react";
import { TemplateCenter } from "../TemplateCenter";

const CentralInfo2 = ({ leftImage, rightImage, children, debug }) => {
  return (
    <div className="text-center row  no-gutters" style={{ flex: 1 }}>
      <div className="col-md">
        <img src={leftImage} style={{ maxWidth: "100%", height: "auto" }} />
      </div>
      <div className="col-md-3 text-center">
        <TemplateCenter specificHeight={"auto"}>{children}</TemplateCenter>
      </div>
      <div className="col-md">
        <img src={rightImage} style={{ maxWidth: "100%", height: "auto" }} />
      </div>
    </div>
  );
  
};

export { CentralInfo2 };
