import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css"; // Make sure to import your CSS styles

function Contact() {
  return (
    <>
      <div id="contact_us" className="container">
        <div className="row text-center mt-5">
          <div className="col">
            <h1 style={{ color: "#00AFF5" }}>Let’s stay connected</h1>
            <p>
              Call us, use our live chat widget or email and we'll get back to
              you as soon as possible!
            </p>
          </div>
        </div>
        <div className="row text-center mt-3">
          <div className="feature col-12 col-lg-4 col-md-4 col-sm-12">
            <img src="./email.png" alt="Email" />
            <h5 className="mt-2">Email</h5>
            <p>info@dental360.com</p>
          </div>
          <div className="feature col-12 col-lg-4 col-md-4 col-sm-12">
            <img src="./phone.png" alt="Phone" />
            <h5 className="mt-2">Phone</h5>
            <p>+962 796618504</p>
          </div>
          <div className="feature col-12 col-lg-4 col-md-4 col-sm-12">
            <img src="./location.png" alt="location" />
            <h5 className="mt-2">Location</h5>
            <p>Jordan , Amman Hikmat Alsafadi St A2 .</p>
          </div>
        </div>
      </div>
      <div id="about" className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <form
              action=""
              className="d-flex flex-column text-lg-start text-md-start text-sm-start"
            >
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name here"
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your email here"
              />

              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Your subject here"
              />

              <label htmlFor="message">Message:</label>

              <textarea
                id="message"
                name="message"
                rows="2"
                required
                placeholder="Your message here"
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
          <div class="ContactImg col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-3 text-center">
  <div class="d-flex justify-content-center align-items-center">
    <img
      src="./contactImg.png"
      class="img-fluid centered-image"
    />
  </div>
</div>

        </div>
      </div>
    </>
  );
}

export default Contact;
