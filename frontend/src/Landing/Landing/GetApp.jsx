import React from "react";
import playstore from "./play_store.png";
import appstore from "./app_store.png";

const GetApp = () => {
  const bag2 =
    "https://assets.website-files.com/62cc07ca0720bd63152e1799/62cd16b4a5613c06cf9a0ff4_line-bg.svg";

  return (
    <div
      style={{ backgroundImage: `url(${bag2})`, backgroundSize: "cover" }}
      className="items-center justify-center flex flex-col py-20 bg-[#A0BDFF]"
    >
      <div>
        <h1 className="text-center text-3xl md:text-4xl font-bold leading-[60px]">
          Download CareAI App from Google Play or App Store
        </h1>
        <p className="font-medium italic text-center py-10">
          Streamline your positive journey with CareAI. Our app makes it simple
          to refresh
          <br /> your compliance tasks and provide you with the best possible
          needs
        </p>
        <div className="flex items-center justify-center gap-10">
          <img src={playstore} alt="playstore" className="h-10" />
          <img src={appstore} alt="appstore" className="h-10" />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
