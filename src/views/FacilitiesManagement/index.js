import React from "react";
import {
  CentralInfo,
  Description,
  Divider,
  Heading,
  Link,
  LinkGroup,
} from "../../components/";
import { PORTFOLIO } from "../../constants/routes";
const background = require("../../assets/design/background.png");

const FacilitiesManagement = () => (
  <CentralInfo backgroundImage={background}>
    <div style={{ paddingTop: 0, marginBottom: 0, paddingBottom: 60 }}>
      <Heading name="Facilities management" />
      <Divider />
      <Description>
        <p>
          our facilities management services deliver both strategic and
          sustainable operations for our customers{" "}
        </p>

        <p>
          our approach to value balances life cycle costs with sustainable
          delivery
        </p>
      </Description>
      <Divider />
      <Description>
        <p>facilities management services include:</p>
        <span>strategic planning</span>
        <br />
        <span>operations review </span>
        <br />
        <span>procurement, vendor management</span>
        <br />
        <span>policy, procedures and standards</span>
        <br />
        <span>FM systems </span>
        <br />
        <span>FM documentation </span>
        <br />
        <span>Visitor experience, event operations</span>
        <br />
      </Description>
      <Divider />
      <LinkGroup>
        <Link to={`${PORTFOLIO}`}>portfolio</Link>
      </LinkGroup>
    </div>
  </CentralInfo>
);

export { FacilitiesManagement };
