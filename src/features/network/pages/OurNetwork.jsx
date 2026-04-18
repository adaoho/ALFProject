import Aos from "aos";
import React, { useEffect } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import Header from "../../../components/ui/Header";
import { IconLogo } from "../../../assets/logo/export-assets";
import TextReveal from "../../../components/animations/TextReveal";
import Footer from "../../../components/ui/Footer";
import ContactUs from "../../../components/ui/ContactUs";
import { dataNetwork } from "../../../constant/dataNetwork";
import { image } from "../assets/export-assets";
import { Button } from "@material-tailwind/react";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { imageDummy } from "../../../assets/dummy/export-assest";

const OurNetwork = () => {
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
        description={"Delivering strategic legal solutions with global experience"}
        className={"hidden lg:flex"}
      >
        <div data-aos="fade-up" className="w-full bg-ang-prm-blue grid grid-cols-2 h-[495px]">
          <div className="bg-ang-prm-blues flex w-full h-full justify-center items-start flex-col pl-24 pr-9">
            <div className="flex gap-x-4 items-center mb-10">
              <img src={IconLogo} alt="icon-anagata" className="h-6" />
              <h1 className="text-[24px] text-white">Our Collaborative Partnership</h1>
            </div>
            <TextReveal text={"Strengthening global partnerships through proven collaborative commitment."} />
          </div>
          <div className="bg-white flex w-full h-full justify-center items-center overflow-hidden relative">
            <div className="bg-ang-prm-text/20 absolute w-full h-full z-10"></div>
            <img src={image.HeroAsset} alt="" className="w-full h-full object-cover grayscale contrast-125" />
          </div>
        </div>

        <section id="our-core-practices" className="w-full px-24 flex py-[3rem] flex-col gap-y-7 pb-[6rem]">
          <div data-aos="fade-up" data-aos-delay={"100"} data-aos-offset="20" className="flex flex-col gap-y-8 pb-4">
            <div className="h-[1px] w-full bg-gray-300"></div>
            <h1 className="text-[32px] font-bold text-ang-prm-gray">Our Strong Collaboration</h1>
          </div>

          <div className="flex flex-col gap-y-12">
            {dataNetwork.map((network, index) => {
              const isOdd = index % 2 !== 0;

              return (
                <div key={network.id} data-aos="fade-up" data-aos-delay={index * 100} className="grid grid-cols-2 gap-x-12">
                  {isOdd ? (
                    <>
                      {/* Odd index - Text on left, Image on right */}
                      <div className="flex flex-col gap-y-2 items-start justify-between">
                        <div className="flex flex-col gap-y-5">
                          <h1
                            dangerouslySetInnerHTML={{ __html: network.name }}
                            className="font-bold text-ang-prm-blue text-[1.8rem] leading-8 truncate-threeline transition-all"
                          />
                          <h4
                            dangerouslySetInnerHTML={{
                              __html: network.description_list || network.description,
                            }}
                            className="text-[1.1rem] text-gray-900 transition-all font-light leading-relaxed"
                          />
                        </div>

                        <Button
                          children
                          className="button-outline-red w-fit mt-3"
                          onClick={() => navigate("/our-network/" + network.slug)}
                        >
                          <h1>Discover More</h1>
                          <BsArrowUpRight />
                        </Button>
                      </div>

                      {typeof network.image === "string" ? (
                        <img
                          src={image[network.image]}
                          alt={network.name}
                          className="rounded-lg object-cover w-full h-[20rem]"
                        />
                      ) : (
                        <img src={network.image} alt={network.name} className="rounded-lg object-cover w-full h-[20rem]" />
                      )}
                    </>
                  ) : (
                    <>
                      {/* Even index - Image on left, Text on right */}
                      <img
                        src={imageDummy.NetworkDummy}
                        alt={network.name}
                        className="rounded-lg object-cover w-full h-[20rem]"
                      />
                      <div className="flex flex-col gap-y-2 items-start justify-between">
                        <div className="flex flex-col gap-y-5">
                          <h1
                            dangerouslySetInnerHTML={{ __html: network.name }}
                            className="font-bold text-ang-prm-blue text-[1.8rem] leading-8 truncate-threeline transition-all"
                          />
                          <h4
                            dangerouslySetInnerHTML={{
                              __html: network.description_list || network.description,
                            }}
                            className="text-[1.1rem] text-gray-900 transition-all font-light leading-relaxed"
                          />
                        </div>

                        <Button
                          children
                          className="button-outline-red w-fit mt-3"
                          onClick={() => navigate("/our-network/" + network.slug)}
                        >
                          <h1>Discover More</h1>
                          <BsArrowUpRight />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Supporting Sectors */}
        <section
          data-aos="fade-up"
          id="supporting-sectors"
          className="w-full bg-ang-prm-red h-fit flex flex-col py-[3.8rem]"
        >
          <div data-aos="fade-up" className="w-full">
            <ContactUs />
          </div>
        </section>

        <Footer />
      </MainLayout>

      {/* Mobile Version */}
      <MainLayout
        title={"Our Network - Anagata Law Firm"}
        description={"Delivering strategic legal solutions with global experience"}
        className={"flex lg:hidden"}
      >
        {/* Hero Section */}
        <div className="w-full bg-ang-prm-blue flex flex-col h-fit">
          <div className="bg-white flex w-full h-[350px] justify-center items-center overflow-hidden relative">
            <div className="bg-ang-prm-text/20 absolute w-full h-full z-10"></div>
            <img src={image.HeroAsset} alt="" className="w-full h-full object-cover grayscale contrast-125" />
          </div>
          <div className="bg-ang-prm-blues flex w-full h-full justify-center items-start flex-col px-6 py-12">
            <div className="flex gap-x-3 items-center mb-6">
              <img src={IconLogo} alt="icon-anagata" className="h-5" />
              <h1 className="text-[18px] text-white">Our Collaborative Partnership</h1>
            </div>
            <h2 className="text-white text-[24px] font-light leading-relaxed">
              Strengthening global partnerships through proven collaborative commitment.
            </h2>
          </div>
        </div>

        {/* Network Partners Section */}
        <section id="our-core-practices" className="w-full px-6 flex py-[2rem] flex-col gap-y-6 pb-[4rem]">
          <div data-aos="fade-up" className="flex flex-col gap-y-6 pb-2">
            <div className="h-[1px] w-full bg-gray-300"></div>
            <h1 className="text-[24px] font-bold text-ang-prm-gray">Our Strong Collaboration</h1>
          </div>

          <div className="flex flex-col gap-y-8">
            {dataNetwork.map((network, index) => {
              return (
                <div key={network.id} data-aos="fade-up" data-aos-delay={index * 100} className="flex flex-col gap-y-4">
                  {/* Image */}
                  <img src={network.image} alt={network.name} className="rounded-lg object-cover w-full h-[200px]" />

                  {/* Content */}
                  <div className="flex flex-col gap-y-4">
                    <h1
                      dangerouslySetInnerHTML={{ __html: network.name }}
                      className="font-bold text-ang-prm-blue text-[1.5rem] leading-7"
                    />
                    <h4
                      dangerouslySetInnerHTML={{
                        __html: network.description_list,
                      }}
                      className="text-[1rem] text-gray-900 font-light leading-relaxed"
                    />

                    <Button
                      children
                      className="button-outline-red w-fit mt-2"
                      onClick={() => navigate("/our-network/" + network.slug)}
                    >
                      <h1>Discover More</h1>
                      <BsArrowUpRight />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section
          data-aos="fade-up"
          id="supporting-sectors"
          className="w-full bg-ang-prm-red h-fit flex flex-col py-[2.5rem]"
        >
          <div data-aos="fade-up" className="w-full">
            <ContactUs />
          </div>
        </section>

        <Footer />
      </MainLayout>
    </>
  );
};

export default OurNetwork;
