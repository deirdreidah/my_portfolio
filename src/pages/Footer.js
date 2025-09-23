import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaXTwitter} from "react-icons/fa6";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#041a32ff", // bootstrap blue
        color: "white",
        padding: "20px 0",
        marginTop: "40px",
      }}
    >
      <Container>
        <Row className="text-center">
          <Col>
            <p style={{ margin: 0 }}>
              &copy; {new Date().getFullYear()} Navugga Deirdre Idah. All Rights Reserved.
            </p>
          </Col>
        </Row>
        <Row className="text-center mt-2">
          <Col>
            {/* Social Media Icons */}
            <a
              href="https://www.linkedin.com/in/deirdre-navugga-144a11383"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", margin: "0 10px", fontSize: "1.5rem" }}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/deirdreidah"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", margin: "0 10px", fontSize: "1.5rem" }}
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/_deirdreidah?t=1uZKXmJPIh8E4N3KEKbkwA&s=08"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", margin: "0 10px", fontSize: "1.5rem" }}
            >
              <FaXTwitter />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
