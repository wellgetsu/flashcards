import "./QnAPage.css";
import { useState } from "react";

export default function QnAPage({ question, changeQuestions }) {
  const [isCorrect, setIsCorrect] = useState(-1);
  const [selectedAnswerId, setSelectedAnswerId] = useState();
  // console.log("is correct?", isCorrect);

  return (
    <section className="questionContainer">
      <h1 className="questionTitle">{question.title}</h1>
      <div className="answers">
        {question.answers.map((answer) => {
          // const answerColor =
          //   answer.id === selectedAnswerId
          //     ? isCorrect === 0
          //       ? "red"
          //       : "green"
          //     : undefined;
          const color = isCorrect === 0 ? "red" : "green";
          const answerColor =
            answer.id === selectedAnswerId ? color : undefined;
          return (
            <button
              disabled={isCorrect !== -1}
              key={answer.id}
              onClick={() => {
                const guess = answer.guess ? 1 : 0;
                setIsCorrect(guess); // запомнить выбор

                setSelectedAnswerId(answer.id); // запомнить id кнопки после клика
              }}
              style={{ backgroundColor: answerColor }}
              className="answerButton"
            >
              {answer.text}
            </button>
          );
        })}
      </div>
      <button
        className="nextQuestionButton"
        type="button"
        onClick={() => {
          changeQuestions(Boolean(isCorrect));
          setSelectedAnswerId(undefined);
          setIsCorrect(-1);
        }}
      >
        Следующий вопрос
      </button>
    </section>
  );
}
