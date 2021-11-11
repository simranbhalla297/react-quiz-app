import React, { useState, useEffect } from "react";
import { FaRegClock } from "react-icons/fa";
export default function Timer() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("You're out of time!");
    }
  });

  return (
    <div className="timer">
      <div style={{ textAlign: "center" }}>
        <FaRegClock className="timerIcon" /> <br />{" "}
        <p
          style={{
            marginTop: "5px",
            color: "#ffe387",
            fontsize: "18px",
            fontWeight: "bold",
          }}
        >
          {seconds}
        </p>
      </div>
    </div>
  );
}
