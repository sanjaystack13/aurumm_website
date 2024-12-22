import React, { useState } from "react";
import "./Contact.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Topnavbar from "./Topnavbar";
import LowNavbar from "./LowNavbar";

const Contact = () => {
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleSelectChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  return (
    <>
      <Topnavbar />
      <div className="aupaybody">
        <div className="contact-page">
          <header className="header-section">
            <h1 className="main-heading">How Can We Help You?</h1>
            <p className="sub-heading">
              We're here to assist you. Start today and make your vision a
              reality!
            </p>
          </header>
          <section className="content-section">
            <Container>
              <Row>
                <Col md={6} sm={12} className="contact-details-wrapper">
                  <div className="contact-details">
                    <h2>Contact Us</h2>
                    <div className="contact-info">
                      <h4>Email:</h4>
                      <p>support@atts.in</p>
                      <h4>Follow Us:</h4>
                      <a
                        href="https://www.instagram.com/aurumm_serv_soft/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                      <br />
                      <a
                        href="https://www.facebook.com/people/Aurumm/61558187474609/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </Col>

                <Col md={6} sm={12} className="form-section-wrapper">
                  <Form className="contact-form">
                    <Form.Group className="form-group">
                      <Form.Label>Full Name:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                      />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Label>Email Address:</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                      />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Label>Preferred Product:</Form.Label>
                      <Form.Control
                        as="select"
                        value={selectedProduct}
                        onChange={handleSelectChange}
                      >
                        <option value="">
                          --Select the Preferred Product--
                        </option>
                        <option value="auPay">AU Pay</option>
                        <option value="auSale">AU Sale</option>
                        <option value="auShop">AU Shop</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Label>Budget:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your budget"
                      />
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Label>Message:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Write your message here"
                      />
                    </Form.Group>
                    <Button type="submit" className="submit-button">
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
        <LowNavbar />
      </div>
    </>
  );
};

export default Contact;
