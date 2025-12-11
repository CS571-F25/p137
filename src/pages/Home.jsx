import { Container, Row, Col, Button } from "react-bootstrap";
import Slideshow from "../components/Slideshow";
import { useNavigate } from "react-router";
import missions from "../data/missions";
import "./missions.css";
import Starfield from "../components/Starfield";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container fluid className="mission-wall">
      <Starfield/>
      <div className="page-content" style={{ padding: "2rem" }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 style={{ color: "white", fontSize: "3rem" }}>
                Mission Control
              </h1>
              <p style={{ color: "#00AACC", fontSize: "1.2rem" }}>
                Learn about the missions, machines, and marvels shaping our understanding of space.
              </p>
              <div className="d-flex gap-4 mt-2">
                <Button variant="primary" onClick={() => navigate("/missions")} style={{
                  "--bs-btn-bg": "#00AACC",
                  "--bs-btn-border-color": "#00AACC",
                  "--bs-btn-hover-bg": "#006d83ff",
                  "--bs-btn-hover-border-color": "#006d83ff",
                }}>
                  Missions
                </Button>
                <Button variant="primary" onClick={() => navigate("/pictureoftheday")} style={{
                  "--bs-btn-bg": "#db00dbff",
                  "--bs-btn-border-color": "#db00dbff",
                  "--bs-btn-hover-bg": "#8b008bff",
                  "--bs-btn-hover-border-color": "#8b008bff",
                }}>
                  Picture of the Day
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <Slideshow missions={missions} />
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}