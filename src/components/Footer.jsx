import React, { useState } from "react";
import { Navbar } from "reactstrap";
import { Terms } from "./";
const Footer = () => {
  const [termsToggled, toggleTerms] = useState(false);
  return (
    <Navbar fixed="bottom" className="navbar-default">
      <div class="container">
        <div class="fixed-bottom col-lg-12 text-center" style={{backgroundColor: "#f8f8f8", padding: "10px"}}>
          <h1 style={{ fontSize: "16px" }}>
            <span style={{ color: "#A6A6A6" }}>S Plus </span>
            <span style={{ color: "#606060" }}>Group Limited</span>
          </h1>
          <h5 style={{ fontSize: "12px" }}>
            <span style={{ color: "#A6A6A6" }}>
              Copyright 2018. All rights reserved
            </span>
            <span style={{ color: "#F79646" }}> | </span>
            <span style={{ color: "#A6A6A6" }}>
              <a href="#terms" data-toggle="modal" style={{ color: "#a6a6a6" }}>
                Terms and Conditions
              </a>
            </span>
          </h5>
        </div>
      </div>
      <Terms />
    </Navbar>
  );
};

export { Footer };
