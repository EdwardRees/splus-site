import React from "react";
import { Link } from 'react-router-dom';

const Divider = () => (
  <span style={{ fontWeight: "bold", color: "#f79646", fontFamily: "Corbel" }}>
    {" "}
    &nbsp;&nbsp;|&nbsp;&nbsp;
  </span>
);

const Text = ({ children }) => (
  <span style={{ fontWeight: "300", color: "#606060", fontFamily: "Corbel" }}>
    {children}
  </span>
);

const getYear = () => {
  let date = new Date();
  return date.getFullYear();
};
const Footer = () => (
  <div
    className="text-center fixed-bottom"
    style={{
      display: "flex",
      flexDirection: "column",
      paddingTop: '1rem',
      paddingBottom: '1rem',
      fontFamily: "Corbel",
      backgroundColor: "#ffffffff",
    }}
  >
    <div>
      <span
        style={{ color: "#606060", fontWeight: "bold", fontFamily: "Corbel" }}
      >
        S Plus
      </span>{" "}
      <span style={{ color: "#bfbfbf", fontFamily: "Corbel" }}>
        Group Limited
      </span>
    </div>
    <div>
      <Text>copyright {getYear()}</Text>
      <Divider />
      <Text>all rights reserved</Text>
      <Divider />
      <Text><Link to="/terms" style={{color: "#606060",}}>terms and conditions</Link></Text>
    </div>
  </div>
  // <Terms />
);

export { Footer };

