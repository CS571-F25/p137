import { Container, Row, Col, Button } from "react-bootstrap";
import Slideshow from "../components/Slideshow";
import { useNavigate } from "react-router";
import missions from "../data/missions";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-content" style={{ padding: "2rem" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 style={{ color: "white", fontSize: "3rem" }}>
              Mission Control
            </h1>
            <p style={{ color: "#1f7575ff", fontSize: "1.2rem" }}>
              Explore current missions — past, present, and future.
            </p>
            <Button variant="info" onClick={() => navigate("/missions")}>
              See More
            </Button>
          </Col>
          <Col md={6}>
            <Slideshow missions={missions} />
          </Col>

        </Row>
      </Container>
    </div>
  );
}