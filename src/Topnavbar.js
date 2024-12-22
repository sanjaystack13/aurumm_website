import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import aurumm from "./Images/Aurum_Logo.38df8d15.png";
import aurummlogo from "./Images/mobilelogo.75547e02.png";
import "./TopNavbar.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Topnavbar = () => {
  const nav = useNavigate()

  const handleButtonClick = ()=>{
    nav('/Contact')
  }
  return (
    <div>
      <div className="navtop">
        <h6 className="heading">
          Welcome to AURUMM – Your Gateway to a Brighter Jewellery Business
          Future!
        </h6>
        <Navbar expand="lg" className="custom-navbar">
          <Container>
            <Navbar.Brand href="#home">
              <img src={aurumm} alt="AURUMM Logo" className="navbar-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/" className="nav-link-custom">
                  Home
                </Nav.Link>
                <NavDropdown
                  title="Products & Features"
                  id="basic-nav-dropdown"
                  className="nav-dropdown-custom"
                >
                  <NavDropdown.Item
                    href="AuPay"
                    className="dropdown-item-custom"
                  >
                    <img
                      src={aurummlogo}
                      alt="AuPay Logo"
                      className="dropdown-icon"
                    />
                    AuPay
                  </NavDropdown.Item>
                  <NavDropdown.Item href="" className="dropdown-item-custom">
                    <img
                      src={aurummlogo}
                      alt="AuSales Logo"
                      className="dropdown-icon"
                    />
                    AuSales
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.3"
                    className="dropdown-item-custom"
                  >
                    <img
                      src={aurummlogo}
                      alt="AuShop Logo"
                      className="dropdown-icon"
                    />
                    AuShop
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link href="/Contact" className="nav-link-custom">
                  Contact Us
                </Nav.Link>
                <Button onClick={handleButtonClick}  className="demobut"><a href="/Contact"></a>Get A Free Demo</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Topnavbar;
