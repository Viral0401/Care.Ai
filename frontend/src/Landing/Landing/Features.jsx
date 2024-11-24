import React from "react";
import { AiFillInteraction } from "react-icons/ai";
import { IoIosTimer } from "react-icons/io";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import nhf from "./no_hidden_fees.png";

const Features = () => {
  const bag2 =
    "https://assets.website-files.com/62cc07ca0720bd63152e1799/62cd16b4a5613c06cf9a0ff4_line-bg.svg";

  const data = [
    {
      logo: <AiOutlineSafetyCertificate size={40} />,
      heading: "Comprehensive disorder report",
      content:
        "Empower yourself with knowledge to make informed decisions about your health and well-being.",
    },
    {
      logo: <IoIosTimer size={40} />,
      heading: "AI Chat Companion",
      content:
        "Engage in seamless conversational interactions with our text-to-text user chatbot, designed to provide instant responses and personalized assistance.",
    },
    {
      logo: <AiFillInteraction size={40} />,
      heading: "Assessments",
      content:
        "Assess your mental health, cognitive abilities, and emotional well-being with a variety of interactive assessments.",
    },
    {
      logo: nhf,
      heading: "Voice to Voice AI Companion",
      content:
        "Meet our innovative Voice-to-Voice Chatbot: Your Conversational AI Companion for Hands-Free Assistance and Instant Responses",
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${bag2})`, backgroundSize: "cover" }}
      className="h-auto flex flex-col items-center justify-center py-5"
    >
      <h1 className="text-5xl  font-bold text-center py-5">CareAI Features</h1>
      <p className="md:text-xl text-lg italic font-semibold text-gray-500 text-center my-5 px-10">
        Care AI revolutionizes healthcare by seamlessly integrating advanced
        machine learning technology with personalized care
        <br /> empowering individuals to take proactive control of their health
        journey.{" "}
      </p>

      <div className="grid md:grid-cols-4 grid-cols-1 place-items-center items-center justify-center m-10 ">
        {data.map((data) => (
          <div className="mx-5 p-6 bg-white rounded-2xl transition duration-700 hover:-translate-y-3 hover:bg-gradient-to-br from-[#d36cdb] to-[#407BFF] text-[[#d36cdb]] hover:text-white group shadow-2xl font-bold">
            {data.logo === nhf ? (
              <img src={data.logo} alt="features" className="h-12 " />
            ) : (
              <span>{data.logo}</span>
            )}
            <h1 className="text-2xl font-bold my-5">{data.heading}</h1>
            <p className=" text-lg font-bold italic text-gray-300 transition duration-700 group-hover:text-white">
              {data.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
