import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Home() {
  return (
    <Container className="text-center mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image src="/images/didi 2.jpg" alt="Didi" fluid rounded />
        </Col>
        <Col md={6}>
          <h1>
            <span className="fname">NAVUGGA </span>
            <span className="names">DEIRDRE IDAH</span>
          </h1>
          <h2>Welcome to my portfolio. Enjoy my journey.</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

