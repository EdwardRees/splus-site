import React, { Fragment } from "react";
import {
  Description,
  Divider,
  Heading,
  TemplateCenter,
} from "../../components/";

const Bold = ({ children }) => (
  <span style={{ fontWeight: "bold", color: "#F97646" }}>{children}</span>
);

const Light = ({ children }) => (
  <span style={{ fontWeight: "bold", color: "#bfbfbf" }}>{children}</span>
);

const Dark = ({ children }) => (
  <span style={{ fontWeight: "bold", color: "#606060" }}>{children}</span>
);

const SPlus = () => (
  <Fragment>
    <Dark>S Plus</Dark> <Light>Group Limited</Light>
  </Fragment>
);

const VerticalDivider = () => (
  <span style={{ fontWeight: "bold", color: "#F97646", fontFamily: "Corbel" }}>
    {" "}
    &nbsp;&nbsp;|&nbsp;&nbsp;
  </span>
);
const Terms = () => (
  <div
    className="d-flex flex-row text-center row  no-gutters align-items-center justify-content-center"
    style={{
      flex: 1,
    }}
  >
    <div className="d-flex  col-md-5 text-center">
      <TemplateCenter specificHeight="auto">
        <Heading name="Terms and Conditions" />
        <Divider />
        <Description>
          <div>
            <p>
              <Bold>Operation</Bold>
              <br />
              This website is operated by <SPlus></SPlus>
              .<br /> All inquiries may be directed to: <SPlus />
              <br />
              unit 1507 <VerticalDivider /> 15 floor
              <VerticalDivider />
              chai wan industrial city phase 2
              <br />
              70 wing tai road
              <VerticalDivider />
              chai wan
              <VerticalDivider />
              hong kong
              <br />
              or
              <br />
              info@splusgroup.net
              <br />
              <br />
            </p>
            <p>
              <Bold>Usage</Bold>
              <br />
              Your use of this website is governed by these terms and
              conditions. Please take the time to review them. Terms and
              Conditions may change from time to time. Users should routinely
              check for changes to the Terms and Conditions.
              <br />
              <br />
              Your use of www.splusgroup.net constitutes your agreement to
              follow these rules and to be bound by them. They apply to the
              entirety of the website and its contents. If you do not agree with
              any of these terms and conditions, do not use the
              www.splusgroup.net website.
              <br />
              <br />
            </p>
            <p>
              <Bold>General</Bold>
              <br />
              This website and its contents on this website are intended to
              provide general information only. Therein the information, product
              and activity mentioned is related to Hong Kong and to <SPlus />{" "}
              colleagues, clients and potential customers. Such information may
              be neither relevant nor appropriate for people located in
              locations outside of Hong Kong. <SPlus /> have made every effort
              to be as accurate as possible, however, <SPlus /> makes no
              warranties, either express or implied, as to the accuracy of the
              information contained in any of the materials on this website.
              <br />
              <br />
            </p>
            <p>
              <Bold>Ownership of rights</Bold>
              <br />
              All rights, including copyright, in this website are owned by or
              licensed to <SPlus />.  The materials found on www.splusgroup.net
              including but not limited to all text, graphics, drawings,
              photographs and data in whatever form are owned by S Plus Group
              Limited or related companies or licensors who have reserved their
              intellectual property rights.
              <br />
              <br />
              Any use of this website or its contents, including copying or
              storing it or them in whole or part, other than for your own
              personal, non-commercial use is prohibited without the permission
              of S Plus Group Limited. You may not modify, reproduce,
              distribute, re-post or make available to the public anything on
              this website for any purpose.
              <br />
              <br />
            </p>
            <p>
              <Bold>Virus to your Computer</Bold>
              <br />
              <SPlus /> makes every effort to ensure that this website is free
              from bugs or viruses. We do not guarantee that your use of this
              website won’t cause damage to your computer and shall not be
              liable for loss or damage of either equipment or data which may
              arise because of using this website.
              <br />
              <br />
            </p>
            <p>
              <Bold>Links to other websites</Bold>
              <br />
              www.splusgroup.net may from time to time contain links to other
              websites of interest. <SPlus /> cannot vet or have any control
              over their contents, therefore, <SPlus /> shall not accept any
              liability in respect of the use of these websites.
              <br />
              <br />
              Last updated on April 7 2020
              <br />
              <br />
              <br />
            </p>
          </div>
        </Description>
        <Divider />
      </TemplateCenter>
    </div>
  </div>
  //   </div>
  //   <div className="d-flex align-self-stretch col-md"></div>
  // </div>
);
export { Terms };
