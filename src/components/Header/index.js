import React from "react";
import { MdMenu } from "react-icons/md";
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
      <MdMenu color="#F79646" size="3em" style={{ verticalAlign: "center" }} />
      <Logo size={2} />
      <div />
    </div>
  );
};

export { Header };
