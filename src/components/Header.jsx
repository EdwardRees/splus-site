import React, { useState } from "react";

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{paddingBottom: "20px"}}>
      <Navbar color="dark" dark className="navbar-fixed-top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <span style={{ color: "#BFBFBF", fontSize: "150%" }}>S</span>
            <span style={{ color: " #F46100", fontSize: "150%" }}>
              <sup>+</sup>
            </span>
            <span style={{ color: "#BFBFBF", fontSize: "25px" }}>......</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          {/* <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">Interior Design Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/articles">Facility Management</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/products">Safe and Sustainable at Home</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse> */}
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/articles">Articles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/products">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Projects</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export { Header };
