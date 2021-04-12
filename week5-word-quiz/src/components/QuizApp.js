import React from "react";
import { useState } from "react";
import QuestionList from "../data/QuestionList.json";
import Quiz from "./Quiz";
import Result from "./Result";
//import "./Question.css";

const QuizApp = () => {
  const numberOfQuestions = 10;
/**
 * bu kisimda öncelikli olarak baslangiic degerleri satatuse kaydettim.
 */
  const [questions] = useState(QuestionList);
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);

  const nextQuestion = () => setStep(step + 1);
  const backButton = () => setStep(1);

  const random = () => {
    return Math.floor(Math.random() * questions.length);
  };

/**
 * Cevabin dogru olup olmadigini kontorol eden fonksiyon
 */
  const checkAnswer = (e) => {
    if (e.target.className === e.target.innerHTML) {
      setScore(score + 10);
      setStep(step + 1);
    } else {
      setScore(score + 0);
      setStep(step + 1);
    }
  };

/**
 * Quizin bitip bitmedigini burada kontrol ediyoruz.
 */

  if (step <= numberOfQuestions) {
    return (
      <div>
        <Quiz
          questionList={questions[`${random()}`]}
          score={score}
          step={step}
          nextQuestion={nextQuestion}
          checkAnswer={checkAnswer}
          totalQuestion={numberOfQuestions}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Result score={score} back={backButton} />
      </div>
    );
  }
};

export default QuizApp;
