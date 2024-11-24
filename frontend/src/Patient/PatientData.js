import React, { useState, useEffect } from "react";
import { UserAuth } from "../FirebaseAuthContext/AuthContext";
import Record from "./Record";

const LendMoney = () => {
  const { user } = UserAuth();
  const [riskData, setRiskData] = useState([]);

  useEffect(() => {
    const fetchRiskData = async () => {
      try {
        const response = await fetch("/getRisk");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRiskData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching risk data:", error);
      }
    };

    fetchRiskData();
  }, []);

  return (
    <div className="p-5 bg-gradient-to-r from-blue-200 to-blue-100 h-full">
      <h1 className="text-5xl font-thin mb-5">Patient Data</h1>
      <div className="w-full h-full bg-[#e386ea] text-white grid grid-cols-5 gap-3 p-3 rounded-lg">
        <h1 className="text-xl  font-bold ">Applicant name</h1>
        <h1 className="text-xl  font-bold ">Sex</h1>
        <h1 className="text-xl  font-bold ">Age</h1>
        <h1 className="text-xl  font-bold ">IQ</h1>
        <h1 className="text-xl  font-bold ">Risk assessment</h1>
      </div>
      {riskData.map((data, index) => (
        <Record key={index} {...data} />
      ))}
    </div>
  );
};

export default LendMoney;
