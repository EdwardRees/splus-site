import React from "react";
import { CentralInfo, Description, Divider, Heading } from "../../components/";

const Error404 = ({ name }) => (
  <CentralInfo>
    <div style={{height: "80vh", paddingTop: "12vh"}}>
      <Heading name={name} />
      <Divider />
      <Description>
        <div style={{paddingTop: "15vh", paddingBottom: "15vh"}}>
          <p>coming</p>
          <p>next</p>
        </div>
      </Description>
      <Divider />
    </div>
  </CentralInfo>
);
export { Error404 };

