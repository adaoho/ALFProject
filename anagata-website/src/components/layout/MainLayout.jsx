import React, { useEffect } from "react";
import SlideUp from "../animations/SlideUp";
import LoadingAnimation from "../../assets/images/loading-animation.json";
import Lottie from "lottie-react";

const MainLayout = ({ children, className, animate = true, loading }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-white w-screen flex flex-col justify-start items-start px-14">
          <div className="w-full flex justify-center mt-[8rem] items-center text-genmas-primary-100 gap-x-2">
            <Lottie
              animationData={LoadingAnimation}
              loop={true}
              className="size-24 -m-6 "
            />
            <h1 className="text-[1rem]">Please have a seat ...</h1>
          </div>
        </div>
      ) : animate ? (
        <>
          <SlideUp>
            <div
              className={`w-screen h-fit flex flex-col justify-start items-start ${className}`}
            >
              {children}
            </div>
          </SlideUp>
        </>
      ) : (
        <div
          className={`w-screen h-fit flex flex-col justify-start items-start ${className}`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default MainLayout;
