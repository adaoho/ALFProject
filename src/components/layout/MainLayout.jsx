import React, { useEffect } from "react";
import SlideUp from "../animations/SlideUp";
import SeoHelmet from "./SeoHelmet";

const MainLayout = ({
  children,
  className,
  animate = true,
  loading,
  title,
  description,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHelmet
        title={title || "Anagata Law Firm"}
        description={
          description ||
          "Delivering strategic legal solutions with global experience"
        }
      />

      {loading ? (
        <div className="bg-white w-screen flex flex-col justify-start items-start px-14">
          <div className="w-full flex justify-center mt-[8rem] items-center gap-x-2 flex-col gap-y-5">
            <div className="loader" />
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
