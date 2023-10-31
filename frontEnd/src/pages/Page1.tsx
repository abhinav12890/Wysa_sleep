import { useState } from "react";
import { Link } from "react-router-dom";

function Page1() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleClick = () => {
    console.log(selectedOption);
    fetch("http://localhost:3000/api/sleepStruggle", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sleepStruggle: selectedOption }),
    });
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const isNextEnabled = selectedOption !== null;

  return (
    <div className="common-container">
      <h1 className="text-xl font-bold text-light-1 mb-4">
        How long have you been struggling with your sleep?
      </h1>
      <div className="flex flex-col gap-2">
        <button
          className={`w-full h-12 bg-dark-4 text-light-4 flex justify-between items-center px-4 ${
            selectedOption === "Less than 2 weeks"
              ? "border border-primary-500"
              : ""
          }`}
          onClick={() => handleOptionClick("Less than 2 weeks")}
        >
          Less than 2 weeks
          {selectedOption === "option1" && (
            <div className="text-primary-500">&#10003;</div>
          )}
        </button>
        <button
          className={`w-full h-12 bg-dark-4 text-light-4 flex justify-between items-center px-4 ${
            selectedOption === "2 to 8 weeks" ? "border border-primary-500" : ""
          }`}
          onClick={() => handleOptionClick("2 to 8 weeks")}
        >
          2 to 8 weeks
          {selectedOption === "option2" && (
            <div className="text-primary-500">&#10003;</div>
          )}
        </button>
        <button
          className={`w-full h-12 bg-dark-4 text-light-4 flex justify-between items-center px-4 ${
            selectedOption === "More than 8 weeks"
              ? "border border-primary-500"
              : ""
          }`}
          onClick={() => handleOptionClick("More than 8 weeks")}
        >
          More than 8 weeks
          {selectedOption === "option3" && (
            <div className="text-primary-500">&#10003;</div>
          )}
        </button>
      </div>
      {isNextEnabled && (
        <Link to="/page2">
          <button
            onClick={handleClick}
            className="w-full h-12 bg-primary-500 hover:bg-primary-500 text-light-1 flex justify-center items-center gap-2"
          >
            Next
          </button>
        </Link>
      )}
    </div>
  );
}

export default Page1;
