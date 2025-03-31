import React from "react";

const CardNotablePractice = ({ title, description }) => {
  return (
    <div className="snap-start border-ang-prm-text/20 h-[300px] w-[284px] flex flex-col justify-between border-[1px] rounded-2xl p-8 gap-y-4">
      <h3 className="text-[20px] font-bold text-ang-prm-blue max-h-[70%] overflow-scroll capitalize">
        {title}
      </h3>
      <div className="text-[14px] leading-6 text-gray-600 max-h-[50%] overflow-scroll">
        {description}
      </div>
    </div>
  );
};

export default CardNotablePractice;
