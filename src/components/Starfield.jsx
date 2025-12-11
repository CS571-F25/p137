import { useState } from "react";
import "../pages/missions.css";

export default function Starfield(props) {
  const [stars] = useState(() =>
    Array.from({ length: 80 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 30 + Math.random() * 30,
    }))
  );
  return (
    <div className="stars">
      {stars.map((star, i) => (
        <span
          key={i}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}