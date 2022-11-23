import React from "react";
import NavigationBar from "./NavigationBar";
import { Carousel, Card, Row } from "react-bootstrap";
import "../styles/Styles.scss";
import fw from "../images/FortWayne.jpg";
import chicago from "../images/Chicago.jpg";
import mtRainier from "../images/MtRainierNP.jpg";

const Homepage = () => {
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
            src={chicago}
            alt="First slide"
            height={500}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fw}
            alt="Second slide"
            height={500}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mtRainier}
            alt="Third slide"
            height={500}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
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
        <Card style={{ marginLeft: "2rem", marginRight: "2rem" }}>
          <Card.Body>
            <Card.Title>Login or Sign Up</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Login or sign up to get started!
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default Homepage;
