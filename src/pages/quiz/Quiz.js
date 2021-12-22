/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useState, useContext, useEffect } from "react";
import { QuizContext } from "../../Helpers/Context";
import { useHistory } from "react-router";
import { questions } from "../../Helpers/QuestionBank";
// import { getQuiz } from "../../Helpers/QuestionBank";
// import RadioButtonGroup from "../components/RadioButtonGroup/RadioButtonGroup";
import Pagination from "../../components/pagination/Pagination";
import Button from "react-bootstrap/Button";
import Timer from "../../components/timer/Timer";
import Score from "../../components/score/Score";
import { FaUser } from "react-icons/fa";
import "./Quiz.css";
export default function Quiz({ quetionList }) {
  const history = useHistory();
  console.log(quetionList);
  const {
  
   
    score,
    setScore,
    rightanswer,
    setRightanswer,
    wronganswer,
    setWronganswer,
  } = useContext(QuizContext);
  // const [quetionList, setQuestionList] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [error, setError] = useState("");
  const [useranswer, setUseranswer] = useState("");
  const [options, setOptions] = useState([]);

 
  useEffect(() => {
    setOptions(
      quetionList &&
        handleShuffle([
          quetionList[currentQuestion]?.correct_answer,
          ...quetionList[currentQuestion]?.incorrect_answers,
        ])
    );

    return () => {
      setOptions({}); // This worked for me
    };
  }, [currentQuestion, quetionList]);

  console.log(quetionList);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  console.log(`${options} options`);
  console.log(quetionList);


  //shuffle options

  const correctAnswer = quetionList[currentQuestion].correct_answer;
  //for next question
  const handleAnswerOptionClick = () => {
    // if (currentQuestion > questions.length) {
    //   history.push("/endscreen");
    // } else
    if (useranswer) {
      console.log("option selected");
      setCurrentQuestion(currentQuestion + 1);
      setUseranswer();
      setError();
    } else {
      setError("Please select an option first");
    }
  };
  const handleCheck = (option) => {
    console.log(`option selected ${option}`);
    setUseranswer(option);
    if (option === correctAnswer) {
      setScore(score + 1);
      setRightanswer(rightanswer + 1);
    } else {
      setWronganswer(wronganswer + 1);
    }
  };

  const handleSelect = (option) => {
    if (useranswer === option && useranswer === correctAnswer) return "select";
    else if (useranswer === option && useranswer !== correctAnswer) {
      return "wrong";
    } else if (option === correctAnswer) {
      return "select";
    }
  };

  const finishQuiz = () => {
    history.push("/endscreen");
  };



  return (
    <div className="wrapper">
      <div className="main">
        {/* <div>
          <Pagination />
        </div> */}
        <div className="header">
          <div>
            <Timer />
          </div>
          <div>
            <div className="user_Icon">
              <FaUser
                color="#fff"
                style={{ fontSize: "30px", paddingTop: "5px" }}
              />
            </div>
            {/* <div>
              {" "}
              <Score score={score} />{" "}
            </div> */}
          </div>
        </div>

        <div className="question_container">
          <div className="questionLength">
            <div className="questionBox">
              {currentQuestion + 1}/{quetionList.length}
            </div>
          </div>
          {/* <div className="question">
            <h5>Question : {currentQuestion + 1}</h5>
          </div> */}
          <div className="question-text">
            {/* <div className="image_container">
              {questions[currentQuestion].image ? (
                <img
                  src={questions[currentQuestion].image}
                  alt={questions[currentQuestion].image}
                  className="question_image"
                />
              ) : null}
            </div> */}
            <div className="questionText">
              <p>{quetionList[currentQuestion].question}</p>
            </div>
          </div>
        </div>

        <div className="answer_container">
          {error ? <div className="error">{error}</div> : null}

          <div className="answer_section">
            {options.map(
              (answerOption, index) => (
                // eslint-disable-next-line react/jsx-key
                // eslint-disable-next-line react/jsx-key
                <div key={index}>
                  <button
                    className={`options ${
                      useranswer && handleSelect(answerOption)
                    } `}
                    onClick={() => handleCheck(answerOption)}
                    disabled={useranswer}
                  >
                    {answerOption}
                  </button>
                  {/* <RadioButtonGroup
                  option={answerOption.answerText}
                  onRadiobtnclick={() => optionSelected(answerOption.isCorrect)}
                /> */}
                </div>
              )
            )}
          </div>
          <div className="button">
            {currentQuestion == quetionList.length - 1 ? (
              <div style={{ marginLeft: "10px" }}>
                <Button
                  variant="dark"
                  className="finishBtn"
                  onClick={() => finishQuiz()}
                >
                  Finish and check Score
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  variant="dark"
                  className="nextBtn"
                  onClick={() =>
                    handleAnswerOptionClick(quetionList[currentQuestion].answer)
                  }
                >
                  Next question
                </Button>
              </div>
            )}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}