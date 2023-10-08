import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css";

function Services() {
  return (
    <div id="menu__section" className="container menu__image">
      <div className="black__image">
        <Container>
          <Row className="text-center">
            <Col xs={12} lg={12} md={12} sm={12} className="mt-5">
              <h1 style={{ color: "#10988b" }}>Discover All Menu</h1>
              <p className="text-center">Explore our Serivces we Provide :</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col xs={12} lg={2} md={4} sm={6} className="menu__product">
              <img src="./Service_one.png" alt="Fillings" />
              <h6 className="product_name">Fillings</h6>
            </Col>
            <Col xs={12} lg={2} md={4} sm={6} className="menu__product">
              <img src="./Service_tow.png" alt="Braces" />
              <h6 className="product_name">Braces</h6>
            </Col>
            <Col xs={12} lg={2} md={4} sm={6} className="menu__product">
              <img src="./Service_three.png" alt="Dentures" />
              <h6 className="product_name">Dentures</h6>
            </Col>
            <Col xs={12} lg={2} md={4} sm={6} className="menu__product">
              <img src="./Service_four.png" alt="Dental Crown" />
              <h6 className="product_name">Dental Crown</h6>
            </Col>
            <Col xs={12} lg={2} md={4} sm={6} className="menu__product">
              <img src="./Service_five.png" alt="RCT" />
              <h6 className="product_name">RCT</h6>
            </Col>
            <Col xs={12} lg={2} md={4} sm={6} className="menu__product">
              <img src="./Service_six.png" alt="Dental Implants" />
              <h6 className="product_name">Dental Implants</h6>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Services;
