import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted animate__animated animate__fadeInDown">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

      <section className="">
        <Container className="mt-5">
          <Row className="mt-3">
            <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>WaselRide
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </Col>

            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  About us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Menu
                </a>
              </p>
            </Col>

            <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#about" className="text-reset">
                  App{" "}
                </a>
              </p>
              <p>
                <a href="#best_selling" className="text-reset">
                  Best Selling
                </a>
              </p>
              <p>
                <a href="#features" className="text-reset">
                  Features
                </a>
              </p>
              <p>
                <a href="#menu" className="text-reset">
                  Menu
                </a>
              </p>
            </Col>

            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i>Jordan , Amman
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>info@waselride.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>+962 796618504
              </p>
              <p>
                <i className="fas fa-print me-3"></i>+962 796618504
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="">
          WaselRide
        </a>
      </div>
    </footer>
  );
}

export default Footer;
