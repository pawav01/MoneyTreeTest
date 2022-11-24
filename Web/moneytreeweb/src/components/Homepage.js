import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import { Carousel, Card, Row, Button } from "react-bootstrap";
import "../styles/Styles.scss";
import carousel1 from "../images/Carouselimg1.png";
import carousel2 from "../images/Carouselimg2.png";
import carousel3 from "../images/Carouselimg3.png";
import Login from "./Login";
import Signup from "./Signup";

const Homepage = () => {
  const [buttonClick, setButtonClick] = useState("Login");
  // const [buttonText, setButtonText] = useState("Sign Up");

  const handleSignup = () => {
    // setButtonText("Login instead");
    setButtonClick("Sign Up");
  };

  return (
    <div>
      <NavigationBar />
      <Carousel
        fade
        style={{
          marginTop: "10rem",
          width: "95%",
          marginLeft: "2rem",
          marginRight: "2rem",
        }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
            height={500}
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
            height={500}
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
            height={500}
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <Row style={{ margin: "2rem" }}>
        <Card>
          <Card.Body>
            <Card.Title>Services</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Check your income, expenses, and savings!
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ marginLeft: "2rem", marginRight: "2rem", width: "48%" }}>
          <Card.Body>
            <Card.Title>Login or Sign Up</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Login or sign up to get started!
            </Card.Subtitle>
            <Card.Text>
              Don't have an account?
              <Button style={{ margin: "1rem" }} onClick={handleSignup}>
                Sign Up
              </Button>
            </Card.Text>
            {buttonClick === "Login" ? <Login /> : <Signup />}
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default Homepage;
