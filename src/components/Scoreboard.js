import React, { useState, useEffect } from "react";

export default function Scoreboard({ isCorrect }) {
  // correct and wrong answers counter
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  // change counter on isCorrect change
  useEffect(() => {
    if (isCorrect) setCorrect((score) => score + 1);
    // exclude the null state
    else if (!isCorrect && isCorrect !== null) setWrong((score) => score + 1);
  }, [isCorrect]);

  return (
    <div className="scoreboard">
      <div className="wrong">
        <strong>{wrong}</strong>
        <span>wrong</span>
      </div>
      <div className="correct">
        <strong>{correct}</strong>
        <span>correct</span>
      </div>
    </div>
  );
}
