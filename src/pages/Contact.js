import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">
        Contact <span style={{ color: "#0d6efd" }}>Me</span>
      </h2>

      {/* Contact Info Cards */}
      <Row className="mb-5">
        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3">
            <FaPhoneAlt size={50} color="#0d6efd" />
            <Card.Body>
              <Card.Title>Phone</Card.Title>
              <Card.Text>+256 756 801 681</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3">
            <FaEnvelope size={50} color="#0d6efd" />
            <Card.Body>
              <Card.Title>Email</Card.Title>
              <Card.Text>idahdeirdre@gmail.com</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3">
            <FaMapMarkerAlt size={50} color="#0d6efd" />
            <Card.Body>
              <Card.Title>Address</Card.Title>
              <Card.Text>Ndejje Entebbe Road</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="mb-3">
          <Card className="text-center shadow-sm h-100 p-3">
            <FaLinkedin size={50} color="#0d6efd" />
            <Card.Body>
              <Card.Title>LinkedIn</Card.Title>
              <Card.Text>
                <a 
                  href="https://www.linkedin.com/in/deirdre-navugga-144a11383/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: '#0d6efd' }}
                >
                  Connect with me
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Form */}
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h3 className="text-center mb-4">Send Me a Message</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Your phone number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your message" />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">Send Message</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;




