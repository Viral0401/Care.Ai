// import React from "react";

// const Documents = ({ handleAnswers }) => {
//   return (
//     <form className="w-full mx-auto flex flex-col gap-10  px-9 mb-4 text-white text-xl ">
//       <div className="relative z-0 w-full mb-6">
//         <label className="block mb-2  font-medium " htmlFor="question1">
//           How do you feel about reaching out for support or talking to someone
//           about your mental health?
//         </label>
//         <textarea
//           id="question1"
//           name="question1"
//           rows="2"
//           className="block w-2/3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-407BFF focus:border-transparent p-3 text-sm"
//           placeholder="Enter your answer here..."
//           onChange={(e) => handleAnswers("question1", e.target.value)}
//         ></textarea>
//       </div>
//       <div className="relative z-0 w-full mb-6">
//         <label className="block mb-2 font-medium " htmlFor="question2">
//           Can you describe in a line your relationship with friends and family?
//         </label>
//         <textarea
//           id="question2"
//           name="question2"
//           rows="2"
//           className="block w-2/3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-407BFF focus:border-transparent p-3 text-sm"
//           placeholder="Enter your answer here..."
//           onChange={(e) => handleAnswers("question2", e.target.value)}
//         ></textarea>
//       </div>
//       <div className="relative z-0 w-full mb-6">
//         <label className="block mb-2 font-medium " htmlFor="question3">
//           Have you been experiencing any physical symptoms or discomfort?
//         </label>
//         <textarea
//           id="question3"
//           name="question3"
//           rows="2"
//           className="block w-2/3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-407BFF focus:border-transparent p-3 text-sm"
//           placeholder="Enter your answer here..."
//           onChange={(e) => handleAnswers("question3", e.target.value)}
//         ></textarea>
//       </div>
//     </form>
//   );
// };

// export default Documents;

import React from "react";

const Documents = ({ handleAnswers }) => {
  return (
    <form className="w-full mx-auto flex flex-col gap-10 items-center px-9 mb-4 text-white text-xl">
      <div className="relative z-0 w-full max-w-3xl">
        <label
          className="block mb-2 text-center font-medium"
          htmlFor="question1"
        >
          How do you feel about reaching out for support or talking to someone
          about your mental health?
        </label>
        <textarea
          id="question1"
          name="question1"
          rows="2"
          className="block w-full text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-407BFF focus:border-transparent p-3 text-sm"
          placeholder="Enter your answer here..."
          onChange={(e) => handleAnswers("question1", e.target.value)}
        ></textarea>
      </div>
      <div className="relative z-0 w-full max-w-3xl">
        <label
          className="block mb-2 text-center font-medium"
          htmlFor="question2"
        >
          Can you describe in a line your relationship with friends and family?
        </label>
        <textarea
          id="question2"
          name="question2"
          rows="2"
          className="block w-full text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-407BFF focus:border-transparent p-3 text-sm"
          placeholder="Enter your answer here..."
          onChange={(e) => handleAnswers("question2", e.target.value)}
        ></textarea>
      </div>
      <div className="relative z-0 w-full max-w-3xl">
        <label
          className="block mb-2 text-center font-medium"
          htmlFor="question3"
        >
          Have you been experiencing any physical symptoms or discomfort?
        </label>
        <textarea
          id="question3"
          name="question3"
          rows="2"
          className="block w-full text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-407BFF focus:border-transparent p-3 text-sm"
          placeholder="Enter your answer here..."
          onChange={(e) => handleAnswers("question3", e.target.value)}
        ></textarea>
      </div>
    </form>
  );
};

export default Documents;
