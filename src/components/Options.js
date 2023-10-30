import { useQuiz } from "../context/QuizContext";

function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;
  return (
    <>
      {question.options.map((option, index) => (
        <button
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          className={`btn btn-option ${index === answer ? "answer" : ""}
          ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }
          `}
          key={option}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </>
  );
}

export default Options;
