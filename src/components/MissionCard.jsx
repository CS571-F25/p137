import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function MissionCard(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/missions/${props.id}`);
    }

    return (
        <Card style={{ width: "100%", backgroundColor: "#1b1e24", color: "white"}}>
        {props.image ? <Card.Img variant="top" src={props.image} alt={props.title} /> : <></>}
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <div className="d-flex justify-content-between">
            <Button 
                variant="primary" 
                onClick={handleClick}
            >
                View Details
            </Button>
            <Button 
                variant="outline-info" 
                onClick={()=> console.log("Favorite")}
            >
                ★
            </Button>
            </div>
        </Card.Body>
        </Card>
  );
}