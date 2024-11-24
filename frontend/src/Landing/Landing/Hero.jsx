import React, { useState } from "react";
import Navbar from "./Navbar";
import img1 from "./hero/hero.png";

import { FaCheckCircle } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const Carousel = ({ textData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % textData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + textData.length) % textData.length
    );
  };

  return (
    <div className="text-xs w-[80%] flex items-center justify-between ">
      <div className="w-[75%]">
        <p>{textData[currentIndex]}</p>
      </div>
      <div className="flex w-[20%] items-center justify-between">
        <FaArrowCircleLeft
          onClick={handlePrev}
          size={30}
          className="bg-gradient-to-br from-[#d36cdb] to-[#407BFF]  rounded-full cursor-pointer"
        />
        <FaArrowCircleRight
          onClick={handleNext}
          size={30}
          className="bg-gradient-to-br from-[#d36cdb] to-[#407BFF]  rounded-full  cursor-pointer"
        />
      </div>
    </div>
  );
};

const Hero = () => {
  const text = [
    " A clinically validated AI and therapy combo that ensures you're never alone on your journey to well-being, wherever life takes you!",
  ];

  return (
    <div className="h-auto pb-20 bg-gradient-to-br from-blue-200 to-[#d36cdb]">
      <Navbar />

      <div className="md:flex w-full items-center justify-center mt-5 text-black">
        <div className="md:w-[60%] px-16">
          <div className="flex items-center justify-start text-[10px] gap-3">
            <p className="bg-[#F0F1EB] py-1 px-3 rounded-full font-bold text-gray-800">
              Compliance
            </p>
            <p className="bg-[#F0F1EB] py-1 px-3 rounded-full font-bold text-gray-800">
              Co-Operate
            </p>
          </div>

          <h1 className="md:text-[45px] text-5xl font-semibold pt-3 -ml-4 ">
            Empower Minds
            <span className="bg-gradient-to-br from-[#d36cdb] to-[#407BFF] px-4 rounded-full mx-5 text-gray-800">
              CareAI
            </span>{" "}
            <br />
            Nurturing Lives
          </h1>

          <p className="text-sm py-10 pr-40 font-bold my-5 text-gray-800">
            Welcome to Care AI, your companion for mental wellness. With
            cutting-edge technology, we empower individuals to prioritize their
            mental health, offering personalized support and resources to foster
            a balanced and resilient mindset
          </p>

          <div className="flex items-center gap-7 uppercase text-xs font-extrabold text-gray-800">
            <p className="flex items-center justify-start gap-1">
              <FaCheckCircle size={20} className="text-[#407BFF]" />
              Accesible 24/7
            </p>
            <p className="flex items-center justify-start gap-1">
              <FaCheckCircle size={20} className="text-[#407BFF]" />
              Secure
            </p>
            <p className="flex items-center justify-start gap-1">
              <FaCheckCircle size={20} className="text-[#407BFF]" />
              Effective
            </p>
          </div>

          <hr className=" border border-black my-3 w-[80%]" />

          <Carousel textData={text} />
        </div>

        <div className="md:w-[60%] flex justify-center">
          <img src={img1} alt="hero-1" className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
