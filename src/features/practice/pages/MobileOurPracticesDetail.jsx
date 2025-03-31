import { IoIosArrowBack, IoIosCloseCircleOutline } from "react-icons/io";
import React, { useEffect, useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import Footer from "../../../components/ui/Footer";
import { IconLogo } from "../../../assets/logo/export-assets";
import TextReveal from "../../../components/animations/TextReveal";
import Aos from "aos";
import { splitIntoTwoColumns } from "../../../utils/formatted";
import CardProfile from "../components/CardProfile";
import CardOtherPractices from "../components/CardOtherPractices";
import ContactUs from "../../../components/ui/ContactUs";
import { BannerPracticeDetail } from "../../../assets/images/export-assets";
import { useNavigate, useParams } from "react-router-dom";
import { dataPracticeAreas } from "../../../constant/dataPracticeAreas";
import { BsArrowUpRight } from "react-icons/bs";
import CardNotablePractice from "../components/CardNotablePractice";
import { dataKeyPeople } from "../../../constant/dataKeyPeople";
import { useDispatch } from "react-redux";
import { setDrawerPeople } from "../../../stores/mainSlices";
import { Dialog } from "@material-tailwind/react";

const MobileOurPracticesDetail = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [specialistIndex, setSpecialistIndex] = useState(0);

  const dispatch = useDispatch();
  const { slug } = useParams();
  const navigate = useNavigate();
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
      <div
        className="overflow-auto snap-x snap-mandatory"
        key={`chunk-${chunkIndex}`}
      >
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-fit flex gap-x-4 mt-2 snap-always snap-start"
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
      <MainLayout className={"flex lg:hidden"}>
        <div
          data-aos="fade-up"
          className="w-full bg-ang-prm-blue grid grid-cols-1 h-[725px]"
        >
          <div className="bg-white flex w-full h-full justify-center items-center overflow-hidden relative">
            <img
              src={dataDetail?.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-ang-prm-blues h-full flex w-full justify-center items-start flex-col px-4 -my-3 -mb-12 gap-y-4">
            <div
              onClick={() => navigate("/our-practice-areas")}
              className="flex gap-x-2 items-center cursor-pointer transition-all group text-white hover:text-ang-prm-red"
            >
              <IoIosArrowBack className="size-5" />
              <h1 className="text-[16px]">Our Practice Areas</h1>
            </div>
            <TextReveal
              textSize={"text-[24px] font-bold"}
              text={dataDetail?.title}
            />
            <h1
              dangerouslySetInnerHTML={{
                __html: dataDetail?.description?.first_line,
              }}
              className="text-[14px] text-gray-200 font-light truncate-sevenline leading-7"
            />
          </div>
        </div>

        {/* Sub Categories Content */}
        <section
          id="sub-categories"
          className="w-full bg-ang-prm-blackbg flex flex-col gap-y-4 px-4 pb-32 pt-12"
        >
          <div className="flex flex-col gap-y-6 w-full">
            <div className="flex gap-x-4 items-start pr-4">
              <img src={IconLogo} alt="icon-anagata" className="h-5 mt-1.5" />
              <h1 className="text-[24px] text-white">
                Specialist Services Area
              </h1>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 gap-x-20 mt-12 gap-y-5">
            <div className="flex flex-col gap-y-6">
              {leftColumn?.map((item, index) => (
                <div
                  key={`left-${index}`}
                  onClick={() => {
                    setOpenDialog(true);
                    setSpecialistIndex(item?.id);
                  }}
                  className="text-white border-b-[1px] border-white pb-4 text-[20px] flex gap-x-5 items-start justify-between"
                >
                  <div className="flex gap-x-3">
                    <h2>{item?.number}</h2>
                    <h2>{item?.title}</h2>
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
                  className="text-white border-b-[1px] border-white pb-4 text-[20px] flex gap-x-5 items-start justify-between"
                >
                  <div className="flex gap-x-3">
                    <h2>{item?.number}</h2>
                    <h2>{item?.title}</h2>
                  </div>

                  <BsArrowUpRight />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Case */}
        <section
          id="succes-case"
          className="w-full flex bg-ang-prm-white px-4 h-fit flex-col pb-14 pt-12 gap-y-6"
        >
          <div className="flex flex-col gap-y-6 w-full">
            <div className="flex gap-x-4 items-center">
              <img src={IconLogo} alt="icon-anagata" className="h-5" />
              <h1 className="text-[24px] text-ang-prm-text">
                Notable Credentials
              </h1>
            </div>
            <h2
              dangerouslySetInnerHTML={{
                __html: dataDetail?.description?.second_line,
              }}
              className="text-[14px] text-gray-600 leading-7"
            />
          </div>

          {renderNotableCredentials(dataDetail?.notableCredentials)}

          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[13px] italic text-gray-600 w-[95%] leading-6"
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
            className="relative w-full h-fit rounded-2xl overflow-hidden mt-4"
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
          className="w-full flex bg-white px-4 h-fit flex-col pb-32 pt-12 gap-y-6"
        >
          <div className="flex flex-col gap-y-6 w-full">
            <div className="flex gap-x-4 items-center">
              <img src={IconLogo} alt="icon-anagata" className="h-5" />
              <h1 className="text-[24px] text-ang-prm-text">Our People</h1>
            </div>
            <h2 className="text-[16px] -mt-4 text-gray-600">
              Our lawyers are renowned in their practice areas, each bringing.
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="grid grid-cols-1 w-full mt-7 gap-y-12"
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
          className="w-full flex bg-ang-prm-white px-4 h-fit flex-col pb-32 pt-12 gap-y-6"
        >
          <div className="flex flex-col gap-y-6 w-full">
            <div className="flex gap-x-4 items-center">
              <img src={IconLogo} alt="icon-anagata" className="h-5" />
              <h1 className="text-[24px] text-ang-prm-text">
                Other Practice Areas
              </h1>
            </div>
            <h2 className="text-[16px] text-gray-600">
              Our team of experienced attorneys provides comprehensive legal
              strategies tailored to support growth and navigate complex
              challenges. We serve a diverse clientele, from startups laying
              their legal foundations to multinational corporations requiring
              sophisticated counsel.
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="grid grid-cols-1 w-full mt-7 gap-x-5 gap-y-12"
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

        <section id="contact-us" className="w-full bg-ang-prm-red h-fit pt-12">
          <div data-aos="fade-up" className="w-full">
            <ContactUs />
          </div>
        </section>
        <Footer />
      </MainLayout>

      {/* Dialog for Specialist Service */}
      <Dialog
        size="xxl"
        open={openDialog}
        handler={() => setOpenDialog(false)}
        children
      >
        <div className="p-5 w-full h-full flex flex-col fixed inset-0 overflow-scroll bg-white gap-y-4 pb-20">
          <div className="flex flex-col gap-y-4">
            <IoIosCloseCircleOutline
              className="size-10 text-gray-500 hover:text-ang-prm-black transition-all cursor-pointer -ml-1"
              onClick={() => setOpenDialog(false)}
            />

            <h2 className="font-bold text-[24px] text-ang-prm-red max-w-[95%]">
              {dataDetailSpecialist?.title}
            </h2>
          </div>

          <div className="h-[1px] w-full border-b-[1px] border-gray-600/40 border-dashed my-2"></div>

          <div className="flex flex-col gap-y-3">
            {dataDetailSpecialist?.list?.map((data, index) => {
              return (
                <ol key={"dataDetailSpecialist" + index}>
                  <li dangerouslySetInnerHTML={{ __html: data }} />
                </ol>
              );
            })}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MobileOurPracticesDetail;
