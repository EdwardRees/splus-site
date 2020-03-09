import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ to, children }) => (
  <NavLink className="text-center center-info" style={{ fontFamily: "Avenir", color: "#606060", padding: 15 }} to={to}>
    {children}
  </NavLink>
);

export { Link };
