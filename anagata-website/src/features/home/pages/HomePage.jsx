import React from "react";
import UnderConstruction from "../../../assets/animations/animation-underconstruction.json";
import Lottie from "lottie-react";

const HomePage = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center flex-col -mt-8 p-12">
        <Lottie
          animationData={UnderConstruction}
          loop={true}
          className="size-[30rem] -m-4"
        />
        <h1 className="font-bold text-[2rem] leading-8 text-center">
          Something Good is under Development
        </h1>
        <h1 className="text-[9px] mt-2">Developed by: mantrarupa</h1>
      </div>
    </>
  );
};

export default HomePage;
