import { useEffect, useState, useCallback } from "react";

export default function useTrivia() {
  const [question, setQuestion] = useState(null);
  const [category, setCategory] = useState("any");

  // fetch new question using an API
  const getQuestion = useCallback(() => {
    let url = "https://opentdb.com/api.php?amount=1";
    // append a category if it's not the default option (any)
    if (category !== "any") url += `&category=${category}`;

    fetch(url)
      .then((res) => res.json())
      // question object will contain all the data from the server
      .then((data) => setQuestion(data.results[0]));
  }, [category]);

  // fetch new question if the category changes
  useEffect(() => {
    getQuestion();
  }, [getQuestion, category]);

  return { question, getQuestion, category, setCategory };
}
