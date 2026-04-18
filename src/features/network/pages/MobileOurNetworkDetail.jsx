import { IoIosArrowBack, IoIosCloseCircleOutline } from "react-icons/io";
import React, { useEffect, useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import Footer from "../../../components/ui/Footer";
import { IconLogo } from "../../../assets/logo/export-assets";
import TextReveal from "../../../components/animations/TextReveal";
import { splitIntoTwoColumns } from "../../../utils/formatted";
import { Dialog } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setDrawerPeople } from "../../../stores/mainSlices";
import { dataKeyPeople } from "../../../constant/dataKeyPeople";
import Aos from "aos";
import CardProfile from "../components/CardProfile";
import ContactUs from "../../../components/ui/ContactUs";
import DrawerPeople from "../../../components/ui/DrawerPeople";
import { dataNetwork } from "../../../constant/dataNetwork";
import IconAnagata from "../../../assets/logo/icon_logo.png";

const MobileOurNetworkDetail = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [specialistIndex, setSpecialistIndex] = useState(0);

  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataDetail = dataNetwork?.find((data) => data.slug === slug);
  const dataOurPeople = dataKeyPeople?.filter((person) => dataDetail?.ourPeople?.includes(person?.id));
  const dataDetailSpecialist = openDialog
    ? dataDetail?.specialistServiceArea?.find((find) => find?.id === specialistIndex)
    : "";

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    return () => Aos.refresh();
  }, []);

  const { leftColumn, rightColumn } = splitIntoTwoColumns(dataDetail?.specialistServiceArea);

  return (
    <>
      <MainLayout className={"flex lg:hidden"}>
        {/* Main Header */}
        <div data-aos="fade-up" className="w-full bg-ang-prm-blue grid grid-cols-1 h-[725px]">
          <div className="bg-white flex w-full h-full justify-center items-center overflow-hidden relative">
            <img src={dataDetail?.image} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="bg-ang-prm-blues h-full flex w-full justify-center items-start flex-col px-4 -my-3 -mb-12 gap-y-4">
            <div
              onClick={() => navigate("/our-network")}
              className="flex gap-x-2 items-center cursor-pointer transition-all group text-white hover:text-ang-prm-red"
            >
              <IoIosArrowBack className="size-5" />
              <h1 className="text-[16px]">Our Network</h1>
            </div>
            <TextReveal textSize={"text-[24px] font-bold"} text={dataDetail?.title} />
            <h1
              dangerouslySetInnerHTML={{
                __html: dataDetail?.description?.first_line,
              }}
              className="text-[14px] text-gray-200 font-light truncate-sevenline leading-7"
            />
          </div>
        </div>

        {/* Notable Information Section */}
        <section
          data-aos="fade-up"
          data-aos-delay="100"
          id="notable-info"
          className="w-full flex bg-ang-prm-white px-4 h-fit flex-col pb-14 pt-12 gap-y-6"
        >
          <div className="flex flex-col gap-y-6 w-full">
            <div className="flex gap-x-4 items-center">
              <img src={IconLogo} alt="icon-anagata" className="h-5" />
              <h1 className="text-[24px] text-ang-prm-text">Notable Information</h1>
            </div>
          </div>

          <h3
            dangerouslySetInnerHTML={{
              __html: dataDetail?.description?.second_line,
            }}
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[14px] text-gray-600 leading-7"
          />
        </section>

        {/* About Rubicon Collective Section */}
        <section id="sub-categories" className="w-full bg-ang-prm-blackbg flex flex-col gap-y-4 px-4 pb-32 pt-12">
          <div className="flex flex-col gap-y-6 w-full">
            <div className="flex gap-x-4 items-start pr-4">
              <h1 className="text-[24px] text-white">About Rubicon Collective</h1>
            </div>
            <p className="text-[14px] text-gray-200 leading-7">
              Rubicon Collective is an alliance of independent law firms dedicated to advancing legal services in the
              Asia Pacific region through collaboration, resource sharing, and strategic partnerships. Its member firms
              bring together deep local expertise and international perspectives to deliver innovative and effective
              legal solutions.
            </p>
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
                  className="text-white border-b-[1px] border-white pb-4 text-[18px] flex gap-x-5 items-start justify-between"
                >
                  <div className="flex gap-x-3 items-center">
                    <div className="size-2 rounded-full bg-ang-prm-red flex-shrink-0 mt-1"></div>
                    <h2>{item?.title}</h2>
                  </div>
                  <BsArrowUpRight className="flex-shrink-0 mt-1" />
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
                  className="text-white border-b-[1px] border-white pb-4 text-[18px] flex gap-x-5 items-start justify-between"
                >
                  <div className="flex gap-x-3 items-center">
                    <div className="size-2 rounded-full bg-ang-prm-red flex-shrink-0 mt-1"></div>
                    <h2>{item?.title}</h2>
                  </div>
                  <BsArrowUpRight className="flex-shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our People Section */}
        <section
          data-aos="fade-up"
          data-aos-delay="100"
          id="our-people-section"
          className="w-full flex bg-white px-4 h-fit flex-col pb-32 pt-12 gap-y-6"
        >
          <div className="flex flex-col gap-y-6 w-full">
            <div
              onClick={() => navigate("/our-people")}
              className="flex gap-x-4 items-center w-fit hover:underline transition-all cursor-pointer"
            >
              <img src={IconAnagata} alt="icon-anagata" className="h-5" />
              <h1 className="text-[24px] text-ang-prm-text">People</h1>
              <BsArrowUpRight className="size-5" />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="grid grid-cols-1 w-full mt-7 gap-y-12">
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

        {/* Contact Us Section */}
        <section id="contact-us" className="w-full bg-ang-prm-red h-fit pt-12">
          <div data-aos="fade-up" className="w-full">
            <ContactUs />
          </div>
        </section>
        <Footer />
      </MainLayout>

      <DrawerPeople />

      {/* Dialog for Specialist Service */}
      <Dialog size="xxl" open={openDialog} handler={() => setOpenDialog(false)} children>
        <div className="p-5 w-full h-full flex flex-col fixed inset-0 overflow-scroll bg-white gap-y-4 pb-20">
          <div className="flex flex-col gap-y-4">
            <IoIosCloseCircleOutline
              className="size-10 text-gray-500 hover:text-ang-prm-black transition-all cursor-pointer -ml-1"
              onClick={() => setOpenDialog(false)}
            />

            <h2 className="font-bold text-[24px] text-ang-prm-red max-w-[95%]">{dataDetailSpecialist?.title}</h2>
          </div>

          <div className="h-[1px] w-full border-b-[1px] border-gray-600/40 border-dashed my-2"></div>

          <div className="flex flex-col gap-y-3">
            <p
              dangerouslySetInnerHTML={{ __html: dataDetailSpecialist?.body || "" }}
              className="font-normal text-gray-900 text-[14px] leading-7"
            />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MobileOurNetworkDetail;
