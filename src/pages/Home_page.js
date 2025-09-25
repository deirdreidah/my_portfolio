import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // gradient background
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Side (Text) */}
          <Col md={6} className="text-start">
            <h2 style={{ fontSize: "2rem", fontWeight: "300" }}>Hello!</h2>
            <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
              I Am <span style={{ color: "#00d9ff" }}>Navugga Deirdre Idah</span>
            </h1>
            <p style={{ fontSize: "1.2rem", marginTop: "1rem", maxWidth: "500px" }}>
              I am a Computer Science student passionate about designing, developing, 
              and analyzing data. I have skills like
            </p>
          </Col>

          {/* Right Side (Image) */}
          <Col md={6} className="text-center">
            <Image
              src="images/didi 2.jpg"
              alt="Didi"
              fluid
              roundedCircle
              style={{
                maxWidth: "350px",
                border: "5px solid #00d9ff",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;


