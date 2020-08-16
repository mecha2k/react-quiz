import React from "react"

type Props = {
  question: string
  answers: string[]
  callback: any
  userAnswer: any
  questionNr: number
  totalQuestions: number
}

const questionCard: React.FC<Props> = function ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions
}) {
  return (
    <div>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button disabled={userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </div>
        ))}
      </div>
      Question Card
    </div>
  )
}

export default questionCard
