import { Card, Button } from "react-bootstrap";
import MissionModal from "./MissionModal";
import { useState } from "react";

export default function MissionCard(props) {
    const [showModal, setShowModal] = useState(false);

    function handleClick() {
        navigate(`/missions/${props.id}`);
    }

    return (
        <>
            <Card style={{ width: "100%", backgroundColor: "#1b1e24", color: "white"}}>
            {props.image ? <Card.Img variant="top" src={props.image} alt={props.title} /> : <></>}
            <Card.Body>
                <Card.Title style={{color:"#FFD700"}}>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <div className="d-flex justify-content-between" style={{marginTop:"1rem"}}>
                    <Button variant="primary" onClick={() => setShowModal(true)} style={{
                    "--bs-btn-bg": "#00AACC",
                    "--bs-btn-border-color": "#00AACC",
                    "--bs-btn-hover-bg": "#006d83ff",
                    "--bs-btn-hover-border-color": "#006d83ff",
                  }}>
                    View Details
                  </Button>
                </div>
            </Card.Body>
            </Card>
            <MissionModal show={showModal} onClose={() => setShowModal(false)} {...props}/>
      </>
  );
}