import React from 'react';

function randomSort(array) {
  return array.sort( (a,b) => 0.5 - Math.random());
}

export default function Question({question}) {

  const answers = randomSort([
    ...question.incorrect_answers,
    question.correct_answer
  ])

  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />

      {answers.map((answer, index) => (
        <button key={index}>{answer}</button>
      ))}
    </div>
  );
}
