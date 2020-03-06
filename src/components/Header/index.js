import React from "react";
import { MdMenu } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { Logo } from "../../components";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#404040",
        width: "100%",
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1
      }}
    >
      <FaBars color="#F79646" size="3rem" style={{ display: 'flex', alignItems: 'center', verticalAlign: 'middle', marginTop: 5 }} />
      <Logo size={2.5} />
      <div />
    </div>
  );
};

export { Header };
