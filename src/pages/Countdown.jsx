import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Starfield from "../components/Starfield";

export default function CountdownPage() {
  const launchDate = new Date("2026-02-05T00:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  

  function getTimeLeft() {
    const now = new Date();
    const diff = launchDate - now;
    if (diff <= 0) return null;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container fluid className="mission-wall" style={{ minHeight: "100vh", position: "relative" }}>
      <Starfield />
      <div style={{ textAlign: "center", padding: "4rem", color: "white" }}>
        <h1 style={{color:"#FFD700"}}>Countdown to Next Artemis Launch</h1>
        {timeLeft ? (
          <div style={{
            backgroundColor: "#0a0a0a",
            color: "#00AACC",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "3rem",
            padding: "2rem 3rem",
            borderRadius: "0.5rem",
            boxShadow: "0 0 20px #00AACC",
            textAlign: "center",
            margin: "2rem auto",
            maxWidth: "600px",
          }}>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </div>
        ) : (
          <div style={{ fontSize: "2rem", margin: "2rem 0" }}>The launch has occurred!</div>
        )}
        <div style={{
          display: "flex",
          flexDirection: "column",  
          alignItems: "center",     
          gap: "2rem",              
          marginTop: "2rem"
        }}>
          <img 
            src="https://images-assets.nasa.gov/image/NHQ202211160016/NHQ202211160016~medium.jpg"
            alt="Artemis Rocket on Launch Pad"
            style={{ 
              maxHeight: "80vh",
              objectFit: "contain",
              borderRadius: "0.5rem"
            }}
          />
          <Button variant="primary" href="https://www.nasa.gov/specials/artemis/" target="_blank" style={{
            "--bs-btn-bg": "#db00dbff",
            "--bs-btn-border-color": "#db00dbff",
            "--bs-btn-hover-bg": "#8b008bff",
            "--bs-btn-hover-border-color": "#8b008bff",
            padding: "0.8rem 2rem",
            fontSize: "1.2rem",
            borderRadius: "0.5rem"
          }}>
            Learn More
          </Button>
        </div>
      </div>
    </Container>
  );
}