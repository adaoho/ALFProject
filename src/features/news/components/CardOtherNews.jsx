import { Button } from "@material-tailwind/react";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CardOtherNews = ({ image, title, description, slug }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-y-6 w-full h-fit lg:h-[459px]">
      <img
        src={image}
        alt=""
        className="object-cover w-full h-[50%] rounded-2xl"
      />
      <div className="flex h-[18%] flex-col items-start justify-center">
        <h1
          dangerouslySetInnerHTML={{ __html: title }}
          className="text-[20px] font-bold text-ang-prm-blue truncate-threeline text-left"
        />
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: description }}
        className="text-[14px] text-gray-500 truncate-twoline"
      />

      <Button
        onClick={() => {
          navigate("/news-and-update/" + slug);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        children
        className="button-outline-red w-fit"
      >
        <h1>Read Article</h1>
        <BsArrowUpRight />
      </Button>
    </div>
  );
};

export default CardOtherNews;
