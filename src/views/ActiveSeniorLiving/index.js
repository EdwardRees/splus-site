import React from "react";
import { CentralInfo, Description, Divider, Heading } from "../../components/";

const first_responder_kit = require("../../assets/pdfs/HK First Responder v4 (CH-ENG) eForm.pdf");
const home_safety_cn = require("../../assets/pdfs/S+ Home Safety Checklist v4 (CN).pdf");
const home_safety_en = require("../../assets/pdfs/S+ Home Safety Checklist v4 (eng).pdf");

const ActiveSeniorLiving = () => (
  <CentralInfo>
    <div style={{ paddingTop: 0, marginBottom: 0, paddingBottom: 60 }}>
      <Heading name="Active Senior Living" />
      <Divider />
      <Description>
        <p>
          our services put people first to understand unique senior residential
          occupiers needs
        </p>

        <p>
          we provide a range of planning, products and renovation service for
          aging-in-place and independent living
        </p>
      </Description>
      <Divider />
      <Description>
        <p>specialty services include:</p>

        <span>Home assessment and survey kits</span>
        <br />
        <span>home project design services</span>
        <br />
        <span>bundled renovation kits for </span>
        <br />
        <span>living areas</span>
        <br />
        <span>bathrooms</span>
        <br />
        <span>kitchens</span>
        <br />
      </Description>
      <Divider />
      <Description>
        <p>downloadable tools</p>
        <span>first responder kit </span>
        <a
          href={first_responder_kit}
          style={{ color: "#606060", textDecorationLine: "underline" }}
        >
          form v4
        </a>
        <br />
        <span>
          self home assessment kit form v4 in{" "}
          <a
            href={home_safety_cn}
            style={{ color: "#606060", textDecorationLine: "underline" }}
          >
            cn
          </a>{" "}
          and{" "}
          <a
            href={home_safety_en}
            style={{ color: "#606060", textDecorationLine: "underline" }}
          >
            eng
          </a>
        </span>
      </Description>
    </div>
  </CentralInfo>
);

export { ActiveSeniorLiving };
