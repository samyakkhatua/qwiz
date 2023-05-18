import { useState } from "react"
import { QuestionsData } from "../../QuestionData"

const QuizPage = () => {
  console.log(QuestionsData)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <div className="quiz-box">
      <div className="box">
        <span>Timer: 90 seconds</span>
      </div>
    </div>
  )
}

export default QuizPage