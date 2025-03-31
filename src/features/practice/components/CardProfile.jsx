import { Button } from "@material-tailwind/react";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { PlacholderImage } from "../../../assets/images/export-assets";

const CardProfile = ({ image, name, title, onClick, data }) => {
  return (
    <div className="w-full flex gap-x-5 h-fit">
      <img
        src={image || PlacholderImage}
        alt=""
        className="size-36 object-cover rounded-2xl"
      />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-y-1">
          <h2 className="font-bold text-[18px] lg:text-[24px] text-ang-prm-blue">
            {name}
          </h2>
          <h2 className="text-[14px] text-gray-600">{title}</h2>
        </div>

        <Button
          onClick={onClick}
          children
          className={`${
            data?.seeProfile ? "button-outline-red" : "button-disabled"
          }  w-fit`}
          disabled={data?.seeProfile ? false : true}
        >
          <h1>See full profile</h1>
          <BsArrowUpRight />
        </Button>
      </div>
    </div>
  );
};

export default CardProfile;
