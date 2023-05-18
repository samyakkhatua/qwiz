const Question = ({
  currentQuestionIndex,
  currentQuestion,
  updateSubmission,
  submittedOption
}) => {
  return (
    <div>
      <h1 className="question">{currentQuestion.question}</h1>
      <div className="options">
        {currentQuestion.options.map((option) => (
          <label htmlFor={option.text}>
            <input
              type="radio"
              value={option.text}
              id={option.text}
              onChange={() =>
                updateSubmission(currentQuestionIndex, option.text)
              }
              name={currentQuestion.question}
              checked={option.text === submittedOption}
            />

            {option.text}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
