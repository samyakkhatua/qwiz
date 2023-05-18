import React from "react";
import { QuestionsData } from "../../QuestionData";

const NavButtons = ({
  setCurrentQuestionIndex,
  currentQuestionIndex,
  submittedData,
}) => {
  return (
    <div>
      <button
        className={`btn ${currentQuestionIndex === 0 && "disabled"}`}
        disabled={currentQuestionIndex === 0}
        onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
      >
        Back
      </button>

      <button
        className={`btn ${!submittedData[currentQuestionIndex] && "disabled"}`}
        disabled={!submittedData[currentQuestionIndex]}
        onClick={() => {
          if (currentQuestionIndex < QuestionsData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          } else {
            calculateScore();
          }
        }}
      >
        {currentQuestionIndex < QuestionsData.length - 1 ? "Next" : "Submit"}
      </button>
    </div>
  );
};

export default NavButtons;
