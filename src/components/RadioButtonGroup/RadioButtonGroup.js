import React from "react";
import RadioButton from "../radioButton/RadioButton";
// eslint-disable-next-line react/prop-types
export default function RadioButtonGroup({ option, onRadiobtnclick }) {
  // eslint-disable-next-line no-console

  return (
    <div>
      <RadioButton option={option} onRadiobtnclick={onRadiobtnclick} />
    </div>
  );
}
