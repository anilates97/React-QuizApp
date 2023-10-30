import Options from "./Options";
import { useQuiz } from "../context/QuizContext";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        <Options />
      </div>
    </div>
  );
}

export default Question;
