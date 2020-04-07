import React from "react";
import {
  Description,
  Divider,
  Heading,
  Link,
  LinkGroup,
  CentralInfo
} from "../../components/";
import {ART_CONSULTANCY, FURNITURE_DESIGN, INTERIOR_DESIGN, STYLING_AND_FURNISHING  } from '../../constants/routes';

const background = require("../../assets/lifestyle/background.png")

const Lifestyle = () => {
  return (
    <CentralInfo backgroundImage={background}>
    <div style={{paddingTop: "10vh", paddingBottom: "10vh"}}>
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
          <Link to={`/dev${INTERIOR_DESIGN}`} padding={0}>interior design</Link>
          <Link to={`/dev${ART_CONSULTANCY}`} padding={0}>art consultancy</Link>
          <Link to={`/dev${STYLING_AND_FURNISHING}`} padding={0}>styling and furnishing</Link>
          <Link to={`/dev${FURNITURE_DESIGN}`} padding={0}>furniture design</Link>
        </LinkGroup>
    </div>
    </CentralInfo>
  );
};

export { Lifestyle };
