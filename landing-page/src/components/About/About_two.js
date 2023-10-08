import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css"; // Make sure to import your CSS styles

function About_two() {
  return (
    <div id="about" className="container mt-4">
      <Row className="d-flex justify-content-center align-items-center">
        <Col xl={6} lg={6} md={12} sm={12}>
          <img src="./about11.png" className="img-fluid" alt="About Us" />
        </Col>
        <Col xl={6} lg={6} md={12} sm={12} className="text-algin-center">
          <h1
            style={{ color: "#00AFF5" }}
            className="text-lg-start text-center"
          >
            Get our Free Mobile App
          </h1>
          <p className="text-lg-start text-center">
            With our integrated CRM, project management, collaboration and
            invoicing capabilities, you can manage every aspect of your business
            in one secure platform.
          </p>

          <div className="Google_play col-12 col-lg-12 col-md-12 col-sm-12 text-lg-start text-center  ">
            <img src="./AppStore.png" style={{ cursor: "pointer" }} />
            <img
              style={{ marginLeft: "10px", cursor: "pointer" }}
              src="./GooglePlay.png"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About_two;
