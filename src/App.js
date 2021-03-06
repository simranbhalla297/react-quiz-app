/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Otp from "./components/Form/Otp";
import Quiz from "./pages/quiz/Quiz";
import EndScreen from "./pages/result/EndScreen";
import { QuizContext } from "./Helpers/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainMenu from "./pages/mainMenu/MainMenu";
export default function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [rightanswer, setRightanswer] = useState(0);
  const [wronganswer, setWronganswer] = useState(0);
  const [quetionList, setQuestionList] = useState([]);
  const [mynumber, setnumber] = useState("");
  console.log(quetionList);
  const fetchQuestions = () => {
    const apiUrl =
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        console.log(response.results);
        setQuestionList(response.results);
      });
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

  console.log(quetionList);
  var questionlength = quetionList.length;
  console.log(questionlength);
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <QuizContext.Provider
            value={{
              gameState,
              setGameState,
              score,
              setScore,
              rightanswer,
              setRightanswer,
              wronganswer,
              setWronganswer,
              mynumber,
              setnumber,
            }}
          >
            <Route exact path="/">
              <MainMenu fetchQuestions={fetchQuestions} />
            </Route>
            <Route exact path="/quiz">
              <Quiz
                quetionList={quetionList}
                setQuestionList={setQuestionList}
              />
            </Route>
            <Route exact path="/endScreen">
              <EndScreen
                quetionList={quetionList}
                length={questionlength}
                setQuestionList={setQuestionList}
              />
            </Route>
            <Route exact path="/otp">
              <Otp fetchQuestions={fetchQuestions} />
            </Route>
          </QuizContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
