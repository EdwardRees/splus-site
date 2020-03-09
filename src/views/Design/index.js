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

const Design = () => {
  return (
    <CentralInfo leftImage={left} rightImage={right}>
      <div style={{ paddingTop: 0, marginBottom: 0 }}>
        <Heading name="DESIGN" />
        <Divider />
        <Description>
          <p>
            our design services deliver a distinctive living experience for our
            customers
          </p>
          <p>
            our design strategy strives for balance between bespoke solutions
            and theatric luxury
          </p>
          <p>
            our clients include developers, corporates, entrepreneurs,
            retailers, and individuals
          </p>
        </Description>
        <Divider />
        <Description>
          <p>design services include:</p>
          <span>interior design</span>
          <br />
          <span>design management</span>
          <br />
          <span>tender management</span>
          <br />
          <span>construction management</span>
          <br />
          <span>project management</span>
          <br />
          <span>art consultancy</span>
          <br />
          <span>styling and furnishing</span>
          <br />
          <span>furniture design</span>
          <br />
        </Description>
        <Divider />
        <LinkGroup>
          <Link to="#">portfolio</Link>
        </LinkGroup>
      </div>
    </CentralInfo>
  );
};

export { Design };
