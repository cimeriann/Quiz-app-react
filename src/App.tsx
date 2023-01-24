import React, { useState } from "react";
// Components
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions } from "./components/Api";
//Types
import { Difficulty } from "./components/Api";

const TOTAL_QUESTIONS = 10;
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {};
  const checkAnswer = async (e: React.MouseEvent<HTMLButtonElement>) => {};
  const displayNextQuestion = async () => {};
  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions</p>
      {/* <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={displayNextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
