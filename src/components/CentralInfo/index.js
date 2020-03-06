import React from "react";
import { TemplateCenter } from "../TemplateCenter";

const CentralInfo = ({ left, right, children }) => {
  return (
    <div
      className="container text-center"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flex: 1
      }}
    >
      <div style={{ flex: 1 }}>{left}</div>
      <div style={{ flex: 1 }}>
        <TemplateCenter>{children}</TemplateCenter>
      </div>
      <div style={{ flex: 1 }}>{right}</div>
    </div>
  );
};

export { CentralInfo };
