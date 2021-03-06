import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { light, dark } from "../helper/functions";

export default function NavBar() {
  //* If dark theme is chosen - turn dark
  const onDarkClick = () => {
    localStorage.setItem("theme", "dark");
    dark();
  };

  //* If light theme is chosen - turn light
  const onLightClick = () => {
    localStorage.setItem("theme", "light");
    light();
  };

  const hasThemeInLocalStorage = localStorage.getItem("theme");
  if (!hasThemeInLocalStorage) {
    localStorage.setItem("theme", "light");
    //* Default - light theme
    light();
  } else if (localStorage.getItem("theme") === "dark") {
    dark();
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              alt=""
              src="/images/dictionary.png"
              width="30"
              height="30"
              className="d-inline-block align-top logoImage"
            />{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/" className="navbarLinkMain">
            English Dictionary
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="navbarLink">
              Search
            </Link>
            <Link to="/recent-words" className="navbarLink">
              Recent Words
            </Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={onDarkClick}>Dark</Nav.Link>
            <Nav.Link eventKey={2} onClick={onLightClick}>
              Light
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
