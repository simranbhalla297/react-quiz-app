/* eslint-disable no-console */
import React, { useState } from "react";
// eslint-disable-next-line react/prop-types
export default function RadioButton({ option, onRadiobtnclick }) {
  const [answerOptions, setAnswerOptions] = useState("");

  return (
    <div>
      <input
        type="radio"
        value={option}
        name="choose"
        onChange={onRadiobtnclick}
      />
      <span>{option}</span>
    </div>
  );
}
