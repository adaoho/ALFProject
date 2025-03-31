import Aos from "aos";
import React, { useEffect } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import Header from "../../../components/ui/Header";
import { IconLogo } from "../../../assets/logo/export-assets";
import TextReveal from "../../../components/animations/TextReveal";
import Footer from "../../../components/ui/Footer";
import CardPractices from "../components/CardPractices";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ContactUs from "../../../components/ui/ContactUs";
import { BannerOurPractice } from "../../../assets/images/export-assets";
import { dataPracticeAreas } from "../../../constant/dataPracticeAreas";
import { dataSupportPractices } from "../../../constant/dataSupportPractices";
import MobileOurPractices from "./MobileOurPractices";

const OurPractices = () => {
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
        title={"Our Practice Areas - Anagata Law Firm"}
        description={
          "Delivering strategic legal solutions with global experience"
        }
        className={"hidden lg:flex"}
      >
        <div
          data-aos="fade-up"
          className="w-full bg-ang-prm-blue grid grid-cols-2 h-[495px]"
        >
          <div className="bg-ang-prm-blues flex w-full h-full justify-center items-start flex-col pl-24 pr-9">
            <div className="flex gap-x-4 items-center mb-10">
              <img src={IconLogo} alt="icon-anagata" className="h-6" />
              <h1 className="text-[24px] text-white">Our Practice Areas</h1>
            </div>
            <TextReveal
              text={
                "Anagata offers capability and resources as a full services firm."
              }
            />
          </div>
          <div className="bg-white flex w-full h-full justify-center items-center overflow-hidden relative">
            <div className="bg-ang-prm-text/20 absolute w-full h-full z-10"></div>
            <img
              src={BannerOurPractice}
              alt=""
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>
        </div>

        <section
          id="our-core-practices"
          className="w-full px-24 flex py-[3rem] flex-col gap-y-7 pb-[6rem]"
        >
          <div
            data-aos="fade-up"
            data-aos-delay={"100"}
            data-aos-offset="20"
            className="flex flex-col gap-y-8 pb-4"
          >
            <div className="h-[1px] w-full bg-gray-300"></div>
            <h1 className="text-[32px] font-bold text-ang-prm-gray">
              Our Core Practices
            </h1>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay={"100"}
            data-aos-offset="20"
            className="w-full grid grid-cols-2 gap-12"
          >
            {dataPracticeAreas.map((data, index) => {
              return <CardPractices key={"practices" + index} data={data} />;
            })}
          </div>
        </section>

        {/* Supporting Sectors */}
        <section
          data-aos="fade-up"
          id="supporting-sectors"
          className="w-full bg-ang-prm-red h-fit flex flex-col pt-[3.5rem] pb-[3.8rem]"
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-center w-full text-[42px] text-white"
          >
            Supporting Many Industries and Sectors
          </h1>

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="overflow-hidden whitespace-nowrap w-full flex flex-col mt-10"
          >
            {dataSupportPractices.map((dataList, index) => (
              <motion.p
                key={index}
                className="text-lg font-semibold flex items-center gap-x-3 py-1"
                animate={{
                  x: index % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
              >
                {[...dataList, ...dataList].map((data, dataIndex) => (
                  <span
                    className="text-white whitespace-normal text-nowrap text-[28px] h-fit py-5 px-8 border-white border-[1px] rounded-xl"
                    key={`supporting-${index}-${dataIndex}`}
                  >
                    {data}
                  </span>
                ))}
              </motion.p>
            ))}
          </div>

          <div
            data-aos="fade-up"
            className="w-full px-24 flex justify-center items-center my-20"
          >
            <div className="h-[1px] w-full bg-white/50"></div>
          </div>

          <div data-aos="fade-up" className="w-full">
            <ContactUs />
          </div>
        </section>

        <Footer />
      </MainLayout>

      {/* Mobile Our Practices */}
      <MobileOurPractices />
    </>
  );
};

export default OurPractices;
