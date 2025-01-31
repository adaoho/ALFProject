import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import LogoWhiteAnagata from "../../assets/logo/white_logo.png";
import { WhiteLogo } from "../../assets/logo/export-assets";

const Footer = () => {
  return (
    <>
      <section
        id="footer-content"
        className="w-full hidden lg:flex bg-ang-prm-black h-fit px-14 pb-12 pt-12"
      >
        <div className="flex gap-x-32 w-full text-white items-start justify-center">
          <div>
            <img
              src={LogoWhiteAnagata}
              alt=""
              className="h-11 mt-2 object-contain"
            />
          </div>

          <div className="flex flex-col gap-y-4">
            <h1 className="text-[#7F7F81] text-[18px]">Address</h1>
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col mt-2 w-[20rem]">
                <h1 className="text-ang-prm-red">Main Office (Jakarta)</h1>
                <p className="font-light">
                  Wisma Nugra Santana, 16th floor Jl. Jenderal Sudirman Kav.7-8,
                  Central Jakarta.
                </p>
              </div>
              <div className="flex flex-col w-[20rem]">
                <h1 className="text-ang-prm-red">
                  East Indonesian Desk (Surabaya)
                </h1>
                <p className="font-light">
                  Urban Office Building, Jl. Dr. Insinyur H. Soekarno No. 470,
                  Surabaya.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-[#7F7F81] text-[18px]">Contact Us</h1>
            <div className="w-fit mt-4">
              <h1 className="hover:underline transition-all cursor-pointer">
                contact.us@anagatalaw.com
              </h1>
              <div className="flex flex-col gap-y-2 mt-5">
                <div className="flex gap-x-2 items-center cursor-pointer hover:text-ang-prm-red transition-all">
                  <AiFillLinkedin className="size-6" />
                  LinkedIn
                </div>
                <div className="flex gap-x-2 items-center cursor-pointer hover:text-ang-prm-red transition-all">
                  <AiFillInstagram className="size-6" />
                  Instagram
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <section
        id="footer-content"
        className="w-full flex lg:hidden bg-ang-prm-black h-fit px-6 pb-12 pt-12"
      >
        <div className="flex flex-col gap-x-32 w-full text-white items-start justify-center gap-y-4">
          <div>
            <img src={WhiteLogo} alt="" className="h-11 mt-2 object-contain" />
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <h1 className="text-[#7F7F81] text-[16px] -mb-2">Address</h1>
            <div className="flex flex-col">
              <h1 className="text-ang-prm-red">Main Office (Jakarta)</h1>
              <p className="font-light">
                Wisma Nugra Santana, 16th floor Jl. Jenderal <br /> Sudirman
                Kav.7-8, Central Jakarta.
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-ang-prm-red">
                East Indonesian Desk (Surabaya)
              </h1>
              <p className="font-light">
                Urban Office Building, Jl. Dr. Insinyur <br /> H. Soekarno No.
                470, Surabaya.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="text-[#7F7F81] text-[16px] -mb-2">Contact Us</h1>
            <a
              href={"mailto:contact.us@anagatalaw.com"}
              className="hover:underline transition-all cursor-pointer text-[16px]"
            >
              contact.us@anagatalaw.com
            </a>
            <div className="flex flex-col gap-y-2">
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/anagata-law-firm/",
                    "__blank"
                  )
                }
                className="flex gap-x-2 items-center cursor-pointer hover:text-ang-prm-red transition-all"
              >
                <AiFillLinkedin className="size-6" />
                LinkedIn
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/anagata.lawfirm/",
                    "__blank"
                  )
                }
                className="flex gap-x-2 items-center cursor-pointer hover:text-ang-prm-red transition-all"
              >
                <AiFillInstagram className="size-6" />
                Instagram
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center items-center h-12 bg-ang-prm-gray text-white/30 font-light text-[14px]">
        ©2025 Anagata Law Firm
      </div>
    </>
  );
};

export default Footer;
