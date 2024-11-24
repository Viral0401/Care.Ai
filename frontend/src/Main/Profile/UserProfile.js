// import React, { useState } from "react";
// import WhatDoYouSee from "./Images.jsx";
// import YesNo from "./Objective.jsx";
// import TellUsAboutYou from "./Subjective.jsx";
// import { UserAuth } from "../../FirebaseAuthContext/AuthContext";
// import robot from "./robot.gif";

// const UserProfile = () => {
//   const [activeTab, setActiveTab] = useState("YesNo");
//   const [answers, setAnswers] = useState({});
//   const { user } = UserAuth();

//   const handleAnswers = (question, componentAnswers) => {
//     setAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [question]: componentAnswers,
//     }));
//   };

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//   };

//   const LogAnswer = () => {
//     console.log(answers);
//   };

//   const tabContents = {
//     YesNo: <YesNo handleAnswers={handleAnswers} />,
//     TellUsAboutYou: <TellUsAboutYou handleAnswers={handleAnswers} />,
//     WhatDoYouSee: <WhatDoYouSee handleAnswers={handleAnswers} />,
//   };

//   const submitAnswers = async () => {
//     try {
//       const response = await fetch("/userData", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: user.email,
//           ...answers,
//         }),
//       });
//       if (response.ok) {
//         console.log("Answers submitted successfully!");
//         // Clear answers state or handle success as needed
//       } else {
//         console.error("Failed to submit answers");
//         // Handle failure as needed
//       }
//     } catch (error) {
//       console.error("Error submitting answers:", error);
//       // Handle error as needed
//     }
//   };

//   return (
//     <div className="w-full h-screen bg-gradient-to-br from-[#26309f] to-[#8126b9] text-white">
//       <div className="text-2xl px-10 pt-5 flex items-center justify-between">
//         <div className="flex justify-center items-center">
//           <img
//             src={robot}
//             alt="loading..."
//             className="w-20 bg-blend-soft-light"
//           />
//           <p className="font-semibold tracking-widest text-3xl">
//             Questionnaire
//           </p>
//         </div>
//         <p>{user && user.email}</p>
//       </div>

//       {/* Tabs for displaying user information */}
//       <div className="mb-10 mt-5 px-10">
//         <ul className="flex items-center justify-around text-lg border-b">
//           {Object.keys(tabContents).map((tabName) => (
//             <li
//               key={tabName}
//               onClick={() => handleTabClick(tabName)}
//               className={`py-2 cursor-pointer ${
//                 activeTab === tabName ? "border-b-4 border-white" : ""
//               }`}
//             >
//               {tabName === "YesNo"
//                 ? "Yes/No"
//                 : tabName === "TellUsAboutYou"
//                 ? "Tell Us About You"
//                 : "What Do You See?"}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Display the selected tab content */}
//       {tabContents[activeTab]}

//       {/* Centered button */}
//       <div className="flex justify-center">
//         <button
//           className="bg-white text-black hover:text-white hover:bg-blue-500 font-bold py-2 px-8 rounded mt-4"
//           onClick={LogAnswer}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

import React, { useState } from "react";
import WhatDoYouSee from "./Images.jsx";
import YesNo from "./Objective.jsx";
import TellUsAboutYou from "./Subjective.jsx";
import { UserAuth } from "../../FirebaseAuthContext/AuthContext";
import robot from "./robot.gif";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("YesNo");
  const [answers, setAnswers] = useState({});
  const { user } = UserAuth();

  const handleAnswers = (question, componentAnswers) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: componentAnswers,
    }));
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const LogAnswer = () => {
    console.log(answers);
  };

  const tabContents = {
    YesNo: <YesNo handleAnswers={handleAnswers} />,
    TellUsAboutYou: <TellUsAboutYou handleAnswers={handleAnswers} />,
    WhatDoYouSee: <WhatDoYouSee handleAnswers={handleAnswers} />,
  };

  const submitAnswers = async () => {
    try {
      const response = await fetch("/addUserData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          experiencingPhysicalSymptoms: answers.experiencingPhysicalSymptoms,
          glass: answers.glass,
          isolating: answers.isolating,
          man: answers.man,
          question1: answers.question1,
          question2: answers.question2,
          question3: answers.question3,
          usingSubstances: answers.usingSubstances,
        }),
      });
      if (response.ok) {
        console.log("Answers submitted successfully!");
        // Clear answers state or handle success as needed
      } else {
        console.error("Failed to submit answers");
        // Handle failure as needed
      }
    } catch (error) {
      console.error("Error submitting answers:", error);
      // Handle error as needed
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#26309f] to-[#8126b9] text-white">
      <div className="text-2xl px-10 pt-5 flex items-center justify-between">
        <div className="flex justify-center items-center">
          <img
            src={robot}
            alt="loading..."
            className="w-20 bg-blend-soft-light"
          />
          <p className="font-semibold tracking-widest text-3xl">
            Questionnaire
          </p>
        </div>
        <p>{user && user.email}</p>
      </div>

      {/* Tabs for displaying user information */}
      <div className="mb-10 mt-5 px-10">
        <ul className="flex items-center justify-around text-lg border-b">
          {Object.keys(tabContents).map((tabName) => (
            <li
              key={tabName}
              onClick={() => handleTabClick(tabName)}
              className={`py-2 cursor-pointer ${
                activeTab === tabName ? "border-b-4 border-white" : ""
              }`}
            >
              {tabName === "YesNo"
                ? "Yes/No"
                : tabName === "TellUsAboutYou"
                ? "Tell Us About You"
                : "What Do You See?"}
            </li>
          ))}
        </ul>
      </div>

      {/* Display the selected tab content */}
      {tabContents[activeTab]}

      {/* Centered button */}
      <div className="flex justify-center">
        <button
          className="bg-white text-black hover:text-white hover:bg-blue-500 font-bold py-2 px-8 rounded mt-4"
          onClick={submitAnswers}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
