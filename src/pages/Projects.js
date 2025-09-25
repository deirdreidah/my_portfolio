import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

function Projects() {
  const projects = [
    {
      title: "My Graphics Portfolio",
      description: "This portfolio shows the different things i have designed using Adobe Illustrator",
      img: process.env.PUBLIC_URL + "images/adobe image.png",
      tech: ["Adobe Illustrator"],
      demo: process.env.PUBLIC_URL + "/My Portfolio.pdf"
    },
    {
      title: "Construction Company Website",
      description: "A website for a construction company with about us page, services, projects gallery, and contact form. The about us page is all about the company, the services page has sub sections showing the different kinds of services offered.",
      img: process.env.PUBLIC_URL + "images/urban tech.png",
      tech: ["React", "Flask", "Bootstrap"],
      github: "https://github.com/Edit22d/UTEC-WEBSITE-FRONTEND",
      demo: "https://urbantechconsults.com/"
    },
    {
      title: "Book Management System",
      description: "A CRUD app that lets users add, update, and manage books locally with categorization. In this book system, you can have favorite books and you can also remove them from favorites. You can also search for a book by just typing any letter of the book.",
      img: process.env.PUBLIC_URL + "images/book system.png",
      tech: ["JavaScript", "HTML", "Bootstrap"],
      github: "https://github.com/deirdreidah/javascript_book_project",
      demo: "file:///C:/Users/ir/Desktop/Year%201%20Sem%202%20Javascript/Book%20project/index.html"
    }
  ];

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">
        My <span style={{ color: "#041a32ff" }}>Projects</span>
      </h2>

      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src={project.img} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>

                <div className="mb-2">
                  {project.tech.map((t, i) => (
                    <Badge bg="secondary" className="me-1" key={i}>
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="d-flex justify-content-between">
                  <Button variant="primary" href={project.demo} target="_blank">
                    Live Demo
                  </Button>
                  <Button variant="dark" href={project.github} target="_blank">
                    GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;

