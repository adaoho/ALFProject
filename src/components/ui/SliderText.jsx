import React from "react";
import { IconLogo } from "../../assets/logo/export-assets";

const SliderText = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-y-4 px-8 pt-8 lg:px-24 lg:pt-16">
      <div className="flex gap-x-4 items-center">
        <img src={IconLogo} alt="icon-anagata" className="h-6" />
        <h1 className="text-[14px] lg:text-[24px] text-white">{subtitle}</h1>
      </div>

      <p
        dangerouslySetInnerHTML={{ __html: title }}
        className="text-[42px] text-white font-bold max-w-[80%] truncate-two-hidden hidden lg:block"
      />
      <p
        dangerouslySetInnerHTML={{ __html: title }}
        className="text-[24px] text-white font-bold max-w-[90%] truncate-fiveline-hidden block lg:hidden -mt-0.5"
      />
    </div>
  );
};

export default SliderText;
