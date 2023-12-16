import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row className='footer-section'>
          <Col lg='5' md='4' sm='12'>
            <div className='logo footer__logo'></div>
            <p className='footer__logo-content'>
              Explore the world with ease and comfort with RentalPro – your
              trusted partner in hassle-free car rentals. Unleash the freedom of
              the open road with our diverse fleet of quality vehicles. Your
              journey begins with RentalPro.
            </p>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <div className='mb-4'>
              <h5 className='footer__link-title'>Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <div className='mb-4'>
              <h5 className='footer__link-title mb-4'>Tirana,Ali Demi </h5>
              <p className='office__info'>123 Tirana,Albania</p>
              <p className='office__info'>Phone: +069 291 1744</p>

              <p className='office__info'>Email: rentalpro2023@hotmail.com</p>

              <p className='office__info'>Working hours : 24h</p>
            </div>
          </Col>

          <Col lg='12'>
            <div className='footer__bottom'>
              <p className='section__description d-flex align-items-center justify-content-center gap-1 pt-4'>
                <i class='ri-copyright-line'></i>Copyright {year}, Developed by
                Egli M. All rights reserved for rentalpro.al
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
