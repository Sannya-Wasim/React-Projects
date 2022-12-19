import "./styles.css";
import React, { useState } from "react";
import { data } from "./data";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerQuestion = (IsCorrect) => {
    if (IsCorrect === true) {
      setScore(score + 1);
    }
    const nextquestion = currentQuestion + 1;
    if (nextquestion < data.length) {
      setCurrentQuestion(nextquestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="App">
      <h1>Simple Quiz App</h1>
      {showScore ? (
        <div className="container">
          <div className="box">
            <h3>
              You scored {score} out of {data.length}
            </h3>
            <button onClick={() => window.location.reload(false)}>
              Attempt Again
            </button>
          </div>
        </div>
      ) : (
        <div className="container">
          <h3>
            Question {currentQuestion + 1}/{data.length}
          </h3>
          <h5>{data[currentQuestion].question}</h5>

          <div className="box">
            {data[currentQuestion].answers.map((answer) => (
              <button onClick={() => handleAnswerQuestion(answer.IsCorrect)}>
                {answer.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
