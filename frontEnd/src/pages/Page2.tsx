import React, { useState } from "react";
import { Link } from "react-router-dom";

function Page2() {
  const options = [
    "1 hrs",
    "2 hrs",
    "3 hrs",
    "4 hrs",
    "5 hrs",
    "6 hrs",
    "7 hrs",
    "8 hrs",
    "9 hrs",
    "10 hrs",
  ];

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleClick = () => {
    fetch("http://localhost:3000/api/sleepTime", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sleepTime: selectedOption }),
    });
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const isNextEnabled = selectedOption !== null;

  return (
    <div className="common-container">
      <h1 className="text-xl font-bold text-light-1 mb-4">
        How many hours do you sleep?
      </h1>
      <select
        className="w-full h-12 bg-dark-4 border-none text-light-4 placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
        value={selectedOption || ""}
        onChange={handleOptionChange}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {isNextEnabled && (
        <Link to="/page3">
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

export default Page2;
