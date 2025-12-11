import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

export default function Slideshow({ missions, interval = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % missions.length);
    }, interval);

    return () => clearInterval(id);
  }, [missions, interval]);

  const current = missions[index];

  return (
    <Card 
      style={{
        width: "100%",
        height: "350px",
        backgroundColor: "#111",
        border: "3px solid #FFD700",
        overflow: "hidden"
      }}
    >
      <Card.Img 
        src={current.image} 
        alt={current.title} 
        style={{ objectFit: "cover", height: "100%" }}
      />
    </Card>
  );
}