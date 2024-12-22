import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaRegHandshake, FaPhoneAlt, FaMailBulk } from 'react-icons/fa';
import img from './Images/Aurum_Logo.38df8d15.png';
import './LowNavbar.css';  // Link to external CSS

const LowNavbar = () => {
  return (
    <Container fluid className="custom-low-navbar-container">
      <Row className="custom-low-navbar-row">
        <Col lg={3} className="custom-logo-col">
          <img src={img} alt="Aurum Logo" className="custom-logo-img" />
          <p className="custom-logo-description">
            World-class technical solutions for elevated jewellery store operations.
          </p>
        </Col>

        <Col lg={3} className="custom-solutions-col">
          <h2 className="custom-section-title">Solutions</h2>
          <a href="" className="custom-solution-link">
            <FaRegHandshake className="custom-link-icon" /> AU Pay
          </a><br />
          <a href="" className="custom-solution-link">
            <FaRegHandshake className="custom-link-icon" /> AU Sales
          </a><br />
          <a href="" className="custom-solution-link">
            <FaRegHandshake className="custom-link-icon" /> AU Shop
          </a>
        </Col>

        <Col lg={3} className="custom-quick-link-col">
          <h2 className="custom-section-title">QUICK LINK</h2>
          <a href="/Contact" className="custom-quick-link">
            <FaPhoneAlt className="custom-link-icon" /> Contact Us
          </a><br />
          <a href="/AUPay" className="custom-quick-link">
            <FaMailBulk className="custom-link-icon" /> Product
          </a>
        </Col>

        <Col lg={3} className="custom-contact-col">
          <h3 className="custom-contact-title">Contact</h3>
          <p className="custom-contact-info"><FaPhoneAlt />  04224957575</p>
          <p className="custom-contact-info"><FaMailBulk /> support@atts.in</p>
        </Col>
      </Row>

      <hr className="custom-footer-line" />

      <Row className="custom-footer-row">
        <p className="custom-footer-text">Aurumm made by ATTS Technologies. All Rights Reserved© 2024.</p>
      </Row>
    </Container>
  );
}

export default LowNavbar;
