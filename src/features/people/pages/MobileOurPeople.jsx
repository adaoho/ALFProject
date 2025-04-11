import Aos from "aos";
import React, { useEffect, useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import { IconLogo } from "../../../assets/logo/export-assets";
import TextReveal from "../../../components/animations/TextReveal";
import Footer from "../../../components/ui/Footer";
import { Button } from "@material-tailwind/react";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ContactUs from "../../../components/ui/ContactUs";
import { ImageTeamAnagata } from "../../../assets/images/export-assets";
import { dataKeyPeople } from "../../../constant/dataKeyPeople";
import { dataSupportPeople } from "../../../constant/dataSupportPeople";
import DrawerPeople from "../../../components/ui/DrawerPeople";
import { useDispatch } from "react-redux";
import { setDrawerPeople } from "../../../stores/mainSlices";

const MobileOurPeople = () => {
  const dispatch = useDispatch();

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
      <MainLayout
        title={"Our People - Anagata Law Firm"}
        description={
          "Delivering strategic legal solutions with global experience"
        }
        className={"flex lg:hidden"}
      >
        <div
          data-aos="fade-up"
          className="w-full bg-ang-prm-blue grid grid-cols-1 h-[640px]"
        >
          <div className="relative flex items-center justify-center w-full h-full overflow-hidden bg-white">
            <div className="absolute z-10 w-full h-full bg-ang-prm-text/20"></div>
            <img
              src={ImageTeamAnagata}
              alt=""
              className="object-cover w-full h-full grayscale contrast-125"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-full h-full pl-4 bg-ang-prm-blues">
            <div className="flex items-center mb-4 gap-x-3">
              <img src={IconLogo} alt="icon-anagata" className="h-4" />
              <h1 className="text-[16px] text-white">Our People</h1>
            </div>
            <TextReveal
              textSize={"text-[24px]"}
              text={
                "Our lawyers are renowned in their practice areas, each bringing."
              }
            />
          </div>
        </div>

        {/* Our Key People */}
        <section
          id="our-key-people"
          className="w-full px-4 flex py-[3rem] flex-col gap-y-7 pb-[8rem]"
        >
          <div
            data-aos="fade-up"
            data-aos-delay={"100"}
            className="flex flex-col pb-4 gap-y-8"
          >
            <div className="h-[1px] w-full bg-gray-300"></div>
            <h1 className="text-[32px] font-bold text-ang-prm-gray">
              Our Key Practices
            </h1>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 gap-y-16">
            {dataKeyPeople.map(
              (data, index) =>
                data?.seeProfile && (
                  <div
                    key={"people" + index}
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                    className="flex flex-col w-full h-fit gap-y-4"
                  >
                    <img
                      src={data?.photo}
                      alt=""
                      className="object-cover w-full h-[400px] rounded-3xl"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-bold text-ang-prm-gray text-[24px]">
                        {data.name}
                      </h1>
                      <h1 className="font-normal text-[20px] text-ang-prm-red truncate-oneline">
                        {data.title}
                      </h1>
                    </div>
                    <p className="text-gray-600 font-light text-[14px] truncate-fiveline leading-6 max-w-[95%]">
                      {data?.description}
                    </p>
                    <Button
                      onClick={() => {
                        dispatch(
                          setDrawerPeople({ drawer: true, indexPeople: index })
                        );
                      }}
                      className="mt-5 button-outline-red w-fit"
                    >
                      <h1>See full profile</h1>
                      <BsArrowUpRight />
                    </Button>
                  </div>
                )
            )}
          </div>
        </section>

        <section
          data-aos="fade-up"
          id="our-highly-motivated-people"
          className="w-full bg-gray-100 h-fit px-4 flex flex-col pt-[4rem] pb-[5rem]"
        >
          <div
            data-aos="fade-up"
            data-aos-delay={"100"}
            className="flex flex-col gap-y-8"
          >
            <h1 className="text-[32px] font-bold text-ang-prm-gray">
              Other Highly Motivated Individuals
            </h1>
            <div className="h-[1px] w-full bg-gray-400"></div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="grid w-full grid-cols-1 py-8 gap-y-4"
          >
            {dataSupportPeople?.map((data, index) => {
              return (
                data?.category === 1 && (
                  <div
                    key={"support-people-1" + index}
                    className="flex items-center gap-x-4"
                  >
                    <h1 className="text-[24px]">⁠{data?.name}</h1>
                    <h1>-</h1>
                    <h1 className="font-light">{data?.title}</h1>
                  </div>
                )
              );
            })}
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="w-full pb-2 pl-3"
          >
            <div className="h-[0.8px] w-full bg-gray-400"></div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="grid w-full grid-cols-1 py-8 gap-y-4"
          >
            {dataSupportPeople?.map((data, index) => {
              return (
                data?.category === 2 && (
                  <div
                    key={"support-people-1" + index}
                    className="flex flex-wrap items-center gap-x-4"
                  >
                    <h1 className="text-[24px]">⁠{data?.name}</h1>
                    <h1>-</h1>
                    <h1 className="font-light">{data?.title}</h1>
                  </div>
                )
              );
            })}
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="50"
            className="h-[1px] w-full bg-gray-400 my-8"
          ></div>

          {/* Contact Us */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex w-full mt-12 mb-8"
          >
            <ContactUs noPadding className={"-my-10"} />
          </div>
        </section>
        <Footer />
      </MainLayout>
      <DrawerPeople />
    </>
  );
};

export default MobileOurPeople;
