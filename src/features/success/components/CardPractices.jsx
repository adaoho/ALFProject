import React from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

const CardPractices = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* Card for Dekstop */}
      <div className="w-full h-[475px] relative hidden lg:flex justify-center group cursor-pointer">
        <div className="h-[85%] w-full overflow-hidden rounded-2xl">
          <img
            src={data?.image}
            alt=""
            className="h-full w-full rounded-2xl object-cover transition-all"
          />
        </div>
        <div className="bg-white transition-all w-[90%] shadow-g-sm absolute h-fit bottom-0 rounded-2xl flex flex-col gap-y-2 p-8">
          <h1
            dangerouslySetInnerHTML={{ __html: data?.title }}
            className="font-bold text-ang-prm-blue text-[20px] leading-8 truncate-threeline transition-all"
          />
          <h4
            dangerouslySetInnerHTML={{ __html: data?.description?.first_line }}
            className="text-[14px] text-gray-500 truncate-twoline transition-all font-light"
          />

          <Button
            children
            className="button-outline-red w-fit mt-3"
            onClick={() => navigate("/our-practice-areas/" + data?.slug)}
          >
            <h1>Discover More</h1>
            <BsArrowUpRight />
          </Button>
        </div>
      </div>

      {/* Card for Mobile */}
      <div className="w-full h-[400px] relative lg:hidden flex justify-center group cursor-pointer">
        <div className="h-[85%] w-full overflow-hidden rounded-2xl">
          <img
            src={data?.image}
            alt=""
            className="h-full w-full rounded-2xl object-cover transition-all"
          />
        </div>
        <div className="bg-white transition-all w-[90%] shadow-g-sm absolute h-fit bottom-0 rounded-2xl flex flex-col gap-y-2 p-8">
          <h1
            dangerouslySetInnerHTML={{ __html: data?.title }}
            className="font-bold text-ang-prm-blue text-[20px] leading-8 truncate-threeline transition-all"
          />
          <h4
            dangerouslySetInnerHTML={{ __html: data?.description?.first_line }}
            className="text-[14px] text-gray-500 truncate-threeline transition-all font-light"
          />

          <Button
            children
            className="button-outline-red w-fit mt-3"
            onClick={() => navigate("/our-practice-areas/" + data?.slug)}
          >
            <h1>Discover More</h1>
            <BsArrowUpRight />
          </Button>
        </div>
      </div>
    </>
  );
};

export default CardPractices;
