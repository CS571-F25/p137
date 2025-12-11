import { Modal, Button } from "react-bootstrap";

export default function MissionModal(props) {
  const modalStyle = {
    backgroundColor: "#1b1e24",
    color: "white",
    borderRadius: "0.5rem",
  };

  const headerStyle = {
    backgroundColor: "#1b1e24",
    color: "#FFD700",
    borderBottom: "1px solid #333",
  };

  const bodyStyle = {
    backgroundColor: "#1b1e24",
    color: "white",
  };

  const footerStyle = {
    backgroundColor: "#1b1e24",
    borderTop: "1px solid #333",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
    border: "1px solid #333",
  };

  return (
    <Modal show={props.show} onHide={props.onClose} centered size="lg" contentClassName="mission-modal-content">
      <Modal.Header closeButton closeVariant="white" style={headerStyle}>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body style={bodyStyle}>
        {props.image && <img src={props.image} alt={props.title} style={imageStyle} />}
        <p>{props.longDescription}</p>
      </Modal.Body>

      <Modal.Footer style={footerStyle}>
        <Button variant="warning" onClick={props.onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}