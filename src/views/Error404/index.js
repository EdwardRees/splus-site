import React from "react";
import {
  Description,
  Divider,
  Heading,
  Link,
  LinkGroup,
  CentralInfo
} from "../../components/";
import { PORTFOLIO } from '../../constants/routes';

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
      <LinkGroup>
        <Link to={`${PORTFOLIO}`}>portfolio</Link>
      </LinkGroup>
    </div>
  </CentralInfo>
);
export { Error404 };
