import React from "react";
import NavigationBar from "./NavigationBar";
import { Container } from "react-bootstrap";
import "../styles/Styles.scss";

const Homepage = () => {
  return (
    <div>
      <Container>
        <NavigationBar />
      </Container>
    </div>
  );
};

export default Homepage;
