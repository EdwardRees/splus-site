import React from "react";
import { CentralInfo } from "../../components";
import {
  Heading,
  Divider,
  Description,
  Link,
  LinkGroup
} from "../../components/";

const left = require("../../assets/us/left.png")
const right = require("../../assets/us/right.png")

const Us = () => {
  return (
    <CentralInfo leftImage={left} rightImage={right}>
      <Heading name="US" />
      <Divider />
      <Description>
        <p>we are committed to delivering solutions for better living</p>
        <p>
          we run collaborative projects to help you get there and enjoy the
          benefit of your ideas and desires
        </p>
        <p>
          our clients include developers, corporates, entrepreneurs, retailers,
          and individuals
        </p>
      </Description>
      <Divider />
      <LinkGroup>
        <Link to="#">design</Link>
        <Link to="#">facility management</Link>
        <Link to="#">active senior living</Link>
        <Link to="#">lifestyle</Link>
        <Link to="#">enquiry</Link>
      </LinkGroup>
    </CentralInfo>
  );
};

export { Us };
