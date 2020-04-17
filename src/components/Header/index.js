import React, { Fragment, useState } from "react";
import { Drawer } from "@material-ui/core/";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Logo } from "../../components";
import {
  US,
  DESIGN,
  FACILITIES_MANAGEMENT,
  ACTIVE_SENIOR_LIVING,
  LIFESTYLE,
  ENQUIRY,
} from "../../constants/routes";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const Menu = () => {
    return (
      <Drawer open={open} onClose={toggle}>
        <div
          className="d-flex flex-column p-2"
          style={{
            height: window.outerHeight,
            width: "18em",
            backgroundColor: "#e7e6e6",
          }}
        >
          <button
            className="btn d-flex justify-content-end"
            style={{}}
            onClick={toggle}
          >
            <MdClose color="#F97646" size="2rem" />
          </button>
          <div
            className="d-flex flex-column justify-content-between align-items-center align-content-between"
            style={{ backgroundColor: "#e7e6e6" }}
          >
            <div>
              <NavLink
                style={{ color: "#606060" }}
                className="d-flex p-4"
                to={`${US}`}
                onClick={toggle}
              >
                Us
              </NavLink>
            </div>
            <div>
              <NavLink
                style={{ color: "#606060" }}
                className="d-flex p-4"
                to={`${DESIGN}`}
                onClick={toggle}
              >
                Design
              </NavLink>
            </div>
            <div>
              <NavLink
                style={{ color: "#606060" }}
                className="d-flex p-4"
                to={`${FACILITIES_MANAGEMENT}`}
                onClick={toggle}
              >
                Facilities Management
              </NavLink>
            </div>
            <div>
              <NavLink
                style={{ color: "#606060" }}
                className="d-flex p-4"
                to={`${ACTIVE_SENIOR_LIVING}`}
                onClick={toggle}
              >
                Active Senior Living
              </NavLink>
            </div>
            <div>
              <NavLink
                style={{ color: "#606060" }}
                className="d-flex p-4"
                to={`${LIFESTYLE}`}
                onClick={toggle}
              >
                Lifestyle
              </NavLink>
            </div>
            <div>
              <NavLink
                style={{ color: "#606060" }}
                className="d-flex p-4"
                to={`${ENQUIRY}`}
                onClick={toggle}
              >
                Enquiry
              </NavLink>
            </div>
          </div>
        </div>
      </Drawer>
    );
  };

  return (
    <Fragment>
      <div
        className="sticky-top"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#404040",
          width: "100%",
          paddingTop: 5,
          paddingBottom: 5,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", paddingLeft: 10 }}>
          <button className="btn" onClick={toggle}>
            <FaBars color="#F97646" size="2rem" />
          </button>
        </div>
        <NavLink to="/" style={{ textDecorationLine: "none" }}>
          <Logo size={2} />
        </NavLink>
        <div style={{ width: "3rem" }} />
      </div>
      <Menu />
    </Fragment>
  );
};

export { Header };
