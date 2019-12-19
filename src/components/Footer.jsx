import React from "react";
import { Container, Navbar } from "reactstrap";

import { Terms } from "./";

const Footer = () => {
  return (
    <Navbar fixed="bottom" className="navbar-default">
      <Container className="text-center">
        <div
          class="fixed-bottom"
          style={{ backgroundColor: "#f8f8f8", padding: "10px" }}
        >
          <h1 style={{ fontSize: "16px" }}>
            <span style={{ color: "#A6A6A6" }}>S Plus </span>
            <span style={{ color: "#606060" }}>Group Limited</span>
          </h1>

          <div
            className="text-center"
            style={{
              fontSize: "12px",
              flexDirection: "row"
            }}
          >
            <span style={{ color: "#A6A6A6" }}>
              Copyright 2019. All rights reserved
            </span>
            <span style={{ color: "#F79646" }}> | </span>
            <Terms />
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export { Footer };
