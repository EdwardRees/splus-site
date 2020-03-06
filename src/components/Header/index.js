import React from "react";
import { MdMenu } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { Logo } from "../../components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#404040",
        width: "100%",
        paddingTop: 5,
        paddingBottom: 5
      }}
    >
      <div style={{ display: "flex", alignItems: "center", paddingLeft: 10 }}>
        <NavLink to="/dev/us">
          <FaBars color="#F79646" size="2rem" />
        </NavLink>
      </div>
      <Logo size={2} />
      <div />
    </div>
  );
};

export { Header };
