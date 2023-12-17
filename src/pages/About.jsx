import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title='About'>
      <CommonSection title='About Us' />
      <AboutSection aboutClass='aboutPage' />

      <section className='about__page-section'>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12'>
              <div className='about__page-img'>
                <img src={driveImg} alt='' className='w-100 rounded-3' />
              </div>
            </Col>

            <Col lg='6' md='6' sm='12'>
              <div className='about__page-content'>
                <h2 className='section__title'>
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className='section__description'>
                  Welcome to RentalPro – Your Premier Destination for
                  Top-Quality Car Rentals! At RentalPro, we redefine your travel
                  experience by providing a seamless and reliable car rental
                  service. Our commitment is to deliver unparalleled
                  convenience, ensuring that your journey is as smooth as
                  possible. With a fleet of meticulously maintained vehicles, we
                  offer a diverse range of options to suit your preferences and
                  needs.
                </p>

                <p className='section__description'>
                Discover the freedom to explore at your own pace with RentalPro. Experience exceptional customer service, competitive rates, and a commitment to making your travels memorable. Choose RentalPro for your next adventure, where the journey begins with reliable, stylish, and affordable car rentals.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
