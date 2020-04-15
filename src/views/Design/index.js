import React from "react";
import { CentralInfo, Description, Divider, Heading, Link, LinkGroup } from "../../components/";
import { PORTFOLIO, DESIGN, ART_CONSULTANCY, STYLING_AND_FURNISHING, FURNITURE_DESIGN } from '../../constants/routes'

const background = require("../../assets/design/background.png");

const Design = () => {
  return (
    <CentralInfo backgroundImage={background}>
      <div style={{ paddingTop: 0, marginBottom: 0, paddingBottom: 60 }}>
        <Heading name="DESIGN" />
        <Divider />
        <Description>
          <p>
            our design services <br />deliver a distinctive living <br></br>experience<br /> for our
            customers
          </p>
          <p>
            our design strategy strives <br />for balance between<br /> bespoke solutions
            and <br/>theatric luxury
          </p>
        </Description>
        <Divider />
        <Description>
          <p>design services include:</p>
            <Link to={DESIGN}>interior design</Link>
          
          <br />
          <span>design management</span>
          <br />
          <span>tender management</span>
          <br />
          <span>construction management</span>
          <br />
          <span>project management</span>
          <br />
          
            <Link to={ART_CONSULTANCY}>art consultancy</Link>
          
          <br />
            <Link to={STYLING_AND_FURNISHING}>styling and furnishing</Link>
          <br />
            <Link to={FURNITURE_DESIGN}>furniture design</Link>
          <br />
        </Description>
        <Divider />
        <LinkGroup>
          <Link to={`${PORTFOLIO}`}>portfolio</Link>
        </LinkGroup>
        <br />
      </div>
    </CentralInfo>
  );
};

export { Design };

