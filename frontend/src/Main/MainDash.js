// import React, { useState, useEffect } from "react";
// import DataTable from "./DataTable";
// import UserDetails from "./UserDetails";
// import { UserAuth } from "../FirebaseAuthContext/AuthContext";

// const MainDash = () => {
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/getUserData");
//         if (response.ok) {
//           const data = await response.json();
//           setUserData(data);
//         } else {
//           console.error("Failed to fetch user data");
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Patient Assessment Questions</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white shadow-md p-6 rounded-md">
//           <h2 className="text-xl font-semibold mb-4">
//             Mental Health Questions
//           </h2>
//           <div>
//             <h3 className="text-lg font-medium mb-2">
//               Have you been isolating yourself from others or withdrawing from
//               activities you used to enjoy?
//             </h3>
//             {/* Answer field or options can be added here */}
//           </div>
//           <div>
//             <h3 className="text-lg font-medium mb-2">
//               Have you been using alcohol or drugs to cope with your feelings?
//             </h3>
//             {/* Answer field or options can be added here */}
//           </div>
//           <div>
//             <h3 className="text-lg font-medium mb-2">
//               How do you feel about reaching out for support or talking to
//               someone about your mental health?
//             </h3>
//             {/* Answer field or options can be added here */}
//           </div>
//           <div>
//             <h3 className="text-lg font-medium mb-2">
//               Can you describe in a line your relationship with friends and
//               family?
//             </h3>
//             {/* Answer field or options can be added here */}
//           </div>
//         </div>
//         <div className="bg-white shadow-md p-6 rounded-md">
//           <h2 className="text-xl font-semibold mb-4">
//             Physical Health Questions
//           </h2>
//           <div>
//             <h3 className="text-lg font-medium mb-2">
//               Have you been experiencing any physical symptoms or discomfort?
//             </h3>
//             {/* Answer field or options can be added here */}
//           </div>
//           <div>
//             <h3 className="text-lg font-medium mb-2">
//               What do you see in this image (glass)?
//             </h3>
//             {/* Answer field or options can be added here */}
//           </div>
//           <div>
//             <h3 className="text-lg font-medium mb-2">
//               What do you see in this image (man)?
//             </h3>
//             {/* Answer field or options can be added here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainDash;

import React, { useState, useEffect } from "react";

const MainDash = () => {
  const [userData, setUserData] = useState([]);
  const [expandedUser, setExpandedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/getUserData");
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleUserDetails = (email) => {
    setExpandedUser(email === expandedUser ? null : email);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Patient Assessment Questions</h1>
      {userData.map((user) => (
        <div
          key={user.email}
          className="bg-white shadow-md p-6 rounded-md mb-6"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-4">
              User Email: {user.email}
            </h2>
            <button
              className="text-blue-500"
              onClick={() => toggleUserDetails(user.email)}
            >
              {expandedUser === user.email ? "Hide Details" : "Show Details"}
            </button>
          </div>
          {expandedUser === user.email && (
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Question 1</h3>
                <p>
                  Have you been isolating yourself from others or withdrawing
                  from activities you used to enjoy?
                </p>
                {user.isolating}
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Question 2</h3>
                <p>
                  Have you been using alcohol or drugs to cope with your
                  feelings?
                </p>
                {user.usingSubstances}
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Question 3</h3>
                <p>
                  Have you been experiencing any physical symptoms, such as
                  changes in appetite or sleep patterns?
                </p>
                {user.experiencingPhysicalSymptoms}
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Question 4</h3>
                <p>
                  How do you feel about reaching out for support or talking to
                  someone about your mental health?
                </p>
                {user.question1}
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Question 5</h3>
                <p>
                  Can you describe in a line your relationship with friends and
                  family?
                </p>
                {user.question2}
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Question 6</h3>
                <p>
                  Have you been experiencing any physical symptoms or
                  discomfort?
                </p>
                {user.question3}
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Question 7</h3>
                <p>What do you see in this image (glass)?</p>
                {user.glass}
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Question 8</h3>
                <p>What do you see in this image (man)?</p>
                {user.man}
              </div>
              {/* Repeat for other questions */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MainDash;
