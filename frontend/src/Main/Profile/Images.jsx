import React, { useState } from "react";
import man from "../../UserSide/images/man.jpg";
import glass from "../../UserSide/images/glass.jpg";

const ImageRecognition = ({ handleAnswers }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event, question) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    // Call handleAnswers to record the selected option and the question
    handleAnswers(question, selectedValue);
  };

  return (
    <div className="grid grid-cols-2 w-3/4 mx-auto">
      <div className="w-full mx-auto max-w-lg px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">
          What do you see in this image?
        </h1>
        <img
          src={glass}
          alt="Placeholder Image"
          className="mb-4 rounded-lg ml-10"
        />
        <form>
          <div className="flex items-center mb-2 ml-10">
            <input
              type="radio"
              id="option1"
              name="imageOptionGlass"
              value="optimistic"
              checked={selectedOption === "optimistic"}
              onChange={(event) => handleOptionChange(event, "glass")}
              className="mr-2"
            />
            <label htmlFor="option1">The glass is half full</label>
          </div>
          <div className="flex items-center mb-2 ml-10">
            <input
              type="radio"
              id="option2"
              name="imageOptionGlass"
              value="pessimistic"
              checked={selectedOption === "pessimistic"}
              onChange={(event) => handleOptionChange(event, "glass")}
              className="mr-2"
            />
            <label htmlFor="option2">The glass is half empty</label>
          </div>
        </form>
      </div>
      <div className="w-full mx-auto max-w-lg px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">
          What do you see in this image?
        </h1>
        <img
          src={man}
          alt="Placeholder Image"
          className="mb-4 rounded-lg ml-10"
        />
        <form>
          <div className="flex items-center mb-2 ml-10">
            <input
              type="radio"
              id="option3"
              name="imageOptionMan"
              value="angry"
              checked={selectedOption === "angry"}
              onChange={(event) => handleOptionChange(event, "man")}
              className="mr-2"
            />
            <label htmlFor="option3">The man is angry</label>
          </div>
          <div className="flex items-center mb-2 ml-10">
            <input
              type="radio"
              id="option4"
              name="imageOptionMan"
              value="sad"
              checked={selectedOption === "sad"}
              onChange={(event) => handleOptionChange(event, "man")}
              className="mr-2"
            />
            <label htmlFor="option4">The man is sad</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageRecognition;
