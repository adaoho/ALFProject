import Aos from "aos";
import React, { useEffect } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import Header from "../../../components/ui/Header";
import { IconLogo } from "../../../assets/logo/export-assets";
import TextReveal from "../../../components/animations/TextReveal";
import Footer from "../../../components/ui/Footer";
import { Button } from "@material-tailwind/react";
import { BsArrowUpRight } from "react-icons/bs";
import ContactUs from "../../../components/ui/ContactUs";
import { ImageTeamAnagata } from "../../../assets/images/export-assets";
import MobileOurPeople from "./MobileOurPeople";
import DrawerPeople from "../../../components/ui/DrawerPeople";
import { useDispatch } from "react-redux";
import { setDrawerPeople } from "../../../stores/mainSlices";
import { dataKeyPeople } from "../../../constant/dataKeyPeople";
import { dataSupportPeople } from "../../../constant/dataSupportPeople";

const OurPeople = () => {
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
      <Header />
      <MainLayout
        title={"Our People - Anagata Law Firm"}
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
              <h1 className="text-[24px] text-white">Our People</h1>
            </div>
            <TextReveal
              text={
                "Our lawyers are renowned in their practice areas, each bringing."
              }
            />
          </div>
          <div className="bg-white flex w-full h-full justify-center items-center overflow-hidden relative">
            <div className="bg-ang-prm-text/20 absolute w-full h-full z-10"></div>
            <img
              src={ImageTeamAnagata}
              alt=""
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>
        </div>

        {/* Our Key People */}
        <section
          id="our-key-people"
          className="w-full px-24 flex py-[3rem] flex-col gap-y-7 pb-[8rem]"
        >
          <div
            data-aos="fade-up"
            data-aos-delay={"100"}
            className="flex flex-col gap-y-8 pb-4"
          >
            <div className="h-[1px] w-full bg-gray-300"></div>
            <h1 className="text-[32px] font-bold text-ang-prm-gray">
              Our Key Practices
            </h1>
          </div>

          <div className="w-full grid grid-cols-3 gap-8 gap-y-16">
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
                    <p className="text-gray-600 text-[16px] truncate-fiveline leading-6">
                      {data?.description}
                    </p>
                    <Button
                      onClick={() => {
                        dispatch(
                          setDrawerPeople({ drawer: true, indexPeople: index })
                        );
                      }}
                      className="button-outline-red w-fit mt-5"
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
          className="w-full bg-gray-100 h-fit px-24 flex flex-col pt-[6rem] pb-[5rem]"
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
            className="w-full grid grid-cols-3 pl-3 py-14 gap-y-8"
          >
            {dataSupportPeople?.map((data, index) => {
              return (
                data?.category === 1 && (
                  <div
                    key={"support-people-1" + index}
                    className="flex flex-col gap-y-2"
                  >
                    <h1 className="text-[24px]">⁠{data?.name}</h1>
                    <h1 className="font-light">Of Counsel</h1>
                  </div>
                )
              );
            })}
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="w-full pl-3 pb-2"
          >
            <div className="h-[0.8px] w-full bg-gray-400"></div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="w-full grid grid-cols-3 pl-3 py-14 gap-y-8"
          >
            {dataSupportPeople?.map((data, index) => {
              return (
                data?.category === 2 && (
                  <div
                    key={"support-people-2" + index}
                    className="flex flex-col gap-y-2"
                  >
                    <h1 className="text-[24px]">{data?.name}</h1>
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
            <ContactUs noPadding />
          </div>
        </section>

        <Footer />
      </MainLayout>

      <DrawerPeople />

      {/* Mobile for Our People */}
      <MobileOurPeople />
    </>
  );
};

export default OurPeople;
