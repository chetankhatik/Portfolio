import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Navbar.css";
import { useState } from "react";

const Navbardata = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  const downloadResume = () => {
    const a = document.createElement("a");
    a.href = process.env.PUBLIC_URL + "/Chetan Khatik Resume.pdf"; // Change the filename as needed
    a.download = "Chetan Khatik Resume.pdf"; // Change the filename as needed
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    closeNavbar();
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="custom-navbar"
      expanded={expanded}
    >
      <Navbar.Brand>
        <Link to="Home" smooth={true} duration={500} onClick={closeNavbar}>
          <img className="logo" src="./ck.png" alt="" />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="colll"
        onClick={handleNavbarToggle}
        style={{ borderColor: "white" }}
      />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" id="navv">
          <Nav.Link style={{ marginRight: "15px" }}>
            <Link
              to="container-fluid"
              smooth={true}
              duration={100}
              onClick={closeNavbar}
            >
              Home
            </Link>
          </Nav.Link>
          <Nav.Link style={{ marginRight: "15px" }}>
            <Link
              to="about-me-container"
              smooth={true}
              duration={100}
              onClick={closeNavbar}
            >
              About
            </Link>
          </Nav.Link>
          <Nav.Link style={{ marginRight: "15px" }}>
            <Link
              to="Outeredu"
              smooth={true}
              duration={100}
              onClick={closeNavbar}
            >
              Academic's
            </Link>
          </Nav.Link>
          <Nav.Link style={{ marginRight: "15px" }}>
            <Link
              to="skills-container"
              smooth={true}
              duration={100}
              onClick={closeNavbar}
            >
              Skills
            </Link>
          </Nav.Link>
          <Nav.Link style={{ marginRight: "15px" }}>
            <Link
              to="project-container"
              smooth={true}
              duration={100}
              onClick={closeNavbar}
            >
              Projects
            </Link>
          </Nav.Link>
          <Nav.Link style={{ marginRight: "15px" }}>
            <Link
              to="expertise-container"
              smooth={true}
              duration={100}
              onClick={closeNavbar}
            >
              Expertise
            </Link>
          </Nav.Link>
          <Nav.Link style={{ marginRight: "15px" }}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={downloadResume}
            >
              Resume
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="contact-form-container"
              smooth={true}
              duration={100}
              onClick={closeNavbar}
            >
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbardata;
