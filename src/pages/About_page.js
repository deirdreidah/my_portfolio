import React from "react";
import { Container, Row, Col, Image, Table } from "react-bootstrap";
import aboutimg from "../images/didi.jpg"

function About() {
  return (
    <Container
      className="mt-5 p-4" >
      <Row>
        <Col md={4}>
          <Image src={aboutimg} alt="profile" fluid rounded />
        </Col>
        <Col md={8}>
          <h2>I'm Navugga Deirdre Idah.</h2>
          <p>
            Currently, I am studying at Women's Institute of Technology and Innovation
            pursuing a Diploma in Computer Science. I am passionate about computer science 
            and I am eager to learn and grow in this field. I am very determined and I love 
            working with other people. I am an aspiring data engineer who enjoys designing, 
            maintaining and analysing data.
          </p>

          <h3>Educational Background</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Year</th>
                <th>School</th>
                <th>Qualification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2022-2023</td>
                <td>Kyambogo College School</td>
                <td>Uganda Advanced Certificate of Education</td>
              </tr>
              <tr>
                <td>2017-2021</td>
                <td>Nabisunsa Girl's School</td>
                <td>Uganda Certificate of Education</td>
              </tr>
              <tr>
                <td>2010-2016</td>
                <td>Budo Junior School</td>
                <td>Primary Leaving Education</td>
              </tr>
            </tbody>
          </Table>

         <Row className="mt-4">
            {/* Skills Column */}
            <Col md={6}>
            <h3>Skills</h3>
            <ul>
            <li>Python (Flask)</li>
            <li>Adobe Illustrator</li>
            <li>React JavaScript</li>
            <li>MySQL</li>
            </ul>
            </Col>

            {/* Hobbies Column */}
            <Col md={6}>
            <h3>Hobbies</h3>
            <ul>
              <li>Reading tech blogs</li>
              <li>Reading novels</li>
              <li>Watching series</li>
              <li>Traveling around</li>
            </ul>
            </Col>
            </Row>

        </Col>
      </Row>
    </Container>
  );
}

export default About;

