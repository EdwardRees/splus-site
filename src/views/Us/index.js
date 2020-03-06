import React from "react";
import { CentralInfo } from "../../components";
import {
  Heading,
  Divider,
  Description,
  Link,
  LinkGroup
} from "../../components/";

const Us = () => {
  return (
    <CentralInfo left="Hello" right="Bye">
      <Heading name="US" />
      <Divider />
      <Description>
        <p>We are committed to delivering solutions for better living</p>
        <p>
          We run collaborative projects to help you get there and enjoy the
          benefit of your ideas and desires
        </p>
        <p>
          Our clients include developers, corporates, entrepreneurs, retailers,
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
