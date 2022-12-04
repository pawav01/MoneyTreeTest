import React from "react";
import moneytree from "../images/moneytree.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Container>
        <Navbar style={{ backgroundColor: "#D3F5D3" }} expand="lg" fixed="top">
          <img src={moneytree} width="100" height="100" alt="Money Tree logo" />

          <Navbar.Brand style={{ fontSize: "250%", paddingLeft: "2%" }}>
            Money Tree
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="/">Home</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/account">Accounts</Link>
              <Link to="/categories">Categories</Link>
              <Link to="/login">Login</Link>
              <Link to="/transaction">Transactions</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavigationBar;
