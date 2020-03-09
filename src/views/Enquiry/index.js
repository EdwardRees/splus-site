import React from "react";
import {
  Description,
  Divider,
  Heading,
  Link,
  LinkGroup,
  CentralInfo
} from "../../components/";

const left = require("../../assets/us/left.png");
const right = require("../../assets/us/right.png");

const VerticalDivider = () => (
  <span style={{ fontWeight: "bold", color: "#f79646", fontFamily: "Corbel" }}>
    {" "}
    &nbsp;&nbsp;|&nbsp;&nbsp;
  </span>
);

const Enquiry = () => {
  return (
    <CentralInfo leftImage={left} rightImage={right}>
      <div style={{ paddingTop: "10vh", paddingBottom: "20vh" }}>
        <Heading name="Showroom" />
        <Divider />
        <Description>
          <span>unit 1507</span>
          <VerticalDivider />
          <span>15 floor</span>
          <br />
          <span>chai wan industrial city phase 2</span>
          <br />
          <span>70 wing tai road</span>
          <br />
          <span>chai wan</span>
          <br />
          <span>hong kong</span>
        </Description>
        <div style={{paddingTop: "5vh"}}>
          <Heading name="telephone" />
          <Divider />
          <Description>
            <span>+852 9463 4855</span>
          </Description>
        </div>
        <div style={{paddingTop: "5vh"}}>
          <Heading name="email" />
          <Divider />
          <Description>
            <span>info@splusgroup.net</span>
          </Description>
        </div>
      </div>
    </CentralInfo>
  );
};

export { Enquiry };
