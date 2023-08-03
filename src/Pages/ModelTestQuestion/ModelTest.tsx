import { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";

interface Option {
  option: string;
  correct?: boolean;
}

interface QuizData {
  question: string;
  explain: string;
  options: Option[];
}

const ModelTest: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [question: string]: string | null;
  }>({});
  const [data, setData] = useState<QuizData[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  useEffect(() => {
    fetch("model_test_question.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    question: string
  ) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [question]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    setQuizSubmitted(true);
  };

  const getAnswerStatus = (question: string, option: string): string => {
    if (!quizSubmitted || !selectedOptions[question]) {
      return "";
    }

    const selectedOption = selectedOptions[question];
    const correctOption = data
      .find((quiz) => quiz.question === question)
      ?.options.find((option) => option.correct);

    if (selectedOption === option) {
      return option === correctOption?.option ? "bg-green-300" : "bg-red-300";
    }

    return option === correctOption?.option ? "bg-green-300" : "";
  };

  return (
    <div>
      {/* banner seciton  */}
      <Banner />

      <div className="w-11/12 md:w-4/5 mx-auto text-left">
        {/* quiz question and answer section  */}
        <div className="text-center my-10">
          <h1 className="text-2xl font-bold">মডেল টেস্ট-১২০০১</h1>
          <h3 className="my-3">
            বিসিএস প্রিলিনিয়াম-২০২৩ নৈবিত্তিক প্রশ্নের উত্তর
          </h3>
          <p>সময়-৩০ মিনিট</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  items-center ">
          {data.map((quiz, index) => (
            <div
              key={index}
              className={`w-11/12 md:w-4/5 mx-auto bg-white rounded-lg my-4`}
            >
              <h1 className="text-xl font-bold mb-4">{`${index + 1}. ${
                quiz.question
              }`}</h1>
              <div className="space-y-2">
                {quiz.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center">
                    <input
                      type="radio"
                      id={`question-${index}-option-${optionIndex}`}
                      name={`question-${index}`} // Use the same name for each question
                      value={option.option}
                      checked={selectedOptions[quiz.question] === option.option}
                      onChange={(event) => handleChange(event, quiz.question)}
                      className={`mr-2 ${getAnswerStatus(
                        quiz.question,
                        option.option
                      )}`}
                      disabled={quizSubmitted}
                    />
                    <label htmlFor={`question-${index}-option-${optionIndex}`}>
                      {option.option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {!quizSubmitted && (
          <div className="text-center my-10">
            <button
              className="px-10 py-2 mt-4 bg-primary text-[#FFFFFF] rounded-lg"
              onClick={handleSubmit}
              disabled={
                Object.keys(selectedOptions).length !== data.length ||
                Object.values(selectedOptions).some((option) => option === null)
              }
            >
              Submit
            </button>
          </div>
        )}
        {quizSubmitted && (
          <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md my-4">
            <h1 className="text-xl font-bold mb-4">Quiz Results</h1>
            <div>
              {data.map((quiz, index) => (
                <div
                  key={index}
                  className={`p-2 ${getAnswerStatus(
                    quiz.question,
                    selectedOptions[quiz.question] || ""
                  )}`}
                >
                  <p className="mb-2">{quiz.question}</p>
                  <p>Selected Answer: {selectedOptions[quiz.question]}</p>
                  <p>Explanation: {quiz.explain}</p>
                  {quiz.options.map((option, optionIndex) => (
                    <p
                      key={optionIndex}
                      className={`pl-4 ${
                        option.correct ? "text-[#008000] font-bold" : ""
                      }`}
                    >
                      {option.option}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelTest;
