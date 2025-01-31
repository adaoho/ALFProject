import { Button } from "@material-tailwind/react";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import IconAnagata from "../../assets/logo/icon_logo.png";
import { toast } from "sonner";
import { BgContactUs } from "../../features/home/assets/export-assets";

const ContactUs = () => {
  const onUnderDevelopment = () => {
    toast.info("This feature is currently in development 🚀");
  };
  return (
    <>
      <section
        id="section-contact-us"
        className="w-full h-[50rem] -mt-[27rem] pt-[25.8rem] px-24 pb-[28rem] hidden lg:block"
      >
        <div data-aos="fade-up" className="h-[1px] w-full bg-white mb-12"></div>

        <div className="flex w-full h-[329px] rounded-3xl shadow-g-sm relative">
          <div className="absolute w-full h-full bg-black/30 rounded-3xl"></div>
          <img
            src={BgContactUs}
            alt="bg-contact-us"
            className="w-full h-full object-cover rounded-3xl"
          />

          <div className="absolute flex flex-col gap-y-2 w-full h-full items-center justify-center">
            <div className="flex gap-x-4 items-center w-full justify-center">
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="font-subtitle">Contact Us</h1>
            </div>
            <h1 className="font-bold text-[35px] text-white text-center leading-[3.5rem]">
              Reach out today—your future problem <br /> solver is just a call
              or click away.
            </h1>
            <div className="flex gap-x-2 mt-4">
              <Button
                onClick={onUnderDevelopment}
                children
                className="button-red"
              >
                <div className="flex gap-x-2 items-center">
                  <h1>Contact Us</h1>
                  <AiOutlineSend className="size-4" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact Us */}
      <section
        id="section-contact-us"
        className="w-full h-fit pt-8 px-6 pb-20 flex lg:hidden"
      >
        <div className="flex w-full h-[320px] rounded-3xl shadow-g-sm relative">
          <div className="absolute w-full h-full bg-black/30 rounded-3xl"></div>
          <img
            src={BgContactUs}
            alt="bg-contact-us"
            className="w-full h-full object-cover rounded-3xl"
          />

          <div className="absolute flex flex-col gap-y-2 w-full h-full items-center justify-center p-4">
            <div className="flex gap-x-4 items-center w-full justify-center">
              <img src={IconAnagata} alt="icon-anagata" className="h-5" />
              <h1 className="text-white text-[16px]">Contact Us</h1>
            </div>
            <h1 className="font-bold text-[24px] text-white text-center leading-9">
              Reach out today—your future problem solver is just a call or click
              away.
            </h1>
            <div className="flex gap-x-2 mt-4">
              <Button
                onClick={onUnderDevelopment}
                children
                className="button-red"
              >
                <div className="flex gap-x-2 items-center">
                  <h1>Contact Us</h1>
                  <AiOutlineSend className="size-4" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
