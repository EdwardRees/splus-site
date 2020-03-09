import React, { Fragment } from "react";

const Logo = ({ size = 2, WIP }) => {
  if (WIP) {
    return (
      <Fragment>
        <span
          className="footer"
          style={{ color: "#BFBFBF", fontWeight: "bold", fontFamily: "Corbel" }}
        >
          S
        </span>
        <span
          className="footer"
          style={{
            color: " #F46100",
            fontWeight: "bold",
            fontFamily: "Corbel"
          }}
        >
          <sup
            className="footer"
            style={{ fontWeight: "bold", fontFamily: "Corbel" }}
          >
            +
          </sup>
        </span>
      </Fragment>
    );
  } else {
    return (
      <div>
        <span
          className="footer"
          style={{
            color: "#BFBFBF",
            fontSize: `${size}rem`,
            fontWeight: "bold",
            fontFamily: "Corbel"
          }}
        >
          S
        </span>
        <span
          className="footer"
          style={{
            color: " #F46100",
            fontSize: `${size}rem`,
            fontWeight: "bold",
            fontFamily: "Corbel"
          }}
        >
          <sup
            className="footer"
            style={{ fontWeight: "bold", fontFamily: "Corbel" }}
          >
            +
          </sup>
        </span>
      </div>
    );
  }
};

export { Logo };
