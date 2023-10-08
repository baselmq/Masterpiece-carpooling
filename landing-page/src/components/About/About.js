import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css"; // Make sure to import your CSS styles

function About() {
  return (
    <div id="about" className="container mt-4">
      <Row className="d-flex justify-content-center align-items-center">
        <Col xl={6} lg={6} md={12} sm={12}>
          <h1
            style={{ color: "#00AFF5" }}
            className="text-lg-start text-center"
          >
<span style={{ color: "black" }}>Your pick of rides at </span> low prices  </h1>
          <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
          </p>
        </Col>
        <Col xl={6} lg={6} md={12} sm={12}>
          <img src="./ABOUT1.png" className="img-fluid" alt="About Us" />
        </Col>
      </Row>
    </div>
  );
}

export default About;
