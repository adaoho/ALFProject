import MainLayout from "../../../components/layout/MainLayout";
import Header from "../../../components/ui/Header";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GiPlainCircle } from "react-icons/gi";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";
import {
  BsArrowUpRight,
  BsArrowDownCircle,
  BsArrowLeftCircle,
  BsArrowUpCircle,
} from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import IconAnagata from "../../../assets/logo/icon_logo.png";
import { Button, Drawer } from "@material-tailwind/react";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Aos from "aos";
import { useFetchPosts } from "../../../stores/mainAction";
import { toast } from "sonner";
import {
  dataPracticeAreas,
  imagePractices,
} from "../services/dataPracticeAreas";
import { useDispatch } from "react-redux";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  Award1,
  Award2,
  Award3,
  Award4,
  Award5,
  Award6,
  Award7,
  BgContactUs,
  BgHome,
  BgHome2,
  BgJakarta,
  BgSurabaya,
  LogoAnagataWhySection,
  TeamAnagata,
} from "../assets/export-assets";
import { dataKeyPeople } from "../services/dataKeyPeople";
import { WhiteLogo } from "../../../assets/logo/export-assets";

const MobileHomePage = () => {
  const dispatch = useDispatch();
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(1);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [drawerPeople, setDrawerPeople] = useState(false);
  const [indexImage, setIndexImage] = useState(0);
  const [indexPeople, setIndexPeople] = useState(0);

  const { data, isSuccess } = useFetchPosts();
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const onUnderDevelopment = () => {
    toast.info("Will be Coming Soon 🚀");
  };

  function Icon({ id, open }) {
    setTimeout(() => {
      Aos.refresh();
    }, 300);
    return <>{id === open ? <BiChevronUp /> : <BiChevronDown />}</>;
  }

  useEffect(() => {
    document.body.style.overflow = drawerPeople ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [drawerPeople]);

  return (
    <>
      <div className="block lg:hidden top-0 sticky z-30">
        <Header />
      </div>
      <MainLayout className={"flex lg:hidden"}>
        <section
          id="carousel-section"
          className="h-[300px] w-full px-4 flex justify-center items-center"
        >
          <div className="w-full rounded-3xl shadow-g-lg h-full mt-16 relative flex items-center justify-center">
            {/* Content Carousel */}

            <div className="relative w-full h-full">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                  prevEl: ".main-prev",
                  nextEl: ".main-next",
                }}
                className="relative rounded-3xl"
                spaceBetween={10}
                slidesPerView={"auto"}
                centeredSlides={true}
                speed={1000}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                mousewheel={{
                  forceToAxis: true,
                  sensitivity: 1,
                  releaseOnEdges: true,
                }}
                freeMode={true}
              >
                <SwiperSlide>
                  <div className="relative w-full h-full">
                    <img
                      src={TeamAnagata}
                      alt="bg-home"
                      className="object-cover z-0 rounded-3xl absolute w-full h-full"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-full">
                    <img
                      src={BgHome}
                      alt="bg-home"
                      className="object-cover z-0 rounded-3xl absolute w-full h-full"
                    />
                    <div className="flex flex-col gap-y-4 absolute px-8 pt-8">
                      <div className="flex gap-x-4 items-center">
                        <img
                          src={IconAnagata}
                          alt="icon-anagata"
                          className="h-4"
                        />
                        <h1 className="text-[14px] text-white">
                          Shapping Tomorrow and Today
                        </h1>
                      </div>
                      <h1 className="text-[28px] text-white font-bold w-fit truncate-fiveline">
                        Experience And Innovation to Navigate a Changing World
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-full">
                    <img
                      src={TeamAnagata}
                      alt="bg-home"
                      className="object-cover z-0 rounded-3xl absolute w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* News Carousel */}
            <div className="bg-ang-prm-blue h-[28rem] w-[90%] absolute -bottom-[25rem] rounded-3xl p-8 shadow-g-lg z-20">
              <div className="flex flex-col w-full h-full justify-between items-center">
                <Swiper
                  key={data?.length}
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation={{
                    prevEl: ".news-prev",
                    nextEl: ".news-next",
                  }}
                  className="relative"
                  spaceBetween={40}
                  slidesPerView={"auto"}
                  freeMode={true}
                  centeredSlides={true}
                  speed={1000}
                  loop={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  mousewheel={{
                    forceToAxis: true,
                    sensitivity: 1,
                    releaseOnEdges: true,
                  }}
                  //   direction="vertical"
                >
                  {data?.slice(0, 4)?.map((data, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="flex flex-col gap-y-4 h-full w-full">
                          <img
                            src={data?.featured_image_url}
                            alt=""
                            className="w-full h-full rounded-3xl object-cover"
                          />
                          <div className="flex flex-col gap-y-8 w-full justify-center">
                            <div className="flex flex-col gap-y-2">
                              <h1
                                dangerouslySetInnerHTML={{
                                  __html: data?.title?.rendered,
                                }}
                                className="text-[16px] text-white font-semibold w-full truncate-twoline"
                              />
                              <h1
                                dangerouslySetInnerHTML={{
                                  __html: data?.excerpt?.rendered,
                                }}
                                className="text-[12px] text-gray-500 font-light w-full truncate-twoline leading-6"
                              />
                            </div>

                            <Button
                              onClick={() =>
                                navigate("/news-and-update/" + data?.slug)
                              }
                              children
                              className="button-outline-white w-full"
                            >
                              <h1>Read Article</h1>
                              <BsArrowUpRight />
                            </Button>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        {/* Red Accent Background */}
        <div className="bg-ang-prm-red h-[5rem] absolute top-[19.5rem] w-full -z-10"></div>

        {/* Our Firm Content */}
        <section
          id="our-firm-section"
          className="bg-ang-prm-blue w-full h-fit pt-[30rem] px-6 pb-[10rem]"
        >
          <div className="h-[1px] w-full bg-white"></div>

          {/* Our Firm Content */}
          <div className="flex w-full gap-y-4 items-start mt-14 flex-col">
            <div className="flex gap-x-4 items-center w-fit pt-2">
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className=" text-white text-[18px]">Our Firm</h1>
            </div>

            <div className="flex flex-col gap-y-4 flex-1">
              <h1 className="text-white text-[32px] w-full">
                At Anagata, <br /> we understand the complexities of today's
                business landscape.
              </h1>

              <h1 className="text-white text-[16px] font-light leading-9">
                Our team of experienced attorneys provides comprehensive legal
                strategies tailored to support growth and navigate complex
                challenges. We serve a diverse clientele, from startups laying
                their legal foundations to multinational corporations requiring
                sophisticated counsel.
              </h1>

              <Button
                children
                onClick={onUnderDevelopment}
                className="button-outline-white w-fit mt-4"
              >
                <h1>Discover Our Firm</h1>
                <BsArrowUpRight />
              </Button>
            </div>
          </div>

          {/* Our Practice Areas */}
          <section
            id="our-practices-areas"
            className="w-full mt-[6rem] flex gap-x-2 flex-col"
          >
            <div className="flex h-[16rem] justify-center items-center">
              <div className="relative w-full">
                <div className="bg-gradient-to-t from-ang-prm-red/70 to-ang-prm-blue/30 w-full h-full absolute rounded-3xl z-10"></div>
                <div className="bg-gray-900/70 absolute w-full h-full rounded-3xl"></div>
                <img
                  src={imagePractices[indexImage]}
                  alt=""
                  className="w-full h-[16rem] rounded-3xl object-cover"
                />
              </div>

              <div className="absolute flex flex-col gap-y-4 p-7 z-10 justify-center items-center">
                <div className="flex gap-x-4 items-center">
                  <img src={IconAnagata} alt="icon-anagata" className="h-5" />
                  <h1 className="text-white font-semibold text-[18px]">
                    Our Practice Areas
                  </h1>
                </div>

                <h1 className="font-normal text-[18px] text-white text-center">
                  Anagata offers capability and <br /> resources as a full
                  services firm
                </h1>

                <Button
                  onClick={onUnderDevelopment}
                  className="button-outline-white-black-2 w-fit mt-3"
                >
                  <h1 className="text-[14px]">More Practice Areas</h1>
                  <BsArrowUpRight />
                </Button>
              </div>
            </div>

            <div className="flex-1 px-1 mt-7 flex-col">
              <div className="flex flex-col gap-y-2 mb-4">
                <h1 className="text-ang-prm-red font-bold text-[28px]">
                  Our Core Practices
                </h1>
                <div className="h-[0.9px] w-full bg-ang-prm-red/80"></div>
              </div>
              {dataPracticeAreas?.map((data, index) => {
                return (
                  <Accordion
                    key={index}
                    open={open === data?.id}
                    icon={<Icon id={data?.id} open={open} />}
                  >
                    <AccordionHeader
                      onClick={() => {
                        handleOpen(data.id);
                        setIndexImage(data.id - 1);
                      }}
                      className={`text-white font-sans text-[24px] font-bold hover:text-gray-400`}
                    >
                      <h1
                        dangerouslySetInnerHTML={{ __html: data.title }}
                        className="w-full"
                      ></h1>
                    </AccordionHeader>
                    <AccordionBody className="text-white font-extralight text-[18px] leading-8">
                      <p
                        dangerouslySetInnerHTML={{ __html: data.description }}
                      ></p>

                      <Button
                        children
                        onClick={onUnderDevelopment}
                        className="button-outline-white w-fit mt-6"
                      >
                        <h1>Learn More</h1>
                        <BsArrowUpRight />
                      </Button>
                    </AccordionBody>
                  </Accordion>
                );
              })}
            </div>
          </section>
        </section>

        {/* Why Choose Anagata Content */}
        <section
          id="why-choose-anagata"
          className="w-full h-fit px-6 pb-[8rem] mt-12"
        >
          <div className="flex w-full gap-x-20 items-start mt-8 flex-col">
            <div className="flex gap-x-4 w-full items-center mb-4">
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="text-ang-prm-black text-[18px]">
                Why Choose Anagata
              </h1>
            </div>

            <div className="grid grid-cols-1 w-full mt-3 gap-4">
              <div className="">
                <h1 className="text-[24px] font-light">
                  With the combination of decades of experience, Anagata is
                  ready to offer you solutions to all complex{" "}
                  <b className="text-ang-prm-red underline">legal matters.</b>
                </h1>
              </div>
              <div className="bg-white shadow-g-sm w-full h-[15rem] rounded-3xl relative p-7">
                <img
                  src={LogoAnagataWhySection}
                  alt=""
                  className="h-[5rem] absolute bottom-0 right-0 rounded-br-3xl"
                />
                <p className="text-ang-prm-black w-[80%] text-[18px] font-light">
                  Our local Lawyers, with International reach and exposure, are
                  well-equipped to help clients expand into established and
                  emerging markets.
                </p>
              </div>
              <div className="bg-white shadow-g-sm w-full h-[15rem] rounded-3xl relative p-7">
                <img
                  src={LogoAnagataWhySection}
                  alt=""
                  className="h-[5rem] absolute bottom-0 right-0 rounded-br-3xl"
                />
                <p className="text-ang-prm-black w-[80%] text-[18px] font-light">
                  Anagata delivers client-centered legal excellence with
                  transparency, integrity, and innovation, staying aligned with
                  industry trends to remain relevant.
                </p>
              </div>
              <div className="bg-white shadow-g-sm w-full h-[15rem] rounded-3xl relative p-7">
                <img
                  src={LogoAnagataWhySection}
                  alt=""
                  className="h-[5rem] absolute bottom-0 right-0 rounded-br-3xl"
                />
                <p className="text-ang-prm-black w-[80%] text-[18px] font-light">
                  Our team structure ensures effective communication between you
                  and your Partner directly, facilitating the achievement of
                  your business goal.
                </p>
              </div>
            </div>

            <div className="h-[1px] w-full bg-ang-prm-black/30 mt-16 mb-16"></div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex w-full justify-center items-center gap-x-4"
            >
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="text-ang-prm-black text-[18px] font-sans font-light">
                Accolades
              </h1>
            </div>

            <div
              data-aos="fade-up"
              data-aos-offset="150"
              className="grid grid-cols-3 md:flex w-full items-center justify-between mt-12 gap-10"
            >
              <div className="flex justify-center items-center">
                <img
                  data-aos="fade-up"
                  src={Award1}
                  alt=""
                  className="h-20 object-contain"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  data-aos="fade-up"
                  data-aos-delay="100"
                  src={Award2}
                  alt=""
                  className="h-20 object-contain"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  data-aos="fade-up"
                  data-aos-delay="200"
                  src={Award3}
                  alt=""
                  className="h-20 object-contain"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  data-aos="fade-up"
                  data-aos-delay="300"
                  src={Award5}
                  alt=""
                  className="h-28 object-contain"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  data-aos="fade-up"
                  data-aos-delay="400"
                  src={Award7}
                  alt=""
                  className="h-24 object-contain"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  data-aos="fade-up"
                  data-aos-delay="500"
                  src={Award6}
                  alt=""
                  className="h-20 object-contain"
                />
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="w-full justify-center flex mt-20"
            >
              <Button
                onClick={onUnderDevelopment}
                children
                className="button-outline-red-2 w-fit"
              >
                <h1 className="text-[16px]">Discover Our Firm</h1>
                <BsArrowUpRight />
              </Button>
            </div>
          </div>
        </section>

        {/* Section Our People */}
        <section
          id="section-our-people"
          className="bg-ang-prm-blackbg w-full h-fit pt-[4rem] px-6 pb-[7rem] flex flex-col"
        >
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            className="flex w-full items-start flex-col gap-y-4"
          >
            <div className="flex gap-x-4 items-center w-fit pt-2">
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="text-white text-[18px]">Our People</h1>
            </div>

            <div className="flex flex-col gap-y-8 flex-1">
              <h1 className="text-white text-[24px] max-w-[90%] font-light">
                Our lawyers are renowned in their practice areas, each bringing.
              </h1>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            className="flex flex-col gap-y-1 mt-12"
          >
            <h1 className="text-[24px] text-white font-bold pb-3">
              Our Key Practices
            </h1>
            <div className="w-full pb-2">
              <div className="h-[0.8px] w-full bg-white"></div>
            </div>
          </div>

          {/* Section Each People */}
          <Swiper
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            spaceBetween={40}
            speed={1000}
            loop={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="relative mt-8"
          >
            {/* Profile People */}
            {dataKeyPeople.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col w-full h-fit gap-y-4 md:items-center">
                  <img
                    src={data?.photo}
                    alt=""
                    className="object-cover w-full md:w-[350px] h-[380px] rounded-3xl"
                  />
                  <div className="flex flex-col md:items-center md:justify-center">
                    <h1 className="font-bold text-white text-[24px]">
                      {data.name}
                    </h1>
                    <h1 className="font-normal text-[20px] text-ang-prm-red truncate-oneline">
                      {data.title}
                    </h1>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{ __html: data?.description }}
                    className="text-white font-extralight text-[16px] truncate-fiveline leading-6 md:text-center"
                  />
                  <Button
                    onClick={() => {
                      setDrawerPeople(true);
                      setIndexPeople(index);
                    }}
                    className="button-outline-white-black w-fit mt-5"
                  >
                    <h1>See full profile</h1>
                    <BsArrowUpRight />
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex w-full items-center gap-x-4 mt-12 md:justify-center">
            <BsArrowLeftCircle className="swiper-prev size-10 text-white cursor-pointer" />
            <div className="flex-1 lg:flex gap-x-5 hidden">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  id="dots-pagination"
                  className={`h-[1px] w-full cursor-pointer ${
                    swiperIndex === index ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => {
                    if (swiperRef.current) {
                      swiperRef.current.slideToLoop(index); // Use slideToLoop for looped slides
                    }
                  }}
                ></div>
              ))}
            </div>
            <BsArrowRightCircle className="swiper-next size-10 text-white cursor-pointer" />
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="flex flex-col gap-y-1 mt-20"
          >
            <h1 className="text-[24px] text-white font-bold pb-3">
              Other Highly Motivated Individuals
            </h1>
            <div className="w-full pb-2">
              <div className="h-[0.8px] w-full bg-white"></div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="w-full grid grid-cols-1 py-8 gap-y-3"
          >
            <div className="flex gap-x-4 text-white items-center">
              <h1 className="text-[24px]">⁠Mayo Falmonti</h1>
              <h1>-</h1>
              <h1 className="font-light">Of Counsel</h1>
            </div>
            <div className="flex gap-x-4 text-white items-center">
              <h1 className="text-[24px]">⁠James Hutagaol</h1>
              <h1>-</h1>
              <h1 className="font-light">Of Counsel</h1>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="w-full pl-3 pb-2"
          >
            <div className="h-[0.8px] w-full bg-white"></div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="w-full grid grid-cols-1 pt-8 pb-4 gap-y-3"
          >
            <div className="flex gap-x-4 text-white items-center">
              <h1 className="text-[24px]">⁠Asti Purnamasari </h1>
              <h1>-</h1>
              <h1 className="font-light">Associate</h1>
            </div>
            <div className="flex gap-x-4 text-white items-center">
              <h1 className="text-[24px]">Reyhandi Pradana</h1>
              <h1>-</h1>
              <h1 className="font-light">Associate</h1>
            </div>
            <div className="flex gap-x-4 text-white items-center">
              <h1 className="text-[24px]">Sultan Rifqi</h1>
              <h1>-</h1>
              <h1 className="font-light">Associate</h1>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="w-full flex justify-center items-center mt-12"
          >
            <Button
              children
              onClick={onUnderDevelopment}
              className="button-outline-white-black-2 w-fit mt-4 text-[16px]"
            >
              <h1>Discover More Our People</h1>
              <BsArrowUpRight />
            </Button>
          </div>
        </section>

        {/* Section Our Location */}
        <section
          id="section-our-location"
          className="bg-white w-full h-fit pt-[4rem] px-6 pb-[7rem] flex flex-col"
        >
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="flex w-full gap-y-8 items-start flex-col"
          >
            <div className="flex gap-x-4 items-center w-fit pt-2">
              <img
                src={IconAnagata}
                alt="icon-anagata"
                className="h-6 object-contain"
              />
              <h1 className="text-ang-prm-black text-[14px]">Our Location</h1>
            </div>

            <div className="flex flex-col gap-y-8 flex-1">
              <h1 className="text-ang-prm-black text-[24px] max-w-[90%] font-light">
                Our office is strategically located, ensuring easy access to
                exceptional legal services.
              </h1>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="h-[1px] w-full bg-ang-prm-black/30 mt-12 mb-8"
          ></div>

          <div className="w-full grid grid-cols-1 gap-8 mt-4">
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              className="flex flex-col relative h-[450px] w-full items-center justify-center shadow-g-sm group overflow-hidden rounded-3xl"
            >
              <img
                src={BgJakarta}
                alt=""
                className="w-full h-full rounded-3xl object-cover group-hover:scale-110 transition-all"
              />

              <div className="absolute flex flex-col p-8">
                <div className="flex gap-x-3 items-start justify-start">
                  <img
                    src={IconAnagata}
                    alt="icon-anagata"
                    className="h-6 w-fit object-contain"
                  />
                  <h1 className="text-[18px] font-bold text-white">
                    Jakarta, Sudirman
                  </h1>
                </div>
                <p className="text-white text-[16px] font-light mt-4 leading-7">
                  Sudirman, a key thoroughfare in Jakarta, Indonesia, is named
                  after national hero General Sudirman. Running through the
                  heart of the city, it serves as a major commercial hub and
                  central business district (CBD).
                </p>
                <Button
                  children
                  className="button-outline-white-black w-fit mt-8"
                  onClick={onUnderDevelopment}
                >
                  <h1>Our Location in Jakarta</h1>
                  <BsArrowUpRight />
                </Button>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              className="flex flex-col relative h-[450px] w-full items-center justify-center shadow-g-sm group overflow-hidden rounded-3xl"
            >
              <img
                src={BgSurabaya}
                alt=""
                className="w-full h-full rounded-3xl object-cover group-hover:scale-110 transition-all"
              />

              <div className="absolute flex flex-col p-8">
                <div className="flex gap-x-3 items-start justify-start">
                  <img
                    src={IconAnagata}
                    alt="icon-anagata"
                    className="h-6 w-fit object-contain"
                  />
                  <h1 className="text-[18px] font-bold text-white">
                    Surabaya, East Java
                  </h1>
                </div>
                <p className="text-white text-[16px] font-light mt-4 leading-7">
                  Anagata’s East Indonesian desk in Surabaya, East Java is a
                  strategic hub connecting East Indonesia to key developments,
                  including Ibu Kota Nusantara (IKN), providing legal expertise
                  to support regional growth.
                </p>
                <Button
                  children
                  className="button-outline-white-black w-fit mt-8"
                  onClick={onUnderDevelopment}
                >
                  <h1>Our Location in Surabaya</h1>
                  <BsArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contact Us */}
        <section
          id="section-contact-us"
          className="bg-ang-prm-red w-full h-[50rem] -mt-[45rem] pt-[41rem] px-6 pb-[28rem]"
        >
          <div
            data-aos="fade-up"
            className="h-[1px] w-full bg-white my-4 mb-16"
          ></div>

          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
            className="flex w-full h-[320px] rounded-3xl shadow-g-sm relative"
          >
            <div className="absolute w-full h-full bg-black/30 rounded-3xl"></div>
            <img
              src={BgContactUs}
              alt="bg-contact-us"
              className="w-full h-full object-cover rounded-3xl"
            />

            <div className="absolute flex flex-col gap-y-2 w-full h-full items-center justify-center p-4">
              <div className="flex gap-x-4 items-center w-full justify-center">
                <img src={IconAnagata} alt="icon-anagata" className="h-5" />
                <h1 className="text-white text-[16px]">Contact Us</h1>
              </div>
              <h1 className="font-bold text-[24px] text-white text-center leading-9">
                Reach out today—your future problem solver is just a call or
                click away.
              </h1>
              <div className="flex gap-x-2 mt-4">
                <Button
                  onClick={onUnderDevelopment}
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

        {/* Footer Content */}
        <section
          id="footer-content"
          className="w-full flex bg-ang-prm-black h-fit px-6 pb-12 pt-12"
        >
          <div className="flex flex-col gap-x-32 w-full text-white items-start justify-center gap-y-4">
            <div>
              <img
                src={WhiteLogo}
                alt=""
                className="h-11 mt-2 object-contain"
              />
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
      </MainLayout>

      <Drawer
        children
        size="100vw"
        open={drawerPeople}
        onClose={() => setDrawerPeople(false)}
        placement="right"
        transition={{ type: "tween", duration: 0.5 }}
        className="fixed justify-end w-screen bg-transparent z-50 h-screen"
        onScroll={false}
      >
        <div className="w-full bg-white h-full items-start fixed flex p-4 overflow-scroll gap-x-6 flex-col">
          {/* Right Side */}
          <div className="flex flex-col gap-y-4">
            <IoIosCloseCircleOutline
              className="size-10 text-gray-500 hover:text-ang-prm-black transition-all cursor-pointer"
              onClick={() => setDrawerPeople(false)}
            />

            <img
              src={dataKeyPeople[indexPeople].photo}
              alt="profile-picture"
              className="rounded-3xl size-[25rem] object-cover"
            />

            <div className="h-[1px] w-full bg-gray-300 my-6"></div>

            <div className="flex flex-col">
              <h1 className="text-[40px] font-semibold leading-[2.8rem]">
                {dataKeyPeople[indexPeople].name}
              </h1>
              <h1 className="text-[20px] text-ang-prm-red font-bold mt-2">
                {dataKeyPeople[indexPeople].title}
              </h1>
            </div>

            {dataKeyPeople[indexPeople].award == true && (
              <>
                <div className="h-[1px] w-full bg-gray-300 my-4"></div>
                <div className="flex flex-col gap-y-4 w-full">
                  <div className="flex gap-x-2 items-center w-full justify-between">
                    <div className="w-full flex justify-center items-center">
                      <img
                        src={Award1}
                        alt=""
                        className="h-14 object-contain"
                      />
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <img
                        src={Award2}
                        alt=""
                        className="h-14 object-contain"
                      />
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <img
                        src={Award3}
                        alt=""
                        className="h-14 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center w-full justify-between">
                    <div className="w-full flex justify-center items-center">
                      <img
                        src={Award5}
                        alt=""
                        className="h-16 object-contain"
                      />
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <img
                        src={Award7}
                        alt=""
                        className="h-14 object-contain"
                      />
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <img
                        src={Award6}
                        alt=""
                        className="h-14 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="h-[1px] w-full bg-gray-300 my-6"></div>

            <div className="flex flex-col gap-y-4 w-full justify-start">
              <div className="flex gap-x-2 items-center cursor-pointer hover:underline transition-all font-inter text-ang-prm-text">
                <AiFillLinkedin className="size-6" />
                {dataKeyPeople[indexPeople].linkedin}
              </div>
              <div className="flex gap-x-2 items-center cursor-pointer hover:underline transition-all font-inter text-ang-prm-text">
                <HiMail className="size-6" />
                {dataKeyPeople[indexPeople].email}
              </div>
              <div className="flex gap-x-2 items-center cursor-pointer hover:underline transition-all font-inter text-ang-prm-text">
                <BsTelephoneFill className="size-5 ml-1" />
                {dataKeyPeople[indexPeople].phoneNumber}
              </div>
            </div>

            <div className="h-[1px] w-full bg-gray-300 my-6"></div>
          </div>

          <div className="flex flex-col gap-y-2 items-start w-fit justify-start pb-[4rem]">
            <p
              dangerouslySetInnerHTML={{
                __html: dataKeyPeople[indexPeople].description,
              }}
              className="font-light mt-8 pr-6 text-[16px] leading-7 text-ang-prm-text font-inter"
            ></p>

            <div className="h-[1px] w-full bg-gray-400 mt-12 mb-9"></div>

            <div className="flex flex-col gap-y-4 w-full">
              <h1 className="font-semibold text-[24px] mb-3">Education:</h1>
              <div className="flex flex-col gap-x-3 gap-y-4 text-ang-prm-text">
                {dataKeyPeople[indexPeople].education.map((data, index) => (
                  <div
                    key={index}
                    className="flex gap-x-3 items-start relative"
                  >
                    <GiPlainCircle className="size-2 text-ang-prm-red absolute ml-1 mt-2" />
                    <h1 className="pl-6">{data}</h1>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[1px] w-full bg-gray-400 my-12"></div>

            <div className="flex flex-col gap-y-4 w-full">
              <h1 className="font-semibold text-[24px] mb-3">Expertise:</h1>
              <div className="flex flex-wrap gap-x-3 gap-y-4">
                {dataKeyPeople[indexPeople].keyPractices.map((data, index) => (
                  <div
                    key={index}
                    className="practices-border text-ang-prm-text"
                  >
                    {data}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileHomePage;
