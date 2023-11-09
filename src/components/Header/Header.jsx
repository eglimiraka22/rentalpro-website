import React, { useEffect, useRef, useState } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import imageLogo from '../../assets/all-images/rentalpro1.png'
const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

 
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const [isNavHidden, setIsNavHidden] = useState(false); // Track whether the navbar should be hidden
  const [isNavSticky, setIsNavSticky] = useState(false); // Track whether the navbar should have a margin
  const [prevScrollY, setPrevScrollY] = useState(0); // Track the previous scroll position  const [prevScrollY, setPrevScrollY] = useState(0); 

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > prevScrollY;

      // Hide the navbar when scrolling down
      setIsNavHidden(isScrollingDown && currentScrollY > 50);

      if (currentScrollY > 165) {
        // Apply a margin of -40px when the condition is met
        setIsNavSticky(true);
      } else {
        // Remove the margin when the condition is not met
        setIsNavSticky(false);
      }

      // Reveal the navbar when scrolling all the way up
      if (!isScrollingDown && currentScrollY === 0) {
        setIsNavHidden(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);


  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +355 686554546
                </span>
              </div>
            </Col>

           
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">

              <div className="logo">
            
             
              </div>

            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center justify-center gap-2">
                <span>
                <i class="ri-map-pin-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Albania</h4>
                  <h6>Tirana Rruga loremipsu</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content ">
                  <h4>Monday to Sunday</h4>
                  <h6>24h open</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Contact us
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className={`main__navbar  ${isNavHidden ? "hidden-navbar" : ""} ${
        isNavSticky ? "sticky " : ""
      }`}>
        <Container>
          <div className="navigation__wrapper">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} >
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
                  <span className="mobile__menu__close"  onClick={toggleMenu}>
              <i class="ri-close-line"></i>
            </span>
                {isNavSticky && (<div className="logo">
                    
              
            </div>)}

              </div>
            </div>

          
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
