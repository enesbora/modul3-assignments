import React from "react";
import Question from "./Question";
import AnswerList from "./AnswerList";
import "./Quiz.css";

const Quiz = ({
  questionList,
  step,
  score,
  nextQuestion,
  checkAnswer,
  totalQuestion,
}) => {
  return (
    <div className="quiz">
      <div className="table">
        <p className="step">
          Soru <br />
          {step}/{totalQuestion}
        </p>
        <p className="score"> {score}</p>
      </div>
      <div>
        <Question questions={questionList} />
      </div>
      <div>
        <AnswerList questions={questionList} checkAnswer={checkAnswer} />
      </div>
      <button onClick={nextQuestion}>Sonraki</button>
    </div>
  );
};

export default Quiz;
