import React, { useState } from "react"
import QuestionCard from "./components/questionCard"
import { fetchQuizQuestions, Difficulty, QuestionState } from "./api"

type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

const TOTAL_QUESTIONS = 10

function App() {
  const [loading, setLoading] = useState(false)
  const [question, setQuestion] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setuserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameover, setGameover] = useState(true)

  console.log(question)

  const startTrivia = async function () {
    setLoading(true)
    setGameover(false)

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
    setQuestion(newQuestions)
    setScore(0)
    setuserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = function (e: React.MouseEvent<HTMLButtonElement>) {
    if (!gameover) {
      const answer = e.currentTarget.value
      const correct = question[number].correct_answer === answer
      if (correct) setScore((prev) => prev + 1)
      const answerObject = {
        question: question[number].question,
        answer,
        correct,
        correctAnswer: question[number].correct_answer
      }
      setuserAnswers((prev) => [...prev, answerObject])
    }
  }

  const nextQuestion = function () {}

  return (
    <div className="root">
      <h1>REACT QUIZ</h1>
      {gameover || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      ) : null}

      {!gameover ? <p className="score">Score:</p> : null}
      {loading && <p>Loading Questions...</p>}

      {!loading && !gameover && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={question[number].question}
          answers={question[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      {!gameover &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Questions
        </button>
      ) : null}
    </div>
  )
}

export default App
