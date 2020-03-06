import React from "react";
import { CentralInfo } from "../../components";

const Heading = ({ name }) => <span style={{ color: "#616161" }}>{name}</span>;

const Divider = () => (
  <div style={{ width: "100%", paddingLeft: 10, paddingRight: 10, flex: 1, borderBottom: "1px solid #F97646" }} />
);

const Us = () => {
  return (
    <CentralInfo left="Hello" right="Bye">
      <Heading name="Us" />
      <Divider />
    </CentralInfo>
  );
};

export { Us };
