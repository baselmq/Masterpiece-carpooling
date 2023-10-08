import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../style.css"; // Make sure to import your CSS styles

function HeroSection() {
  return (
    <div className="home__section">
      <div className="home_blackImg">
        <Navbar expand="md" className="custom_navbar">
          <div className="container">
            <Navbar.Brand
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
              href="#"
            >
              <img src="./logo.png" width={"49px"} className="logo" alt="Wasel Ride" />
            </Navbar.Brand>
            <Navbar.Toggle
              className="navbar-toggler btstrap-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon text-muted btstrap"></span>
            </Navbar.Toggle>
            <Navbar.Collapse
              className="collapse navbar-collapse justify-content-end text-center"
              id="navbarNav"
            >
              <Nav className="navbar-nav">
                <Nav.Link className="nav-link navbar__ul " href="#about">
                  About
                </Nav.Link>
            
                <Nav.Link
                  className="nav-link navbar__ul "
                  href="#menu__section"
                >
                  Our App
                </Nav.Link>
                <Nav.Link className="nav-link navbar__ul " href="#features">
                  Features
                </Nav.Link>
                <Nav.Link className="nav-link navbar__ul " href="#contact_us">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>

        <div>
          <h1>Welcome to WaselRide</h1>
        </div>

        <div className="buttons mt-4">
          <button>
            <a className="btn" href="#menu__section">
              See More
            </a>
          </button>
          <button>
            <a className="btn" href="#about">
              Download App
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
