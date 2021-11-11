/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { QuizContext } from "../../Helpers/Context";

import Signup from "../../components/Form/Signup";
import { useHistory } from "react-router";
// eslint-disable-next-line react/prop-types
export default function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  const history = useHistory();
  const gameStart = () => {
    history.push("/quiz");
  };

  return (
    <div
      style={{
        backgroundColor: "#101427",
        height: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", paddingTop: "50px", color: "#e2e2e2" }}>
        Take the quiz
      </h1>
      <div className="start_Quiz_btn">
        <Signup />
      </div>
    </div>
  );
}
