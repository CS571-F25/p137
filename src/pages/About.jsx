// AboutMe.jsx
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./missions.css";
import Starfield from "../components/Starfield";

export default function AboutMe() {
  return (
    <Container fluid className="mission-wall" style={{ padding: "2rem" }}>
      <Starfield />
      <Row className="mb-5">
        <Col>
          <h1 style={{ color: "#FFD700", textAlign: "center" }}>About Me</h1>
          <p style={{ color: "#fff", textAlign: "center", maxWidth: "1000px", margin: "0.5rem auto", fontSize: "1.1rem" }}>
            Hi! My name is Joseph. I am studying mechanical engineering with a certificate in computer science at University of Wisconsin-Madison. I have interests in the space industry and robotics.
          </p>
        </Col>
      </Row>

      {/* Experience Section */}
      <Row className="mb-4 justify-content-center">
        <Col md={6}>
          <Card style={{ padding: "1.5rem", backgroundColor: "#1b1e24", color: "white", boxShadow: "0 0 15px #ffd70080" }}>
            <h3 style={{ color: "#FFD700" }}>Experience</h3>
            <ul style={{ paddingLeft: "1.2rem" }}>
              <li>Senior Design Project – Biomechanical Knee Joint Testing: Validated an ISL to study knee joint mechanics as well as developed a surrogate knee for testing. Integrated the ISL with a Tormach robotic arm and ROS feedback loop for precise joint manipulation.</li>
              <li>Quality Engineer Intern, Mitsubishi Chemical Advanced Materials (Summer 2024): Performed inspections on high-performance thermoplastic parts, interpreted mechanical drawings/GD&T, and developed standard testing procedures to improve production efficiency.</li>
              <li>Senior Lifeguard Manager, Lake Bluff Park District (Summer 2023): Led a team of 85 staff, conducted trainings and certifications, and oversaw daily operations to ensure safety and smooth facility management.</li>
              
            </ul>
          </Card>
        </Col>
      </Row>

      {/* Resume Section */}
      <Row className="mb-4 justify-content-center">
        <Col md={6}>
          <Card style={{ padding: "1.5rem", backgroundColor: "#1b1e24", color: "white", textAlign: "center", boxShadow: "0 0 15px #ffd70080" }}>
            <h3 style={{ color: "#FFD700" }}>Resume</h3>
            <p>View a copy of my full resume to see my projects and experience.</p>
            <Button 
              href="/p137/Resume-JosephHanson.pdf" 
              target="_blank" 
              style={{ 
                backgroundColor: "#00AACC", 
                border: "none", 
                padding: "0.6rem 1.5rem", 
                borderRadius: "0.4rem",
                fontWeight: "bold"
              }}
            >
              View
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4 justify-content-center">
        <Col md={6}>
          <Card style={{ padding: "1.5rem", backgroundColor: "#1b1e24", color: "white", boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)" }}>
            <h3 style={{ color: "#FFD700" }}>Contact / Links</h3>
            <p>Email: <a href="mailto:jhanson2838@outlook.com" style={{ color: "#00AACC" }}>jhanson2838@outlook.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/joseph-hanson-uw/" target="_blank" style={{ color: "#00AACC" }}>www.linkedin.com/in/joseph-hanson-uw</a></p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
