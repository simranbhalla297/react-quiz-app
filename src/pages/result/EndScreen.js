/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, {useEffect, useContext } from "react";
import { QuizContext } from "../../Helpers/Context";
import { questions } from "../../Helpers/QuestionBank";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import "./EndScreen.css";
// eslint-disable-next-line react/prop-types
export default function EndScreen({ quetionList,fetchQuestions }) {
  useEffect(()=>{
    fetchQuestions()
  },[])
  console.log(quetionList);
  const {
    score,
    rightanswer,
    wronganswer,
    setScore,
    setRightanswer,
    setWronganswer,
  } = useContext(QuizContext);
  // eslint-disable-next-line react/prop-types
  var totalQuestion = quetionList.length
  const history = useHistory();
  const gameRestart = () => {
    history.push("/");
    setScore(0);
    setRightanswer(0);
    setWronganswer(0);
  };
  return (
    <div className="result_wrapper">
      <div className="resultText">
        <h2>Your Result</h2>
      </div>
      <div className="result_container">
        <div className="totalQuestion">
          <p>Total Question</p>
          <p>{totalQuestion}</p>
        </div>
        <div className="score">
          <p>Score</p>
          <p>{score}</p>
        </div>
        <div className="correctAnswer">
          <p>correct Answer</p>
          <p>
            {rightanswer}/{totalQuestion}
          </p>
        </div>
        <div className="wrongAnswer">
          <p>wrong answer</p>
          <p>
            {wronganswer}/{totalQuestion}
          </p>
        </div>
      </div>
      <div className="button">
        <Button
          variant="dark"
          className="restartBtn"
          onClick={() => gameRestart()}
        >
          PLAY AGAIN
        </Button>
      </div>
      <div className="circle_container">
        <div className="circle">
          <div className='totalscore'>
            {score}/{totalQuestion}
          </div>
        </div>
      </div>
    </div>
  );
}
