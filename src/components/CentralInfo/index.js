import React from "react";
import { TemplateCenter } from "../TemplateCenter";

const CentralInfo = ({
  leftImage,
  rightImage,
  children,
  debug,
  backgroundImage = null,
}) => {
  if (backgroundImage == null)
    return (
      <div
        className="d-flex flex-row text-center row  no-gutters align-items-start"
        style={{ flex: 1 }}
      >
        <div className="d-flex align-self-stretch col-md">
          <img src={leftImage} style={{ maxWidth: "100%", height: "auto" }} />
        </div>

        <div className="d-flex align-self-stretch col-md-3 text-center">
          <TemplateCenter specificHeight={"auto"}>{children}</TemplateCenter>
        </div>

        <div className="d-flex align-self-stretch col-md">
          <img src={rightImage} style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      </div>
    );
  else {
    return (
      <div
        className="d-flex flex-row text-center row  no-gutters align-items-center justify-content-center"
        style={{ flex: 1, backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}
      >
        <div className="d-flex  col-md-3 text-center">
          <TemplateCenter specificHeight={"auto"}>{children}</TemplateCenter>
        </div>
      </div>
    );
  }
};

export { CentralInfo };
