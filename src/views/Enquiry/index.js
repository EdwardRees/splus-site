import React from "react";
import { CentralInfo, Description, Divider, Heading } from "../../components/";

const background = require("../../assets/enquiry/background.png");

const VerticalDivider = () => (
  <span style={{ fontWeight: "bold", color: "#F97646", fontFamily: "Corbel" }}>
    {" "}
    &nbsp;&nbsp;|&nbsp;&nbsp;
  </span>
);

const Enquiry = () => {
  return (
    <CentralInfo backgroundImage={background}>
      <div style={{ paddingTop: "10vh", paddingBottom: "20vh" }}>
        <Heading name="Showroom" />
        <Divider />
        <br />
        <span style={{ fontFamily: "Avenir", color: "#F97646" }}>
          by appointment only
        </span>
        <br />
        <Description>
          <a
            href="http://maps.google.com/?q=Chai Wan Industrial City Phase 2, 70 Wing Tai Road, Chai Wan, Hong Kong"
            style={{ color: "#606060" }}
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </a>
        </Description>
        <div style={{ paddingTop: "5vh" }}>
          <Heading name="telephone" />
          <Divider />
          <Description>
            <span>
              <a
                href="tel:+85294634855"
                style={{ color: "#606060" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                +852 9463 4855
              </a>
            </span>
          </Description>
        </div>
        <div style={{ paddingTop: "5vh" }}>
          <Heading name="email" />
          <Divider />
          <Description>
            <span>
              <a
                href="mailto:info@splusgroup.net"
                style={{ color: "#606060" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                info@splusgroup.net
              </a>
            </span>
          </Description>
        </div>
      </div>
    </CentralInfo>
  );
};

export { Enquiry };
