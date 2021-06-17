import React, { useState } from "react";
import Question from "./components/Question";
import CategorySelector from "./components/CategorySelector";
import ResultModal from "./components/ResultModal";
import Scoreboard from "./components/Scoreboard";
import useTrivia from "./useTrivia";
import "./App.css";

export default function App() {
  // custom hook / API
  // → question fetching
  // → category change handling
  const { question, getQuestion, category, setCategory } = useTrivia();
  // correct answer state
  const [isCorrect, setIsCorrect] = useState(null);

  // define if an answer is correct or not
  function handleQuestionAnswered(answer) {
    const isAnswerCorrect = answer === question.correct_answer;
    setIsCorrect(isAnswerCorrect);
  }

  // reset the modal and fetch the next question
  function handleNextQuestion() {
    setIsCorrect(null);
    getQuestion();
  }

  return (
    <div className="app">
      {/* the result modal ----------------------- */}
      {isCorrect !== null && (
        <ResultModal
          isCorrect={isCorrect}
          answer={question.correct_answer}
          getNextQuestion={handleNextQuestion}
        />
      )}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector category={category} chooseCategory={setCategory} />
        <Scoreboard isCorrect={isCorrect} />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {question && (
          <Question
            question={question}
            answerQuestion={handleQuestionAnswered}
          />
        )}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button onClick={handleNextQuestion}>Go to next question 👉</button>
      </div>
    </div>
  );
}
