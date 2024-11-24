// import React, { useState } from "react";

// const YourComponent = () => {
//   const [inputData, setInputData] = useState({
//     features: {
//       age: "",
//       IQ: "",
//       "COH.B.theta.c.F7.s.O2": "",
//       "AB.D.beta.h.T3": "",
//       "COH.B.theta.e.Fz.h.T3": "",
//       "AB.F.gamma.p.P4": "",
//       "AB.A.delta.q.T6": "",
//       sex: "",
//       "COH.A.delta.c.F7.g.F8": "",
//       "COH.B.theta.h.T3.i.C3": "",
//       "COH.A.delta.a.FP1.e.Fz": "",
//       "AB.D.beta.q.T6": "",
//       "COH.A.delta.m.T5.r.O1": "",
//       "COH.A.delta.b.FP2.r.O1": "",
//       "COH.D.beta.m.T5.r.O1": "",
//     },
//   });

//   const LogInput = () => {
//     console.log(inputData);
//   };
//   const [prediction, setPrediction] = useState("");
//   const [error, setError] = useState(null);

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:5000/predict", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(inputData),
//       });
//       const data = await response.json();
//       if (data && data["specific.disorder"]) {
//         setPrediction(data["specific.disorder"]);
//       } else {
//         setError("Failed to get prediction");
//       }
//     } catch (error) {
//       setError("Error predicting: " + error.message);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputData({
//       ...inputData,
//       features: {
//         ...inputData.features,
//         [name]: value,
//       },
//     });
//   };

//   return (
//     <div className="bg-gradient-to-br from-[#407BFF] to-[#d36cdb] p-8  shadow-lg h-screen">
//       <h2 className="text-white text-lg font-semibold mb-4">Patients Data</h2>
//       <div className="grid grid-cols-3 gap-4 mb-4">
//         {/* Age */}
//         <div>
//           <label className="block text-white">Age</label>
//           <input
//             type="text"
//             name="age"
//             value={inputData.features.age}
//             onChange={handleChange}
//             className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
//           />
//         </div>
//         {/* IQ */}
//         <div>
//           <label className="block text-white">IQ</label>
//           <input
//             type="text"
//             name="IQ"
//             value={inputData.features.IQ}
//             onChange={handleChange}
//             className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
//           />
//         </div>
//         {/* COH.B.theta.c.F7.s.O2 */}
//         <div>
//           <label className="block text-white">COH.B.theta.c.F7.s.O2</label>
//           <input
//             type="text"
//             name="COH.B.theta.c.F7.s.O2"
//             value={inputData.features["COH.B.theta.c.F7.s.O2"]}
//             onChange={handleChange}
//             className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
//           />
//         </div>
//         {/* AB.D.beta.h.T3 */}
//         <div>
//           <label className="block text-white">AB.D.beta.h.T3</label>
//           <input
//             type="text"
//             name="AB.D.beta.h.T3"
//             value={inputData.features["AB.D.beta.h.T3"]}
//             onChange={handleChange}
//             className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
//           />
//         </div>
//         {/* COH.B.theta.e.Fz.h.T3 */}
//         <div>
//           <label className="block text-white">COH.B.theta.e.Fz.h.T3</label>
//           <input
//             type="text"
//             name="COH.B.theta.e.Fz.h.T3"
//             value={inputData.features["COH.B.theta.e.Fz.h.T3"]}
//             onChange={handleChange}
//             className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
//           />
//         </div>
//         {/* AB.F.gamma.p.P4 */}
//         <div>
//           <label className="block text-white">AB.F.gamma.p.P4</label>
//           <input
//             type="text"
//             name="AB.F.gamma.p.P4"
//             value={inputData.features["AB.F.gamma.p.P4"]}
//             onChange={handleChange}
//             className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
//           />
//         </div>
//         {/* AB.A.delta.q.T6 */}
//         <div>
//           <label className="block text-white">AB.A.delta.q.T6</label>
//           <input
//             type="text"
//             name="AB.A.delta.q.T6"
//             value={inputData.features["AB.A.delta.q.T6"]}
//             onChange={handleChange}
//             className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
//           />
//         </div>
//         {/* Sex */}
//         <div>
//           <label className="block text-white">Sex</label>
//           <input
//             type="text"
//             name="sex"
//             value={inputData.features.sex}
//             onChange={handleChange}
//             className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
//           />
//         </div>
//         {/* COH.A.delta.c.F7.g.F8 */}
//         <div>
//           <label className="block text-white">COH.A.delta.c.F7.g.F8</label>
//           <input
//             type="text"
//             name="COH.A.delta.c.F7.g.F8"
//             value={inputData.features["COH.A.delta.c.F7.g.F8"]}
//             onChange={handleChange}
//             className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
//           />
//         </div>
//         {/* COH.B.theta.h.T3.i.C3 */}
//         <div>
//           <label className="block text-white">COH.B.theta.h.T3.i.C3</label>
//           <input
//             type="text"
//             name="COH.B.theta.h.T3.i.C3"
//             value={inputData.features["COH.B.theta.h.T3.i.C3"]}
//             onChange={handleChange}
//             className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
//           />
//         </div>
//         {/* COH.A.delta.a.FP1.e.Fz */}
//         <div>
//           <label className="block text-white">COH.A.delta.a.FP1.e.Fz</label>
//           <input
//             type="text"
//             name="COH.A.delta.a.FP1.e.Fz"
//             value={inputData.features["COH.A.delta.a.FP1.e.Fz"]}
//             onChange={handleChange}
//             className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
//           />
//         </div>
//         {/* AB.D.beta.q.T6 */}
//         <div>
//           <label className="block text-white">AB.D.beta.q.T6</label>
//           <input
//             type="text"
//             name="AB.D.beta.q.T6"
//             value={inputData.features["AB.D.beta.q.T6"]}
//             onChange={handleChange}
//             className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
//           />
//         </div>
//         {/* COH.A.delta.m.T5.r.O1 */}
//         <div>
//           <label className="block text-white">COH.A.delta.m.T5.r.O1</label>
//           <input
//             type="text"
//             name="COH.A.delta.m.T5.r.O1"
//             value={inputData.features["COH.A.delta.m.T5.r.O1"]}
//             onChange={handleChange}
//             className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
//           />
//         </div>
//         {/* COH.A.delta.b.FP2.r.O1 */}
//         <div>
//           <label className="block text-white">COH.A.delta.b.FP2.r.O1</label>
//           <input
//             type="text"
//             name="COH.A.delta.b.FP2.r.O1"
//             value={inputData.features["COH.A.delta.b.FP2.r.O1"]}
//             onChange={handleChange}
//             className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
//           />
//         </div>
//         {/* COH.D.beta.m.T5.r.O1 */}
//         <div>
//           <label className="block text-white">COH.D.beta.m.T5.r.O1</label>
//           <input
//             type="text"
//             name="COH.D.beta.m.T5.r.O1"
//             value={inputData.features["COH.D.beta.m.T5.r.O1"]}
//             onChange={handleChange}
//             className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
//           />
//         </div>
//       </div>
//       <button
//         className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
//         onClick={LogInput}
//       >
//         Log Input
//       </button>
//       <button
//         className="bg-black text-white py-2 px-6 rounded-md"
//         onClick={handleSubmit}
//       >
//         Predict
//       </button>
//       {prediction && <p className="text-white">Prediction: {prediction}</p>}
//       {error && <p className="text-white">Error: {error}</p>}
//     </div>
//   );
// };

// export default YourComponent;

import React, { useState } from "react";

const YourComponent = () => {
  const [inputData, setInputData] = useState({
    features: [
      NaN, // age
      NaN, // IQ
      NaN, // COH.B.theta.c.F7.s.O2
      NaN, // AB.D.beta.h.T3
      NaN, // COH.B.theta.e.Fz.h.T3
      NaN, // AB.F.gamma.p.P4
      NaN, // AB.A.delta.q.T6
      NaN, // sex
      NaN, // COH.A.delta.c.F7.g.F8
      NaN, // COH.B.theta.h.T3.i.C3
      NaN, // COH.A.delta.a.FP1.e.Fz
      NaN, // AB.D.beta.q.T6
      NaN, // COH.A.delta.m.T5.r.O1
      NaN, // COH.A.delta.b.FP2.r.O1
      NaN, // COH.D.beta.m.T5.r.O1
    ],
  });

  const LogInput = () => {
    console.log(inputData);
  };
  const [prediction, setPrediction] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });
      const data = await response.json();
      if (data && data["specific.disorder"]) {
        setPrediction(data["specific.disorder"]);
      } else {
        setError("Failed to get prediction");
      }
    } catch (error) {
      setError("Error predicting: " + error.message);
    }
  };

  const handleChange = (e, index) => {
    const value = parseFloat(e.target.value);
    setInputData((prevInputData) => {
      const newFeatures = [...prevInputData.features];
      newFeatures[index] = isNaN(value) ? NaN : value; // Set to NaN if not a number
      return { ...prevInputData, features: newFeatures };
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#407BFF] to-[#d36cdb] p-8  shadow-lg h-screen">
      <h2 className="text-white text-lg font-semibold mb-4">Patients Data</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* Age */}
        <div>
          <label className="block text-white">Age</label>
          <input
            type="number"
            value={isNaN(inputData.features[0]) ? "" : inputData.features[0]}
            onChange={(e) => handleChange(e, 0)}
            className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>
        {/* IQ */}
        <div>
          <label className="block text-white">IQ</label>
          <input
            type="number"
            value={isNaN(inputData.features[1]) ? "" : inputData.features[1]}
            onChange={(e) => handleChange(e, 1)}
            className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>
        {/* COH.B.theta.c.F7.s.O2 */}
        <div>
          <label className="block text-white">COH.B.theta.c.F7.s.O2</label>
          <input
            type="number"
            value={isNaN(inputData.features[2]) ? "" : inputData.features[2]}
            onChange={(e) => handleChange(e, 2)}
            className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>
        {/* AB.D.beta.h.T3 */}
        <div>
          <label className="block text-white">AB.D.beta.h.T3</label>
          <input
            type="number"
            value={isNaN(inputData.features[3]) ? "" : inputData.features[3]}
            onChange={(e) => handleChange(e, 3)}
            className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>
        {/* COH.B.theta.e.Fz.h.T3 */}
        <div>
          <label className="block text-white">COH.B.theta.e.Fz.h.T3</label>
          <input
            type="number"
            value={isNaN(inputData.features[4]) ? "" : inputData.features[4]}
            onChange={(e) => handleChange(e, 4)}
            className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>
        {/* AB.F.gamma.p.P4 */}
        <div>
          <label className="block text-white">AB.F.gamma.p.P4</label>
          <input
            type="number"
            value={isNaN(inputData.features[5]) ? "" : inputData.features[5]}
            onChange={(e) => handleChange(e, 5)}
            className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>
        {/* AB.A.delta.q.T6 */}
        <div>
          <label className="block text-white">AB.A.delta.q.T6</label>
          <input
            type="number"
            value={isNaN(inputData.features[6]) ? "" : inputData.features[6]}
            onChange={(e) => handleChange(e, 6)}
            className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>
        {/* Sex */}
        <div>
          <label className="block text-white">Sex</label>
          <input
            type="number"
            value={isNaN(inputData.features[7]) ? "" : inputData.features[7]}
            onChange={(e) => handleChange(e, 7)}
            className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>
        {/* COH.A.delta.c.F7.g */}
        <div>
          <label className="block text-white">COH.A.delta.c.F7.g</label>
          <input
            type="number"
            value={isNaN(inputData.features[8]) ? "" : inputData.features[8]}
            onChange={(e) => handleChange(e, 8)}
            className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>
        {/* COH.B.theta.h.T3.i.C3 */}
        <div>
          <label className="block text-white">COH.B.theta.h.T3.i.C3</label>
          <input
            type="number"
            value={isNaN(inputData.features[9]) ? "" : inputData.features[9]}
            onChange={(e) => handleChange(e, 9)}
            className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>
        {/* COH.A.delta.a.FP1.e.Fz */}
        <div>
          <label className="block text-white">COH.A.delta.a.FP1.e.Fz</label>
          <input
            type="number"
            value={isNaN(inputData.features[10]) ? "" : inputData.features[10]}
            onChange={(e) => handleChange(e, 10)}
            className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>
        {/* AB.D.beta.q.T6 */}
        <div>
          <label className="block text-white">AB.D.beta.q.T6</label>
          <input
            type="number"
            value={isNaN(inputData.features[11]) ? "" : inputData.features[11]}
            onChange={(e) => handleChange(e, 11)}
            className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>
        {/* COH.A.delta.m.T5.r.O1 */}
        <div>
          <label className="block text-white">COH.A.delta.m.T5.r.O1</label>
          <input
            type="number"
            value={isNaN(inputData.features[12]) ? "" : inputData.features[12]}
            onChange={(e) => handleChange(e, 12)}
            className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>
        {/* COH.A.delta.b.FP2.r.O1 */}
        <div>
          <label className="block text-white">COH.A.delta.b.FP2.r.O1</label>
          <input
            type="number"
            value={isNaN(inputData.features[13]) ? "" : inputData.features[13]}
            onChange={(e) => handleChange(e, 13)}
            className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>
        {/* COH.D.beta.m.T5.r.O1 */}
        <div>
          <label className="block text-white">COH.D.beta.m.T5.r.O1</label>
          <input
            type="number"
            value={isNaN(inputData.features[14]) ? "" : inputData.features[14]}
            onChange={(e) => handleChange(e, 14)}
            className="bg-white border border-gray-300 rounded-md p-2 w-full text-black"
          />
        </div>
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
        onClick={LogInput}
      >
        Log Input
      </button>
      <button
        className="bg-black text-white py-2 px-6 rounded-md"
        onClick={handleSubmit}
      >
        Predict
      </button>
      {prediction && (
        <div className="mt-4 bg-green-200 text-green-800 rounded-md p-4">
          <p className="text-lg font-semibold">Prediction Result</p>
          <p className="mt-2">{prediction}</p>
        </div>
      )}

      {error && <p className="text-white">Error: {error}</p>}
    </div>
  );
};

export default YourComponent;
