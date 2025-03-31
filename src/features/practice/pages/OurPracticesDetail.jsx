import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import React, { useEffect, useState } from "react";
import Header from "../../../components/ui/Header";
import MainLayout from "../../../components/layout/MainLayout";
import Footer from "../../../components/ui/Footer";
import { IconLogo } from "../../../assets/logo/export-assets";
import TextReveal from "../../../components/animations/TextReveal";
import { splitIntoTwoColumns } from "../../../utils/formatted";
import { Dialog } from "@material-tailwind/react";
import { BannerPracticeDetail } from "../../../assets/images/export-assets";
import { useNavigate, useParams } from "react-router-dom";
import { dataPracticeAreas } from "../../../constant/dataPracticeAreas";
import { BsArrowUpRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setDrawerPeople } from "../../../stores/mainSlices";
import { dataKeyPeople } from "../../../constant/dataKeyPeople";
import Aos from "aos";
import CardProfile from "../components/CardProfile";
import CardOtherPractices from "../components/CardOtherPractices";
import ContactUs from "../../../components/ui/ContactUs";
import MobileOurPracticesDetail from "./MobileOurPracticesDetail";
import DrawerPeople from "../../../components/ui/DrawerPeople";
import CardNotablePractice from "../components/CardNotablePractice";

const OurPracticesDetail = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [specialistIndex, setSpecialistIndex] = useState(0);

  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataDetail = dataPracticeAreas?.find((data) => data.slug === slug);
  const otherPractices = dataPracticeAreas?.filter(
    (data) => data.slug !== slug
  );
  const dataOurPeople = dataKeyPeople?.filter((person) =>
    dataDetail?.ourPeople?.includes(person?.id)
  );
  const dataDetailSpecialist = openDialog
    ? dataDetail?.specialistServiceArea?.find(
        (find) => find?.id === specialistIndex
      )
    : "";

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    return () => Aos.refresh();
  }, []);

  const { leftColumn, rightColumn } = splitIntoTwoColumns(
    dataDetail?.specialistServiceArea
  );

  const renderNotableCredentials = (notableCredentials) => {
    const chunkArray = (arr, size) => {
      return Array.from({ length: Math.ceil(arr?.length / size) }, (_, index) =>
        arr?.slice(index * size, index * size + size)
      );
    };

    const chunks = chunkArray(notableCredentials, 7);

    return chunks.map((chunk, chunkIndex) => (
      <div className="overflow-auto snap-x" key={`chunk-${chunkIndex}`}>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-fit flex gap-x-4 mt-4 snap-mandatory"
        >
          {chunk?.map((data, index) => (
            <CardNotablePractice
              key={`notablePractice-${chunkIndex}-${index}`}
              title={data?.title}
              description={data?.description}
            />
          ))}
        </div>
      </div>
    ));
  };

  return (
    <>
      <Header />
      <MainLayout className={"hidden lg:flex"}>
        {/* Main Header */}
        <div
          data-aos="fade-up"
          className="w-full bg-ang-prm-blue grid grid-cols-2 h-[495px]"
        >
          <div className="bg-ang-prm-blues flex w-full h-full justify-center items-start flex-col pl-24 pr-9 gap-y-5">
            <div
              onClick={() => navigate("/our-practice-areas")}
              className="flex gap-x-4 items-center cursor-pointer transition-all group text-white hover:text-ang-prm-red"
            >
              <IoIosArrowBack className="size-7" />
              <h1 className="text-[24px]">Our Practice Areas</h1>
            </div>
            <TextReveal text={dataDetail?.title} />
            <h1
              dangerouslySetInnerHTML={{
                __html: dataDetail?.description?.first_line,
              }}
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[20px] text-white font-light truncate-sevenline"
            />
          </div>
          <div className="flex w-full h-full justify-center items-center overflow-hidden">
            <img
              src={dataDetail?.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Sub Categories Content */}
        <section
          id="sub-categories"
          className="w-full bg-ang-prm-blackbg flex flex-col gap-y-4 px-24 py-32"
        >
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex flex-col gap-y-6 w-full"
          >
            <div className="h-[1px] w-full bg-white/30"></div>
            <div className="flex gap-x-4 items-center">
              <img src={IconLogo} alt="icon-anagata" className="h-6" />
              <h1 className="text-[32px] text-white">
                Specialist Services Area
              </h1>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-offset="-100"
            className="w-full grid grid-cols-2 gap-x-20 mt-12"
          >
            <div className="flex flex-col gap-y-6">
              {leftColumn?.map((item, index) => (
                <div
                  key={`left-${index}`}
                  className="text-white border-b-[1px] border-white pb-4 text-[20px] flex gap-x-5 items-center cursor-pointer hover:text-ang-prm-red transition-all justify-between"
                  onClick={() => {
                    setOpenDialog(true);
                    setSpecialistIndex(item?.id);
                  }}
                >
                  <div className="flex gap-x-5 items-center">
                    <h2>{item.number}</h2>
                    <h2>{item.title}</h2>
                  </div>

                  <BsArrowUpRight />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 gap-y-6">
              {rightColumn?.map((item, index) => (
                <div
                  key={`right-${index}`}
                  onClick={() => {
                    setOpenDialog(true);
                    setSpecialistIndex(item?.id);
                  }}
                  className="text-white border-b-[1px] border-white pb-4 text-[20px] flex gap-x-5 items-center cursor-pointer hover:text-ang-prm-red transition-all justify-between"
                >
                  <div className="flex gap-x-5 items-center">
                    <h2>{item.number}</h2>
                    <h2>{item.title}</h2>
                  </div>

                  <BsArrowUpRight />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Case */}
        <section
          data-aos="fade-up"
          data-aos-delay="100"
          id="succes-case"
          className="w-full flex bg-ang-prm-white px-24 h-fit flex-col py-24 gap-y-6"
        >
          <div className="flex flex-col gap-y-6 w-full">
            <div className="h-[1px] w-full bg-ang-prm-text/30"></div>

            <div className="flex gap-x-4 items-center">
              <img src={IconLogo} alt="icon-anagata" className="h-6" />
              <h1 className="text-[32px] text-ang-prm-text">
                Notable Credentials
              </h1>
            </div>
          </div>

          <h3
            dangerouslySetInnerHTML={{
              __html: dataDetail?.description?.second_line,
            }}
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[16px] text-gray-800 w-[90%] leading-8"
          />

          {renderNotableCredentials(dataDetail?.notableCredentials)}

          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[16px] italic text-gray-800 w-[90%] leading-7"
          >
            <b>Note:</b> Due to strict confidentiality, we are unable to share
            the names of our clients. However, we can provide descriptive
            information about the clients and the types of work performed for
            them.
          </h3>

          {/* Banner Image Practice Area */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="relative w-full h-fit rounded-2xl overflow-hidden mt-2"
          >
            <div className="absolute z-10 w-full h-full bg-ang-prm-black/30"></div>
            <img
              src={BannerPracticeDetail}
              alt=""
              className="h-[337px] object-cover rounded-2xl grayscale w-full"
            />
          </div>
        </section>

        <section
          data-aos="fade-up"
          data-aos-delay="100"
          id="our-people-section"
          className="w-full flex bg-white px-24 h-fit flex-col py-24 gap-y-6 "
        >
          <div className="flex flex-col gap-y-6 w-full">
            <div className="h-[1px] w-full bg-ang-prm-text/30"></div>

            <div className="flex gap-x-4 items-center">
              <img src={IconLogo} alt="icon-anagata" className="h-6" />
              <h1 className="text-[32px] text-ang-prm-text">Our People</h1>
            </div>
            <h2 className="text-[18px] -mt-4 text-gray-600">
              Our lawyers are renowned in their practice areas, each bringing.
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="grid grid-cols-3 w-full mt-7 gap-y-12"
          >
            {dataOurPeople?.map((data, index) => {
              return (
                <CardProfile
                  key={"card-people" + index}
                  data={data}
                  image={data?.photo}
                  name={data?.name}
                  title={data?.title}
                  onClick={() =>
                    dispatch(
                      setDrawerPeople({
                        drawer: true,
                        indexPeople: data?.id - 1,
                      })
                    )
                  }
                />
              );
            })}
          </div>
        </section>

        {/* Other Practice Areas */}
        <section
          data-aos="fade-up"
          data-aos-delay="100"
          id="other-practices-section"
          className="w-full flex bg-ang-prm-white px-24 h-fit flex-col py-24 gap-y-3"
        >
          <div className="flex flex-col gap-y-6 w-full">
            <div className="h-[1px] w-full bg-ang-prm-text/30"></div>

            <div className="flex gap-x-4 items-center">
              <img src={IconLogo} alt="icon-anagata" className="h-6" />
              <div
                onClick={() => navigate("/our-practice-areas")}
                className="flex gap-x-2 items-center group cursor-pointer transition-all"
              >
                <h1 className="text-[24px] lg:text-[32px] text-ang-prm-text  ">
                  Other Practice Areas
                </h1>
                <BsArrowUpRight className="size-6 mt-0.5 group-hover:text-ang-prm-red transition-all group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </div>
            </div>
            <h2 className="text-[18px] text-gray-600 max-w-[70%] leading-8">
              We provide strategic legal solutions across diverse practice
              areas, supporting startups to global corporations in navigating
              challenges and driving growth.
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="grid grid-cols-4 w-full mt-7 gap-x-5"
          >
            {/* Card Ohter Practices */}
            {otherPractices.slice(0, 4).map((data, index) => {
              return (
                <CardOtherPractices
                  key={"other" + index}
                  image={data?.image}
                  title={data?.title}
                  description={data?.description?.first_line}
                  slug={data?.slug}
                />
              );
            })}
          </div>
        </section>

        <section id="contact-us" className="w-full bg-ang-prm-red h-fit py-24">
          <div data-aos="fade-up" className="w-full">
            <ContactUs />
          </div>
        </section>
        <Footer />
      </MainLayout>

      {/* Mobile Version */}
      <MobileOurPracticesDetail />

      <DrawerPeople />

      {/* Dialog for Specialist Service */}
      <Dialog open={openDialog} handler={() => setOpenDialog(false)} children>
        <div className="p-8 w-full h-full flex flex-col relative">
          <h2 className="font-bold text-[20px] text-ang-prm-red max-w-[95%]">
            {dataDetailSpecialist?.title}
          </h2>

          <div className="h-[1px] w-full border-b-[1px] border-gray-600/40 border-dashed my-5"></div>
          <div className="flex flex-col gap-y-3">
            {dataDetailSpecialist?.list?.map((data, index) => {
              return (
                <ol key={"dataDetailSpecialist" + index}>
                  <li dangerouslySetInnerHTML={{ __html: data }} />
                </ol>
              );
            })}
          </div>

          <AiOutlineClose
            onClick={() => setOpenDialog(false)}
            className="absolute right-8 top-9 size-6"
          />
        </div>
      </Dialog>
    </>
  );
};

export default OurPracticesDetail;
