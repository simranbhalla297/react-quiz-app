import React from "react";
import "./Score.css"
// eslint-disable-next-line react/prop-types
export default function Score({ score }) {
  return (
    <div className='scoreCard'>
      <p>Score <br/>{score}</p>
    </div>
  );
}
