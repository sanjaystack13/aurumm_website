import React from "react";
import Topnavbar from "./Topnavbar";
import imageone from "./Images/new_aupay.939fae7cneww.svg";
import imagetwo from "./Images/new_digigold.0a733f60neww2.svg";
import fscm from "./Images/3d-cube 1.ff7ab8fd.svg";
import ATS from "./Images/tracking 1.f41a1dff.svg";
import sps from "./Images/atm-card 1.dc5e0c0e.svg";
import si from "./Images/network 1.cb97bca7.svg";
import Cdm from "./Images/customer_Database.2838f5d8.svg";
import pm from "./Images/profile _management.4a88ff77.svg";
import seg from "./Images/segmentation.5cb96792.svg";
import Pit from "./Images/personalized 1.8a024842.svg";
import tra from "./Images/tracking (1) 1.00fbf6a8xx.svg";
import Cpd from "./Images/detail 1.8e70a0a0.svg";
import arm from "./Images/record-keeping 1.8ebee541.svg";
import pap from "./Images/paperless 1.91a5e585.svg";
import pr from "./Images/Point_Redemption.653d505c.svg";
import lc from "./Images/loyal-customer 1.a5520348.svg";
import sup from "./Images/system-update 1.ccf2e5ce.svg";
import user from "./Images/user 1.32fff8ea.svg";
import con from "./Images/conversation 1.e2e21cec.svg";
import press from "./Images/press-button 1.076fe013.svg";
import protection from "./Images/protection 1.684ed722.svg";
import tap from "./Images/tap 1.be1627ac.svg";

import "./AuPay.css";
import { Card, Col, Row } from "react-bootstrap";
import LowNavbar from "./LowNavbar";
const AuPay = () => {
  return (
    <>
    <Topnavbar/>
      <div className="aupaybody">
        <div className="headingone">
          <h2>AU PAY</h2>
          <h1>
            An Exclusive Savings Scheme Payment App for Your Jewellery Store!
          </h1>
        </div>

        <div className="contentone">
          <div>
            <h6>AU PAY</h6>
            <h3>The Golden Gold App</h3>
            <h3>We're Making Jewellery Scheme Payments Easier.</h3>
            <p>
              AU Pay introduces a chit scheme payment system that transcends the
              ordinary - providing your patrons with a secure and efficient way
              to make their jewellery dreams a reality. Whether they're
              acquiring a timeless piece for themselves or expressing love
              through a thoughtful gift, AU Pay ensures that every instalment
              paid is smooth and as memorable as the purchase itself. Give your
              customers an immersive chit-scheme management platform where
              sophistication meets simplicity - experience AU Pay today!
            </p>
          </div>
          <img src={imageone} alt="AU Pay App" />
        </div>
        <div className="contentone">
          <div>
            <h6>AU PAY</h6>
            <h3>Digi Gold</h3>
            <h3>Next-Gen Gold Investment Platform</h3>
            <p>
              DIGI GOLD offers real-time investment in gold, fully backed by
              actual gold stored in secure vaults. With AU.Pay‘s DIGI GOLD, your
              customers can easily buy, store, and sell gold online in small,
              affordable amounts. Whether it‘s 1 gram or 100 grams, DIGI GOLD
              provides a secure, accessible, and convenient investment solution
              for all.
            </p>
          </div>
          <img src={imagetwo} alt="Digi Gold" />
        </div>

        <div>
          <Row>
            <h4 className="section-title">FEATURES</h4>
            <Col lg={6} md={12}>
              <div className="feature-section">
                <Card className="feature-card">
                  <h3>Chit & Scheme Management</h3>
                  <p>
                    Facilitates seamless administration and tracking of various
                    chit funds and schemes.
                  </p>
                  <Card className="feature-card-item">
                    <img
                      src={fscm}
                      alt="Feature"
                      className="feature-card-img"
                    />
                    Flexible Scheme Creation and Management.
                  </Card>
                  <Card className="feature-card-item">
                    <img src={ATS} alt="Feature" className="feature-card-img" />
                    Automated Tracking of Schemes.
                  </Card>
                </Card>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <div className="feature-section">
                <Card className="feature-card">
                  <h3>Payment Management</h3>
                  <p>
                    Simplifies transaction processing and invoicing for enhanced
                    financial efficiency.
                  </p>
                  <Card className="feature-card-item">
                    <img src={sps} alt="Feature" className="feature-card-img" />
                    Streamlined Payments
                  </Card>
                  <Card className="feature-card-item">
                    <img src={si} alt="Feature" className="feature-card-img" />
                    Seamless Integration
                  </Card>
                </Card>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <Col lg={6} md={12}>
              <div className="feature-section">
                <Card className="feature-card">
                  <h3>Customer Management</h3>
                  <p>
                    Enables comprehensive customer relationship management with
                    segmentation and personalized communication tools.
                  </p>
                  <Card className="feature-card-item">
                    <img src={Cdm} alt="Feature" className="feature-card-img" />
                    Customer Database Maintenance
                  </Card>
                  <Card className="feature-card-item">
                    <img src={pm} alt="Feature" className="feature-card-img" />
                    Profile Management
                  </Card>
                  <Card className="feature-card-item">
                    <img src={seg} alt="Feature" className="feature-card-img" />
                    Segmentation
                  </Card>
                  <Card className="feature-card-item">
                    <img src={Pit} alt="Feature" className="feature-card-img" />
                    Personalized Interaction Tools
                  </Card>
                </Card>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <div className="feature-section">
                <Card className="feature-card">
                  <h3>Purchase Management</h3>
                  <p>
                    With AU Pay, customers can keep track of all of their
                    purchases with ease!
                  </p>
                  <Card className="feature-card-item">
                    <img src={tra} alt="Feature" className="feature-card-img" />
                    Efficient tracking of purchased goods
                  </Card>
                  <Card className="feature-card-item">
                    <img src={Cpd} alt="Feature" className="feature-card-img" />
                    Comprehensive Product Details
                  </Card>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col lg={6} md={12}>
              <div className="feature-section">
                <Card className="feature-card">
                  <h3>Ease of Access</h3>
                  <p>
                    Allow customers the convenience of finding out their
                    accumulated money or weight in gold - all in one tap!
                  </p>
                  <Card className="feature-card-item">
                    <img src={arm} alt="Feature" className="feature-card-img" />
                    Accurate Record Maintenance
                  </Card>
                  <Card className="feature-card-item">
                    <img src={pap} alt="Feature" className="feature-card-img" />
                    Paperless
                  </Card>
                </Card>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <div className="feature-section">
                <Card className="feature-card">
                  <h3>Loyalty & Reward Points</h3>
                  <p>
                    Drives customer retention and engagement with customizable
                    loyalty programs and reward point systems.
                  </p>
                  <Card className="feature-card-item">
                    <img src={pr} alt="Feature" className="feature-card-img" />
                    Easy Point Redemption
                  </Card>
                  <Card className="feature-card-item">
                    <img src={lc} alt="Feature" className="feature-card-img" />
                    Customizable Loyalty Programs
                  </Card>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col lg={6} md={12}>
              <div className="feature-section">
                <Card className="feature-card">
                  <h3>Email/ SMS/ Whatsapp Notification</h3>
                  <p>
                    Automates communication channels to keep customers informed
                    and engaged throughout their journey.
                  </p>
                  <Card className="feature-card-item">
                    <img src={sup} alt="Feature" className="feature-card-img" />
                    Automated Updates
                  </Card>
                  <Card className="feature-card-item">
                    <img
                      src={user}
                      alt="Feature"
                      className="feature-card-img"
                    />
                    Personalized Messaging
                  </Card>
                </Card>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <div className="feature-section">
                <Card className="feature-card">
                  <h3>Enquiry & Follow-up</h3>
                  <p>
                    Keep all your customer inquiries in check and maintain
                    perfect follow-up systems for efficient sales management!
                  </p>
                  <Card className="feature-card-item">
                    <img src={con} alt="Feature" className="feature-card-img" />
                    Centralized Inquiries
                  </Card>
                  <Card className="feature-card-item">
                    <img
                      src={press}
                      alt="Feature"
                      className="feature-card-img"
                    />
                    Automated Follow-Ups
                  </Card>
                </Card>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <Col lg={6} md={12}>
              <div className="feature-section">
                <Card className="feature-card">
                  <h3>Online Payment Module</h3>
                  <p>
                    Provides a secure and user-friendly platform for online
                    transactions, ensuring convenience and reliability.
                  </p>
                  <Card className="feature-card-item">
                    <img
                      src={protection}
                      alt="Feature"
                      className="feature-card-img"
                    />
                    Safe and Secure
                  </Card>
                  <Card className="feature-card-item">
                    <img src={tap} alt="Feature" className="feature-card-img" />
                    Ease of Usage
                  </Card>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
        <LowNavbar />
      </div>
    </>
  );
};

export default AuPay;
