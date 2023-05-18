import React from "react";

const NavButtons = ({ setCurrentQuestionIndex, currentQuestionIndex, submittedData  }) => {
  return (
    <div>
      <button
        className={`btn ${currentQuestionIndex===0 && "disabled"}`}
        disabled={currentQuestionIndex === 0}
        onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
      >
        Back
      </button>
      <button
        className={`btn ${!submittedData[currentQuestionIndex] && "disabled"}`}
        disabled={!submittedData[currentQuestionIndex]}
        onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default NavButtons;
