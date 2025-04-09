import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/mercedes-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row className="about-container-section">
          <Col lg="5" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Albania Pro Rental</h2>
              <p className="section__description">
                Welcome to Albania  Pro Rental, your premier destination for top-notch car rentals. We take pride in providing exceptional service, ensuring your journey is as smooth as the cars we offer.

                Our commitment to excellence is evident in every aspect of our business. From a diverse fleet of well-maintained vehicles to a customer-centric approach, Rental Pro is your trusted partner in hassle-free travel.

              </p>

              <div className="about__section-item d-flex align-items-center">
  <p className="section__description d-flex align-items-center gap-2">
    <i className="ri-checkbox-circle-line"></i> Quality Vehicles.
  </p>

  <p className="section__description d-flex align-items-center gap-2">
    <i className="ri-checkbox-circle-line"></i> Memorable Service.
  </p>
</div>

<div className="about__section-item d-flex align-items-center">
  <p className="section__description d-flex align-items-center gap-2">
    <i className="ri-checkbox-circle-line"></i> Flexible Rentals.
  </p>

  <p className="section__description d-flex align-items-center gap-2">
    <i className="ri-checkbox-circle-line"></i> Transparent Pricing.
  </p>
</div>
            </div>
          </Col>

          <Col lg="5" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
