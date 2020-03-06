import React from "react";
import { TemplateCenter } from "../TemplateCenter";

const CentralInfo = ({ left, right, children }) => {
  return (
    <div className="row text-center">
      <div className="col">{left}</div>
      <div className="col-3">
        <TemplateCenter>{children}</TemplateCenter>
      </div>
      <div className="col">{right}</div>
    </div>
  );
};

export { CentralInfo };
