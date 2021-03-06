import React from "react";
import { CentralInfo, Description, Divider, Heading, Link, LinkGroup } from "../../components/";
import { ART_CONSULTANCY, DESIGN, FURNITURE_DESIGN, STYLING_AND_FURNISHING } from '../../constants/routes';

const background = require("../../assets/lifestyle/background.png")

const Lifestyle = () => {
  return (
    <CentralInfo backgroundImage={background}>
    <div style={{paddingTop: "10vh", paddingBottom: "20vh"}}>
        <Heading name="Lifestyle" />
        <Divider />
        <Description>
          <p>
            a lifestyle is a mean of forging a sense of individuality. It reflects your beliefs, interests, opinion, values, and preferences.
          </p>
          <p>
            our team tailors a stylish living for our customers, with unique substantial identity that evolves from their thought and imagination, transforming them into reality.
          </p>
        </Description>
        <Divider />
        <Description>
        <p>
        our lifestyle services include:
        </p>
        </Description>
        <LinkGroup>
          <Link to={`${DESIGN}`} padding={0}>interior design</Link>
          <Link to={`${ART_CONSULTANCY}`} padding={0}>art consultancy</Link>
          <Link to={`${STYLING_AND_FURNISHING}`} padding={0}>styling and furnishing</Link>
          <Link to={`${FURNITURE_DESIGN}`} padding={0}>furniture design</Link>
        </LinkGroup>
    </div>
    </CentralInfo>
  );
};

export { Lifestyle };

