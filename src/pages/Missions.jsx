import MissionCard from "../components/MissionCard";
import { Container, Row, Col } from "react-bootstrap";
import "./missions.css";
import missions from "../data/missions";

export default function Missions() {

  return (
    <Container fluid className="mission-wall">
      <Row className="g-4">
        {missions.map((mission, index) => (
          <Col 
            key={index} 
            xs={12} sm={6} lg={4}
            className="screen-container"
          >
            <div className="screen-frame">
              <MissionCard {...mission} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}