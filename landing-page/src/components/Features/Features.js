import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css"; // Make sure to import your CSS styles

function Features() {
  return (
    <div id="features" className="container mt-5 mb-5">
      <div className="row">
        <div className="col text-center">
          <h1 style={{ color: "#00AFF5" }} className="mt-2">
           <span style={{ color: "black" }}> Why </span>  WaselRide ?
          </h1>
          <p>
            Bean Heaven Shop was chosen to reflect our commitment to providing a
            heavenly coffee experience
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="row text-center">
        <div className="feature col-12 col-lg-3 col-md-6 col-sm-12">
          <img src="./access_details.png" alt="Access to treatment details" />
          <h4 className="mt-2">Ease of booking</h4>
          <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.          </p>
        </div>
        <div className="feature col-12 col-lg-3 col-md-6 col-sm-12">
          <img src="./support.png" alt="24/7 Support" />
          <h4 className="mt-2">GPS tracking</h4>
          <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.          </p>
        </div>
        <div className="feature col-12 col-lg-3 col-md-6 col-sm-12">
          <img
            src="./online_appointment.png"
            alt="Online appointment booking"
          />
          <h4 className="mt-2">24/7 Service</h4>
          <p>
            Our cozy and inviting atmosphere provides a welcoming space to relax
            and enjoy your coffee in Bean Heaven.
          </p>
        </div>
        <div className="feature col-12 col-lg-3 col-md-6 col-sm-12">
          <img src="./online_appointment.png" alt="Unique Flavors" />
          <h4 className="mt-2">Comfortable &
secure rides</h4>
          <p>
            Explore a diverse range of coffee flavors, from bold and robust to
            smooth and creamy, there's something for every taste.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
