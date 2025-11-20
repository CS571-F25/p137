import { Container, Row, Col, Card } from "react-bootstrap";

export default function AboutMe() {
  return (
    <Container style={{ padding: "2rem" }}>
      <Row className="mb-4">
        <Col>
          <h1 style={{ color: "#333" }}>About Me</h1>
          <p style={{ color: "#555" }}>
            Hi! My name is Joseph. I am studying mechanical engineering with a certificate in computer science with interests in the space indsutry and robotics.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Card style={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
            <h3>Experience</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card style={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
            <h2>Contact / Links</h2>
            <p>
              Email: <br />
              LinkedIn:
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
