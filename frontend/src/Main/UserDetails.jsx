import React, { useState, useEffect } from "react";
import HorizontalBarChart from "./HorizontalBarChart";
import Items from "./Items";

const UserDetails = (props) => {
  const [totalScore, setTotalScore] = useState(0);
  const [riskType, setRiskType] = useState("");

  // Define text color classes based on risk type
  const riskTypeTextColor = {
    "High risk": "text-red-500",
    "Medium risk": "text-yellow-500",
    "Low risk": "text-green-500",
  };

  useEffect(() => {
    const { alpha, beta, gamma, delta, theta, highbeta } = props;

    // Convert string values to integers
    const alphaInt = parseInt(alpha, 10);
    const betaInt = parseInt(beta, 10);
    const gammaInt = parseInt(gamma, 10);
    const deltaInt = parseInt(delta, 10);
    const thetaInt = parseInt(theta, 10);
    const highbetaInt = parseInt(highbeta, 10);

    // Calculate total score by summing up all values
    const score =
      alphaInt + betaInt + gammaInt + deltaInt + thetaInt + highbetaInt;

    setTotalScore(score);

    // Determine risk type based on total score
    if (score < 400) {
      setRiskType("High risk");
    } else if (score >= 400 && score <= 100) {
      setRiskType("Medium risk");
    } else {
      setRiskType("Low risk");
    }
  }, [props]);

  return (
    <>
      <div className="flex justify-around items-center px-5">
        <section className="grid grid-cols-2 gap-x-20 gap-y-5">
          <Items
            key="highbeta"
            name="highbeta"
            value={props.highbeta}
            maxValue="200"
          />
          <Items key="Alpha" name="Alpha" value={props.alpha} maxValue="200" />
          <Items key="Beta" name="Beta" value={props.beta} maxValue="200" />
          <Items key="Gamma" name="Gamma" value={props.gamma} maxValue="200" />
          <Items key="Theta" name="Theta" value={props.theta} maxValue="200" />
          <Items key="Delta" name="Delta" value={props.delta} maxValue="200" />
        </section>
        <section className="">
          <HorizontalBarChart data={props} />
        </section>
      </div>
      <div className="bg-gradient-to-b from-[#407BFF] to-[#d36cdb] text-white h-1/4 rounded-md flex justify-around items-center p-3">
        <div className="grid grid-cols-2 gap-x-20 gap-y-5">
          <div>
            <h1 className="text-lg font-bold">Total score</h1>
            <h1 className=" font-bold text-xl">
              <span className="text-4xl">{totalScore}</span> / 1200
            </h1>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Risk type</h1>
            {/* Apply dynamic text color based on risk type */}
            <h1 className={`font-bold text-xl ${riskTypeTextColor[riskType]}`}>
              <span className="text-4xl">{riskType}</span>
            </h1>
          </div>
        </div>
        <ul>
          <li>
            <span className="font-bold">High risk: </span> 0 - 399
          </li>
          <li>
            <span className="font-bold">Medium risk: </span> 400 - 999
          </li>
          <li>
            <span className="font-bold">Low risk: </span> 1000 - 1200
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserDetails;
