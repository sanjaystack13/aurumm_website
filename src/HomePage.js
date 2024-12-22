import React, { useState } from "react";
import "./HomePage.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import imagone from "./Images/new_ausale.20a8529c.svg";
import aurummlogo from "./Images/mobilelogo.75547e02.png";
import one from "./Images/featuresimg.40ecab2c.svg";
import two from "./Images/Chit_Management (1).bf71cc14.svg";
import three from "./Images/featuresimg.40ecab2c (1).svg";
import four from "./Images/Estimation & Billing.a551ded4.svg";
import five from "./Images/Cost_Management.4f898207.svg";
import six from "./Images/Report&Dashboard.bf71cc14.svg";
import aupayimg from "./Images/new_aupay.939fae7c1.svg";
import ausales from "./Images/new_ausale.20a8529c.svg";
import aushop from "./Images/new_aushop.a2faba33.svg";
import star from "./Images/icon_4.62d8bce5star.svg";
import realm from "./Images/icon_1.5e6099f9rm.svg";
import twenty from "./Images/twentyf.svg";
import stay from "./Images/stay.svg";
import client1 from "./Images/client1.a6ce8334.png";
import client2 from "./Images/client2.375a298f.png";
import client3 from "./Images/client3.bb1326d9.png";
import client4 from "./Images/client4.ae1b0ded.png";
import client5 from "./Images/client5.e84cda3c.png";

import Topnavbar from "./Topnavbar";
import LowNavbar from "./LowNavbar";
import { useSpring, animated } from "react-spring";

const HomePage = (number, label) => {
  const [selectedFeature, setSelectedFeature] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPara, setSelectedPara] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const features = [
    { name: "Cloud Support", image: one },
    { name: "Chit Management", image: two },
    { name: "Savings Scheme Management", image: three },
    { name: "Estimation & Billing", image: four },
    { name: "Cost Management", image: five },
    { name: "Reporting & Dashboard", image: six },
  ];

  const images = [
    { images: client1 },
    { images: client2 },
    { images: client3 },
    { images: client4 },
    { images: client5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const buttonData = [
    {
      name: "AU Pay  ",
      image: aupayimg,
      para: "The Golden Gold App We're Making Jewellery Scheme Payments Easier.",
    },
    {
      name: "AU Sales",
      image: ausales,
      para: "The Hybrid ERP Magic Inventory Management Excellence In Every Tap",
    },
    {
      name: "AU Shop",
      image: aushop,
      para: "Open Your Shop To World A Smooth Jewellery Shopping Experience",
    },
  ];

  const handleButtonClick = (image, para, name) => {
    setSelectedImage(image);
    setSelectedPara(para);
    setSelectedTitle(name);
  };
  const handleCardClick = (feature) => {
    setSelectedFeature(feature);
  };
  return (
    <>
      <Topnavbar />

      <Container fluid className="mainPage">
        <Container className="homepage-content">
          <h1 className="heading1">
            360° Software Solutions for <br /> Your{" "}
            <span style={{ color: "#EEBB56" }}>JEWELLERY</span> Store
          </h1>
          <h6>
            Take Your Jewellery Store to the Next Level with AURUMM - The
            Ultimate Software Suite
          </h6>
          <Button className="schedule-demo-btn">Schedule A Demo</Button>
        </Container>
        <Container className="homepagecontenttwo">
          <div className="content-left">
            <h5>JEWELLERY STORE APP SUITE</h5>
            <h3>Simplified Operations, Increased Profits.</h3>
            <p>
              AURUMM revolutionizes the way jewellery stores operate, offering
              seamless solutions for gold saving schemes, online sales
              platforms, and inventory management. Streamline operations,
              increase productivity and double your revenue with our
              longstanding cutting-edge solutions! Welcome to a future of
              innovation, efficiency, and brilliance. Welcome to AURUMM.
            </p>
          </div>
          <div className="content-right">
            <img src={imagone} alt="AURUMM App" />
          </div>
        </Container>
        <Container className="featured-container">
          <h6 className="featured-title">FEATURED APPS</h6>
          <h2 className="featured-heading">
            AURUMM for Your Jewellery Business
          </h2>

          <Row className="featured-row">
            <Col className="featured-col">
              <Card className="featured-card">
                <img className="arumnlogo" src={aurummlogo} alt="AU PAY Logo" />

                <h5>AU PAY</h5>
                <h6>An Exclusive Gold Savings Scheme Payment App</h6>
                <p>
                  Make gold scheme payments simple and easy for your customers
                  with AU Pay - the ultimate jewellery finance partner.
                </p>
                <Button>Get Started &rarr;</Button>
              </Card>
            </Col>
            <Col className="featured-col">
              <Card className="featured-cardtwo">
                <img
                  className="arumnlogo"
                  src={aurummlogo}
                  alt="AU SALES Logo"
                />
                <h5>AU SALES</h5>
                <h6>All-Round Inventory Management Assistant</h6>
                <p>
                  If you're looking for a holistic store management solution,
                  then AU Sales is the only app you need!
                </p>
                <Button>Get Started &rarr;</Button>
              </Card>
            </Col>
            <Col className="featured-col">
              <Card className="featured-cardthree">
                <img
                  className="arumnlogo"
                  src={aurummlogo}
                  alt="AU SHOP Logo"
                />
                <h5>AU SHOP</h5>
                <h6>Give Your Fine Jewellery A Sleek Online Platform</h6>
                <p>
                  Are you ready to give your customers the ultimate online
                  jewellery shopping experience? Discover AU Shop and let's
                  begin!
                </p>
                <Button>Get Started &rarr;</Button>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className="contentthree">
          <Row>
            <Col md={6}>
              <h6 className="section-title">FEATURES</h6>
              <h3 className="section-heading">
                Growth with AURUMM: Your Partner in Success!
              </h3>
              {features.map((feature, index) => (
                <Card
                  key={index}
                  onClick={() => handleCardClick(feature)}
                  className="feature-card"
                >
                  <h5>{feature.name}</h5>
                </Card>
              ))}
            </Col>

            <Col md={6} className="selected-feature-section">
              <h4 className="selected-feature-title">Selected Feature</h4>
              {selectedFeature ? (
                <Card className="selected-feature-card">
                  <img
                    src={selectedFeature.image}
                    alt={selectedFeature.name}
                    className="selected-feature-image"
                  />
                  <h5>{selectedFeature.name}</h5>
                  <p>
                    Detailed description of
                    <strong>{selectedFeature.name}</strong> will appear here.
                  </p>
                </Card>
              ) : (
                <p style={{color:'yellow'}}>Please select a feature to see the details here.</p>
              )}
            </Col>
          </Row>
        </Container>
        <Container className="button_features">
          <Row>
            {buttonData.map((button, index) => (
              <Col key={index} sm={4}>
                <Button
                  className="btn"
                  onClick={() =>
                    handleButtonClick(button.image, button.para, button.name)
                  }
                >
                  {button.name}
                </Button>
              </Col>
            ))}
          </Row>
        </Container>

        {selectedImage && (
          <Container className="image_display">
            <Row className="align-items-center">
              <Col xs={12} md={6} className="image-col">
                <img
                  src={selectedImage}
                  alt="Selected Feature"
                  className="displayed_image"
                />
              </Col>

              <Col xs={12} md={6} className="content-col">
                <div className="content-inner">
                  <h2 className="feature-title">{selectedTitle}</h2>
                  <p className="image-description">{selectedPara}</p>
                </div>
              </Col>
            </Row>
          </Container>
        )}
        <br />
        <Container className="help-section">
          <h4 className="section-title">WE'RE HERE TO HELP</h4>
          <h2 className="section-subtitle">
            This is The Future of Jewellery Store Management
          </h2>
          <Row className="card-row">
            <Col xs={12} md={6} className="card-col">
              <Card className="help-card">
                <img
                  src={star}
                  alt="All-Round Assistance"
                  className="card-img"
                />
                <h3 className="card-title">All-Round Assistance</h3>
                <p className="card-description">
                  Crafted for excellence, AURUMM is a premium end-to-end
                  software suite that is designed for jewellery stores of all
                  sizes.
                </p>
              </Card>
            </Col>
            <Col xs={12} md={6} className="card-col">
              <Card className="help-card">
                <img
                  src={realm}
                  alt="Relationship Management"
                  className="card-img"
                />
                <h3 className="card-title">Relationship Management</h3>
                <p className="card-description">
                  Stay tuned with your customers and vendors to keep their data
                  safe and sound - with AURUMM, anything is possible!
                </p>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className="help-section">
          <Row className="card-row">
            <Col xs={12} md={6} className="card-col">
              <Card className="help-card">
                <img
                  src={twenty}
                  alt="Technical Support"
                  className="card-img"
                />
                <h3 className="card-title">Technical Support</h3>
                <p className="card-description">
                  Our dedicated team of professionals are available anytime
                  throughout the year to resolve all your queries!
                </p>
              </Card>
            </Col>
            <Col xs={12} md={6} className="card-col">
              <Card className="help-card">
                <img src={stay} alt="Stay Ahead" className="card-img" />
                <h3 className="card-title">Stay Ahead</h3>
                <p className="card-description">
                  We're always keeping up with the latest trends and updating
                  our platforms - so you'll always have the edge over your
                  competitors!
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
        <br />

        <Container className="stats-module">
          <Row className="stats-row">
            <Col xs={12} md={4} className="stats-col">
              <div className="stat-card">
                <h3 className="stat-number">50+</h3>
                <p className="stat-text">Clients</p>
              </div>
            </Col>
            <Col xs={12} md={4} className="stats-col">
              <div className="stat-card">
                <h3 className="stat-number">10k+</h3>
                <p className="stat-text">Downloads</p>
              </div>
            </Col>
            <Col xs={12} md={4} className="stats-col">
              <div className="stat-card">
                <h3 className="stat-number">72%</h3>
                <p className="stat-text">Client Revenue Increase</p>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
    <Container className="clients-section">
      <h3 className="section-title">OUR CLIENTS</h3>
      <h2 className="main-heading">BRANDS THAT TRUST US</h2>
      <div className="image-slider">
  <div className="image-slide">
    {images.map((image, index) => (
      <div key={index} className="slider-item">
        <img
          src={image.images}
          alt={`Slide ${index + 1}`}
          className="slider-image"
        />
      </div>
    ))}
  </div>
</div>
    </Container>
    <br/>
      </Container>
      <LowNavbar />
    </>
  );
};

export default HomePage;
