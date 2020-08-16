import React from "react"
import { AnswerObject } from "../App"
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles"

type Props = {
  question: string
  answers: string[]
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void
  userAnswer: AnswerObject | undefined
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
    <Wrapper>
      <div>
        <p className="number">
          Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }}></p>
        <div>
          {answers.map((answer) => (
            <ButtonWrapper
              key={answer}
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}>
              <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </button>
            </ButtonWrapper>
          ))}
        </div>
        Question Card
      </div>
    </Wrapper>
  )
}

export default questionCard
