import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ to, children, padding = 15 }) => (
  <NavLink className="text-center center-info" style={{ fontFamily: "Avenir", color: "#606060", padding: padding }} to={to}>
    {children}
  </NavLink>
);

export { Link };
