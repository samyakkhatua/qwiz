import React from "react";

const NavButtons = ({ setCurrentQuestionIndex, currentQuestionIndex }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
      >
        Back
      </button>
      <button
        className="btn"
        onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default NavButtons;
