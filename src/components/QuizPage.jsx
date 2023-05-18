import { useState } from "react";
import { QuestionsData } from "../../QuestionData";
import Question from "./Question";
import NavButtons from "./NavButtons";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submittedData, setSubmittedData] = useState({});

  const updateSubmission = (index, value) => {
    setSubmittedData({ ...submittedData, [index]: value });
  };

  console.log(submittedData);

  return (
    <div className="quiz-box">
      <div className="box">
        <span>Timer: 90 seconds</span>
        <Question
          currentQuestionIndex={currentQuestionIndex}
          currentQuestion={QuestionsData[currentQuestionIndex]}
          updateSubmission={updateSubmission}
          submittedOption={submittedData[currentQuestionIndex]}
        />
        <NavButtons
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          currentQuestionIndex={currentQuestionIndex}
          submittedData={submittedData}
        />
      </div>
    </div>
  );
};

export default QuizPage;
