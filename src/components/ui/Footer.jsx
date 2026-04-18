import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import LogoWhiteAnagata from "../../assets/logo/white_logo.png";
import { MantrarupaLogo, WhiteLogo } from "../../assets/logo/export-assets";

const Footer = () => {
  return (
    <>
      {/* Desktop Version */}
      <section id="footer-content" className="w-full hidden lg:flex bg-ang-prm-black h-fit px-14 pb-12 pt-12">
        <div className="flex gap-x-24 w-full text-white items-start justify-between">
          <div>
            <img src={LogoWhiteAnagata} alt="" className=" mt-2 object-contain w-[28rem] h-11" />
          </div>

          <div className="flex flex-col gap-y-4 text-[0.9rem]">
            <h1 className="text-[#7F7F81]">Address</h1>
            <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4 w-fit">
              <div className="flex flex-col w-fit items-start h-[8.5rem]">
                <h1 className="text-ang-prm-red">
                  Main Office <br /> (Jakarta)
                </h1>
                <p className="font-light">
                  <a
                    href="https://maps.app.goo.gl/p3KEegwZPK5SCAsDA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Wisma Nugra Santana, 16th floor Jl. Jenderal Sudirman Kav. 7-8, Central Jakarta.
                  </a>
                </p>
              </div>
              <div className="flex flex-col max-w-[90%] h-[8.5rem] items-start">
                <h1 className="text-ang-prm-red">
                  East Indonesian Desk <br /> (Surabaya)
                </h1>
                <p className="font-light">
                  <a
                    href="https://maps.google.com/?q=Urban+Office+Building,+Jl.+Dr.+Insinyur+H.+Soekarno+No.+470,+Surabaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Urban Office Building, Jl. Dr. Insinyur H. Soekarno No. 470, Surabaya.
                  </a>
                </p>
              </div>
              <div className="flex flex-col max-w-[90%] h-[8.5rem] items-start">
                <h1 className="text-ang-prm-red">
                  Singapore Desk <br /> (Singapore)
                </h1>
                <p className="font-light">
                  <a
                    href="https://maps.google.com/?q=Taxise+Asia+LLC,+61+Robinson+Road,+%2317-01A,+Singapore+068893"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Taxise Asia LLC, 61 Robinson Road, #17-01A, Singapore 068893.
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 text-[0.9rem]">
            <h1 className="text-[#7F7F81]">Contact Us</h1>
            <div className="w-fit mt-4">
              <h1 className="hover:underline transition-all cursor-pointer">contact.us@anagatalaw.com</h1>
              <div className="flex flex-col gap-y-2 mt-5">
                <div
                  onClick={() => window.open("https://www.linkedin.com/company/anagata-law-firm/", "_blank")}
                  className="flex gap-x-2 items-center cursor-pointer hover:text-ang-prm-red transition-all"
                >
                  <AiFillLinkedin className="size-6" />
                  LinkedIn
                </div>
                <div
                  onClick={() => window.open("https://www.instagram.com/anagata.lawfirm/", "_blank")}
                  className="flex gap-x-2 items-center cursor-pointer hover:text-ang-prm-red transition-all"
                >
                  <AiFillInstagram className="size-6" />
                  Instagram
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section id="footer-content" className="w-full flex lg:hidden bg-ang-prm-black h-fit px-6 pb-12 pt-12">
        <div className="flex flex-col gap-x-32 w-full text-white items-start justify-center gap-y-4">
          <div>
            <img src={WhiteLogo} alt="" className="h-9 mt-2 object-contain" />
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <h1 className="text-[#7F7F81] text-[16px] -mb-2">Address</h1>
            <div className="flex flex-col">
              <h1 className="text-ang-prm-red">Main Office (Jakarta)</h1>
              <p className="font-light">
                <a
                  href="https://maps.app.goo.gl/p3KEegwZPK5SCAsDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Wisma Nugra Santana, 16th floor Jl. Jenderal Sudirman Kav. 7-8, Central Jakarta.
                </a>
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-ang-prm-red">East Indonesian Desk (Surabaya)</h1>
              <p className="font-light">
                <a
                  href="https://maps.google.com/?q=Urban+Office+Building,+Jl.+Dr.+Insinyur+H.+Soekarno+No.+470,+Surabaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Urban Office Building, Jl. Dr. Insinyur H. Soekarno No. 470, Surabaya.
                </a>
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-ang-prm-red">Singapore Desk (Singapore)</h1>
              <p className="font-light">
                <a
                  href="https://maps.google.com/?q=Taxise+Asia+LLC,+61+Robinson+Road,+%2317-01A,+Singapore+068893"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Taxise Asia LLC, 61 Robinson Road, #17-01A, Singapore 068893.
                </a>
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
                onClick={() => window.open("https://www.linkedin.com/company/anagata-law-firm/", "_blank")}
                className="flex gap-x-2 items-center cursor-pointer hover:text-ang-prm-red transition-all"
              >
                <AiFillLinkedin className="size-6" />
                LinkedIn
              </div>
              <div
                onClick={() => window.open("https://www.instagram.com/anagata.lawfirm/", "_blank")}
                className="flex gap-x-2 items-center cursor-pointer hover:text-ang-prm-red transition-all"
              >
                <AiFillInstagram className="size-6" />
                Instagram
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full hidden lg:flex justify-between px-24 items-center h-14 bg-ang-prm-gray text-white/30 font-light text-[14px]">
        ©{new Date().getFullYear()} Anagata Law Firm
        <h2>
          Digital Experience by{" "}
          <a
            className="font-bold hover:underline transition-all"
            href="https://www.instagram.com/mantrarupa/"
            target="_blank"
          >
            Mantrarupa
          </a>
        </h2>
      </div>

      <div className="w-full flex lg:hidden flex-col justify-center items-start px-5 h-fit py-4 bg-ang-prm-gray text-white/30 font-light text-[14px]">
        <h2>©{new Date().getFullYear()} Anagata Law Firm</h2>
        <h2>
          Digital Experience by{" "}
          <a
            className="font-bold hover:underline transition-all"
            href="https://www.instagram.com/mantrarupa/"
            target="_blank"
          >
            Mantrarupa
          </a>
        </h2>
      </div>
    </>
  );
};

export default Footer;
