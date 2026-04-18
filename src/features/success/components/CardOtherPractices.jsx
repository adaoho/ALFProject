import { Button } from "@material-tailwind/react";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CardOtherPractices = ({ image, title, description, slug }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-y-6 w-full h-[400px]">
      <img
        src={image}
        alt=""
        className="object-cover w-full h-[50%] rounded-2xl"
      />
      <div className="flex h-[10%] items-center">
        <h1 className="text-[20px] font-bold text-ang-prm-blue truncate-threeline">
          {title}
        </h1>
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: description }}
        className="text-[14px] text-gray-500 truncate-twoline max-w-[95%]"
      />

      <Button
        onClick={() => {
          navigate("/our-practice-areas/" + slug);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        children
        className="button-outline-red w-fit h-[15%]"
      >
        <h1>Discover More</h1>
        <BsArrowUpRight />
      </Button>
    </div>
  );
};

export default CardOtherPractices;
