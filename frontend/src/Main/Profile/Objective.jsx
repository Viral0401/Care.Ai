import React, { useState } from "react";

const Objective = ({ handleAnswers }) => {
  const [answers, setAnswers] = useState({
    isolating: "",
    usingSubstances: "",
    experiencingPhysicalSymptoms: "",
  });

  const handleRadioChange = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
    handleAnswers(question, answer);
  };

  return (
    <div className="w-full mx-auto max-w-3xl px-4 py-8 text-xl">
      <h1 className="text-2xl font-bold mb-4">
        Answer Yes or No to the following questions:
      </h1>
      <div className="mb-4">
        <p className="mb-2">
          Have you been isolating yourself from others or withdrawing from
          activities you used to enjoy?
        </p>
        <div className="flex items-center">
          <input
            type="radio"
            id="isolating-yes"
            name="isolating"
            value="Yes"
            checked={answers.isolating === "Yes"}
            onChange={() => handleRadioChange("isolating", "Yes")}
            className="mr-2"
          />
          <label htmlFor="isolating-yes">Yes</label>
          <input
            type="radio"
            id="isolating-no"
            name="isolating"
            value="No"
            checked={answers.isolating === "No"}
            onChange={() => handleRadioChange("isolating", "No")}
            className="ml-4 mr-2"
          />
          <label htmlFor="isolating-no">No</label>
        </div>
      </div>
      <div className="mb-4">
        <p className="mb-2">
          Have you been using alcohol or drugs to cope with your feelings?
        </p>
        <div className="flex items-center">
          <input
            type="radio"
            id="usingSubstances-yes"
            name="usingSubstances"
            value="Yes"
            checked={answers.usingSubstances === "Yes"}
            onChange={() => handleRadioChange("usingSubstances", "Yes")}
            className="mr-2"
          />
          <label htmlFor="usingSubstances-yes">Yes</label>
          <input
            type="radio"
            id="usingSubstances-no"
            name="usingSubstances"
            value="No"
            checked={answers.usingSubstances === "No"}
            onChange={() => handleRadioChange("usingSubstances", "No")}
            className="ml-4 mr-2"
          />
          <label htmlFor="usingSubstances-no">No</label>
        </div>
      </div>
      <div>
        <p className="mb-2">
          Have you been experiencing any physical symptoms, such as changes in
          appetite or sleep patterns?
        </p>
        <div className="flex items-center">
          <input
            type="radio"
            id="experiencingPhysicalSymptoms-yes"
            name="experiencingPhysicalSymptoms"
            value="Yes"
            checked={answers.experiencingPhysicalSymptoms === "Yes"}
            onChange={() =>
              handleRadioChange("experiencingPhysicalSymptoms", "Yes")
            }
            className="mr-2"
          />
          <label htmlFor="experiencingPhysicalSymptoms-yes">Yes</label>
          <input
            type="radio"
            id="experiencingPhysicalSymptoms-no"
            name="experiencingPhysicalSymptoms"
            value="No"
            checked={answers.experiencingPhysicalSymptoms === "No"}
            onChange={() =>
              handleRadioChange("experiencingPhysicalSymptoms", "No")
            }
            className="ml-4 mr-2"
          />
          <label htmlFor="experiencingPhysicalSymptoms-no">No</label>
        </div>
      </div>
    </div>
  );
};

export default Objective;
