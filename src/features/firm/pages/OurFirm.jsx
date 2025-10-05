import { AiOutlinePlayCircle, AiOutlineSend } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import Header from "../../../components/ui/Header";
import Footer from "../../../components/ui/Footer";
import { IconLogo } from "../../../assets/logo/export-assets";
import Aos from "aos";
import SeoHelmet from "../../../components/layout/SeoHelmet";
import TextReveal from "../../../components/animations/TextReveal";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
} from "../assets/export-assets";
import {
  Award1,
  Award2,
  Award3,
  Award5,
  Award6,
  Award7,
  Award8,
  Award9,
  BgContactUs,
} from "../../home/assets/export-assets";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import ContactUs from "../../../components/ui/ContactUs";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { BannerOurFirm } from "../../../assets/images/export-assets";
import MobileOurFirm from "./MobileOurFirm";

const firmImage = [
  {
    image: image3,
    text: "Our local Lawyers, with International reach and exposure, are well-equipped to help clients expand into established and emerging markets.",
  },
  {
    image: image4,
    text: "Anagata delivers client-centered legal excellence with transparency, integrity, and innovation, staying aligned with industry trends to remain relevant.",
  },
  {
    image: image5,
    text: "Our team structure ensures effective communication between you and your Partner directly, facilitating the achievement of your business goal.",
  },
];

const OurFirm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    return () => Aos.refresh();
  }, []);

  return (
    <>
      <Header />
      <MainLayout
        title={"Our Firm - Anagata Law Firm"}
        description={
          "Delivering strategic legal solutions with global experience"
        }
        className={"hidden lg:flex"}
      >
        {/* Main Header */}
        <div
          data-aos="fade-up"
          className="w-full bg-ang-prm-blue grid grid-cols-2 h-[495px]"
        >
          <div className="bg-ang-prm-blues flex w-full h-full justify-center items-start flex-col pl-24 pr-9">
            <div className="flex gap-x-4 items-center mb-10">
              <img src={IconLogo} alt="icon-anagata" className="h-6" />
              <h1 className="text-[24px] text-white">Our Firm</h1>
            </div>
            <TextReveal
              text={
                "At Anagata, we understand the complexities of today's business landscape."
              }
            />
          </div>
          <div className="bg-white flex w-full h-full justify-center items-center overflow-hidden relative">
            <div className="bg-ang-prm-text/20 absolute w-full h-full z-10"></div>
            <img
              src={BannerOurFirm}
              alt=""
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>
        </div>

        <div className="w-full px-24 grid grid-cols-2 h-fit overflow-hidden gap-x-12 pt-20">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            onClick={() => setOpenDialog(true)}
            className="relative h-[448px] transition-all group cursor-pointer"
          >
            <img
              src={image2}
              alt=""
              className="w-full h-full object-contain absolute group-hover:brightness-105 transition-all"
            />
            <div className="h-full w-full absolute flex justify-center items-center">
              <AiOutlinePlayCircle className="absolute text-white size-28 group-hover:text-ang-prm-red transition-all" />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col gap-y-5"
          >
            <div className="flex gap-x-4 items-center">
              <img src={IconLogo} alt="" className="h-5" />
              <h4>Anagata Law Firm</h4>
            </div>
            <h2 className="text-[42px] w-[90%]">
              With the combination of decades of experience, Anagata is ready to
              offer you solutions to all complex{" "}
              <u className="text-ang-prm-red">legal matters.</u>
            </h2>
            <h4 className="text-[18px]">
              Our team of experienced attorneys provides comprehensive legal
              strategies tailored to support.
            </h4>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex justify-center items-center w-full px-24 my-20"
        >
          <div className="h-[1px] w-full bg-gray-300"></div>
        </div>

        <div className="flex flex-col px-24 w-full h-fit mb-28">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex w-full justify-center items-center gap-x-4"
          >
            <img src={IconLogo} alt="icon-anagata" className="h-6" />
            <h1 className="text-ang-prm-black text-[24px] font-sans font-light">
              Accolades
            </h1>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="150"
            className="flex w-full items-center justify-center mt-12 flex-wrap gap-x-12 gap-y-5"
          >
            <img data-aos="fade-up" src={Award1} alt="" className="h-32" />
            <img
              data-aos="fade-up"
              data-aos-delay="100"
              src={Award2}
              alt=""
              className="h-32"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="200"
              src={Award3}
              alt=""
              className="h-32"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              src={Award5}
              alt=""
              className="h-40"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="400"
              src={Award7}
              alt=""
              className="h-36"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="500"
              src={Award6}
              alt=""
              className="h-32"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="500"
              src={Award8}
              alt=""
              className="h-36"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="500"
              src={Award9}
              alt=""
              className="h-36"
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="bg-ang-prm-red w-full h-fit flex flex-col px-24 py-16 gap-y-16"
        >
          <h4
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-[24px] text-center"
          >
            Our team of experienced attorneys provides comprehensive legal
            strategies tailored to support growth and navigate complex
            challenges. We serve a diverse clientele, from startups laying their
            legal foundations to multinational corporations requiring
            sophisticated counsel.
          </h4>

          <div className="flex w-full gap-x-4 justify-between">
            {firmImage?.map((data, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                  key={"firm" + index}
                  className="relative h-[478px] w-full"
                >
                  <img
                    src={data?.image}
                    alt=""
                    className="h-full w-full object-cover absolute rounded-3xl"
                  />
                  <div className="w-full h-full p-10 absolute rounded-3xl flex flex-col justify-between">
                    <img
                      src={IconLogo}
                      alt=""
                      className="size-10 object-cover"
                    />
                    <h2 className="text-white text-[20px] font-light">
                      {data?.text}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="50"
            className="h-[1px] w-full bg-white/40 my-8"
          ></div>

          {/* Contact Us */}
          <section
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-offset="200"
            id="section-contact-us"
            className="w-full h-[50rem] -mt-[27rem] pt-[25.8rem] hidden lg:block"
          >
            <div className="flex w-full h-[329px] rounded-3xl shadow-g-sm relative">
              <div className="absolute w-full h-full bg-black/30 rounded-3xl"></div>
              <img
                src={BgContactUs}
                alt="bg-contact-us"
                className="w-full h-full object-cover rounded-3xl"
              />

              <div className="absolute flex flex-col gap-y-2 w-full h-full items-center justify-center">
                <div className="flex gap-x-4 items-center w-full justify-center">
                  <img src={IconLogo} alt="icon-anagata" className="h-6" />
                  <h1 className="font-subtitle">Contact Us</h1>
                </div>
                <h1 className="font-bold text-[35px] text-white text-center leading-[3.5rem]">
                  Reach out today—your future problem <br /> solver is just a
                  call or click away.
                </h1>
                <div className="flex gap-x-2 mt-4">
                  <Button
                    onClick={() => {
                      navigate("/contact-us");
                    }}
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
        </div>
        <Footer />
      </MainLayout>

      <Dialog
        open={openDialog}
        handler={() => setOpenDialog(false)}
        className="bg-transparent w-full justify-center items-center flex"
      >
        <div className="bg-ang-prm-black w-fit p-3 rounded-3xl">
          <iframe
            src="https://drive.google.com/file/d/1IvmKvIm-DfPGawX9acfU3PgGvzV69Q2k/preview"
            width="720"
            height="405"
            allowFullScreen
            className="rounded-3xl"
            tabIndex="-1"
          ></iframe>
        </div>
      </Dialog>

      {/* Mobile Our Firm */}
      <MobileOurFirm />
    </>
  );
};

export default OurFirm;
