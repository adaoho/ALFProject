import { MdClose } from "react-icons/md";
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
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import Header from "../../../components/ui/Header";
import IconAnagata from "../../../assets/logo/icon_logo.png";
import { Button, Drawer } from "@material-tailwind/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import "aos/dist/aos.css";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Aos from "aos";
import SeoHelmet from "../../../components/layout/SeoHelmet";
import { useFetchPosts } from "../../../stores/mainAction";
import { useDispatch, useSelector } from "react-redux";
import MobileHomePage from "./MobileHomePage";
import Footer from "../../../components/ui/Footer";
import { dataKeyPeople } from "../../../constant/dataKeyPeople";
import { dataPracticeAreas } from "../../../constant/dataPracticeAreas";
import { dataSupportPeople } from "../../../constant/dataSupportPeople";
import { setDrawerPeople } from "../../../stores/mainSlices";
import DrawerPeople from "../../../components/ui/DrawerPeople";
import { dataSliderHome } from "../../../constant/dataSlider";
import SliderText from "../../../components/ui/SliderText";

const HomePage = () => {
  const [open, setOpen] = useState(1);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [indexImage, setIndexImage] = useState(0);

  const dispatch = useDispatch();
  const swiperRef = useRef(null);
  const { data, isSuccess } = useFetchPosts();
  const navigate = useNavigate();
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  function Icon({ id, open }) {
    setTimeout(() => {
      Aos.refresh();
    }, 300);
    return <>{id === open ? <BiChevronUp /> : <BiChevronDown />}</>;
  }

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    return () => Aos.refresh();
  }, []);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    return () => {
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, [data]);

  return (
    <>
      <SeoHelmet
        title="Anagata Law Firm"
        description={`Delivering strategic legal solutions with global experience`}
      />

      <div className="hidden lg:block sticky top-0 z-30">
        <Header />
      </div>
      {/* Dekstop Version */}
      <MainLayout className={"hidden lg:flex"}>
        {/* Caraousel Section */}
        <section
          id="carousel-section"
          className="h-[537px] w-full px-24 flex justify-center items-center"
          data-aos="fade-up"
        >
          <div className="w-full rounded-3xl shadow-g-lg h-full mt-24 relative flex items-center justify-center">
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
              >
                {dataSliderHome?.map((slide, index) => {
                  return (
                    <SwiperSlide key={"dataslider" + index}>
                      <div className="relative w-full h-full">
                        <img
                          src={slide?.image}
                          alt={slide?.alt}
                          className="object-cover z-0 rounded-3xl absolute w-full h-full"
                        />
                        {slide?.content && (
                          <div className="absolute">
                            <SliderText
                              title={slide?.content?.title}
                              subtitle={slide?.content?.subtitle}
                            />
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  );
                })}

                <div className="absolute bottom-[13.5rem] left-[6rem] flex gap-x-4 z-20">
                  <BsArrowLeftCircle className="text-white size-8 main-prev cursor-pointer hover:text-ang-prm-red transition-all active:scale-90" />
                  <BsArrowRightCircle className="text-white size-8 main-next cursor-pointer hover:text-ang-prm-red transition-all active:scale-90" />
                </div>
              </Swiper>
            </div>

            {/* News Carousel */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-ang-prm-blue h-[17rem] w-[85%] absolute -bottom-24 rounded-3xl p-8 shadow-g-lg z-20"
            >
              <div className="flex w-full h-full justify-between items-center">
                {isSuccess ? (
                  <>
                    <Swiper
                      key={data?.length + "swiper-news"}
                      modules={[Navigation, Pagination, Autoplay]}
                      navigation={{
                        prevEl: ".news-prev",
                        nextEl: ".news-next",
                      }}
                      className="relative"
                      spaceBetween={40}
                      slidesPerView={1}
                      centeredSlides={true}
                      speed={1000}
                      loop={true}
                      autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      direction="vertical"
                    >
                      {data?.slice(0, 4)?.map((data, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <div className="flex gap-x-12 h-full float-start w-full">
                              <div className="w-[30rem] h-full flex justify-center items-center">
                                <img
                                  src={data?.featured_image_url}
                                  alt=""
                                  className="w-full h-full rounded-3xl object-cover bg-white"
                                />
                              </div>
                              <div className="flex flex-col gap-y-8 w-full justify-center">
                                <div className="flex flex-col gap-y-2">
                                  <h1
                                    dangerouslySetInnerHTML={{
                                      __html: data?.title?.rendered,
                                    }}
                                    className="text-[24px] text-white font-semibold max-w-[85%] truncate-twoline"
                                  />
                                  <h1
                                    dangerouslySetInnerHTML={{
                                      __html: data?.excerpt?.rendered,
                                    }}
                                    className="text-[13px] text-gray-500 font-light max-w-[85%] truncate-twoline leading-6"
                                  />
                                </div>

                                <Button
                                  onClick={() =>
                                    navigate("/news-and-update/" + data?.slug)
                                  }
                                  children
                                  className="button-outline-white w-48"
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

                    <div className="flex flex-col h-full items-center gap-y-4 justify-center text-white pr-4">
                      <BsArrowUpCircle className="text-white size-8 news-prev cursor-pointer hover:text-ang-prm-red transition-all active:scale-90" />
                      <BsArrowDownCircle className="text-white size-8 news-next cursor-pointer hover:text-ang-prm-red transition-all active:scale-90" />
                    </div>
                  </>
                ) : (
                  <div className="w-full flex justify-center items-center">
                    <div className="loader"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Red Accent Background */}
        <div
          className="bg-ang-prm-red h-[9rem] absolute top-[32rem] w-full -z-10"
          data-aos="fade-up"
          data-aos-delay="700"
        ></div>

        {/* Our Firm Content */}
        <section
          id="our-firm-section"
          className="bg-ang-prm-blue w-full h-fit pt-[14rem] px-24 pb-[10rem]"
        >
          <div className="h-[0.5px] w-full bg-white"></div>

          {/* Our Firm Content */}
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="flex w-full gap-x-20 items-start mt-14"
          >
            <div className="flex gap-x-4 items-center w-fit pt-2">
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="font-subtitle">Our Firm</h1>
            </div>

            <div className="flex flex-col gap-y-8 flex-1">
              <h1 className="text-white text-[42px] max-w-[90%]">
                At Anagata, we understand the complexities of today's business
                landscape.
              </h1>

              <h1 className="text-white text-[20px] font-light leading-9">
                Our team of experienced attorneys provides comprehensive legal
                strategies tailored to support growth and navigate complex
                challenges. We serve a diverse clientele, from startups laying
                their legal foundations to multinational corporations requiring
                sophisticated counsel.
              </h1>

              <Button
                children
                onClick={() => navigate("/our-firm")}
                className="button-outline-white w-fit mt-4"
              >
                <h1>Discover Our Firm</h1>
                <BsArrowUpRight />
              </Button>
            </div>
          </div>

          {/* Our Practice Areas */}
          <section
            data-aos="fade-up"
            data-aos-duration="700"
            id="our-practices-areas"
            className="w-full mt-[8rem] flex gap-x-2 "
          >
            <div className="relative">
              <div className="flex h-[35rem] sticky top-[10rem]">
                <div className="relative">
                  <div className="bg-gradient-to-t from-ang-prm-red/70 to-ang-prm-blue/30 w-full h-full absolute rounded-3xl z-10"></div>
                  <div className="bg-gray-900/70 absolute w-full h-full rounded-3xl"></div>
                  <img
                    src={dataPracticeAreas[indexImage]?.image}
                    alt=""
                    className="w-[35rem] h-[35rem] rounded-3xl object-cover"
                  />
                </div>

                <div className="absolute flex flex-col gap-y-4 p-[5rem] z-20">
                  <div className="flex gap-x-4 items-center">
                    <img src={IconAnagata} alt="icon-anagata" className="h-6" />
                    <h1 className="font-subtitle">Our Practice Areas</h1>
                  </div>

                  <h1 className="font-bold text-[42px] text-white">
                    Anagata offers capability and resources as a full services
                    firm
                  </h1>

                  <Button
                    onClick={() => navigate("/our-practice-areas")}
                    className="button-outline-white-black-2 w-fit mt-8"
                  >
                    <h1 className="text-[16px]">More Practice Areas</h1>
                    <BsArrowUpRight />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex-1 pl-14 pr-8 -mt-4 flex-col">
              <div className="flex flex-col gap-y-2 mb-4">
                <h1 className="text-ang-prm-red font-bold text-[32px]">
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
                      className={`text-white font-sans text-[30px] font-bold hover:text-gray-400`}
                    >
                      <h1
                        dangerouslySetInnerHTML={{ __html: data.title }}
                        className="max-w-[70%]"
                      ></h1>
                    </AccordionHeader>
                    <AccordionBody className="text-white font-extralight text-[18px] leading-8">
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            data.description.first_line +
                            data.description.second_line,
                        }}
                      ></p>

                      <Button
                        children
                        onClick={() =>
                          navigate("/our-practice-areas/" + data.slug)
                        }
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
          className="w-full h-fit px-24 pb-[8rem] mt-12"
        >
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex w-full gap-x-20 items-start mt-8 flex-col"
          >
            <div className="flex gap-x-4 w-full items-center">
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="text-ang-prm-black text-[24px] font-sans font-light">
                Why Choose Anagata
              </h1>
            </div>

            <div className="grid grid-cols-2 w-full mt-3 gap-7 pl-10">
              <div
                className=""
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="200"
              >
                <h1 className="text-[42px] font-light">
                  With the combination of decades of experience, <br /> Anagata
                  is ready to offer <br /> you solutions to all complex{" "}
                  <b className="text-ang-prm-red underline">legal matters.</b>
                </h1>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="500"
                className="bg-white shadow-g-sm w-full h-[20rem] rounded-3xl relative p-14"
              >
                <img
                  src={LogoAnagataWhySection}
                  alt=""
                  className="h-[12rem] absolute bottom-0 right-0 rounded-br-3xl"
                />
                <p className="text-ang-prm-black max-w-[60%] text-[20px] font-light">
                  Our local Lawyers, with International reach and exposure, are
                  well-equipped to help clients expand into established and
                  emerging markets.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="350"
                className="bg-white shadow-g-sm w-full h-[20rem] rounded-3xl relative p-14"
              >
                <img
                  src={LogoAnagataWhySection}
                  alt=""
                  className="h-[12rem] absolute bottom-0 right-0 rounded-br-3xl"
                />
                <p className="text-ang-prm-black max-w-[60%] text-[20px] font-light">
                  Anagata delivers client-centered legal excellence with
                  transparency, integrity, and innovation, staying aligned with
                  industry trends to remain relevant.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="350"
                data-aos-delay="300"
                className="bg-white shadow-g-sm w-full h-[20rem] rounded-3xl relative p-14"
              >
                <img
                  src={LogoAnagataWhySection}
                  alt=""
                  className="h-[12rem] absolute bottom-0 right-0 rounded-br-3xl"
                />
                <p className="text-ang-prm-black max-w-[60%] text-[20px] font-light">
                  Our team structure ensures effective communication between you
                  and your <br />
                  Partner directly, facilitating <br />
                  the achievement of your business goal.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="h-[1px] w-[97%] bg-ang-prm-black/30 mt-24 mb-16 ml-10"
            ></div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex w-full justify-center items-center gap-x-4"
            >
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="text-ang-prm-black text-[24px] font-sans font-light">
                Accolades
              </h1>
            </div>

            <div
              data-aos="fade-up"
              data-aos-offset="150"
              className="flex w-full items-center justify-between mt-12"
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
              {/* <img data-aos="fade-up"
              data-aos-delay="300" src={Award4} alt="" className="h-32" /> */}
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
            </div>

            <div
              data-aos="fade-up"
              className="w-full justify-center flex mt-20"
            >
              <Button
                onClick={() => navigate("/our-firm")}
                children
                className="button-outline-red-2 w-fit"
              >
                <h1>Discover Our Firm</h1>
                <BsArrowUpRight />
              </Button>
            </div>
          </div>
        </section>

        {/* Section Our People */}
        <section
          id="section-our-people"
          className="bg-ang-prm-blackbg w-full h-fit pt-[4rem] px-24 pb-[7rem] flex flex-col"
        >
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            className="flex w-full gap-x-20 items-start"
          >
            <div className="flex gap-x-4 items-center w-fit pt-2">
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="font-subtitle">Our People</h1>
            </div>

            <div className="flex flex-col gap-y-8 flex-1">
              <h1 className="text-white text-[42px] max-w-[90%] font-light">
                Our lawyers are renowned in their practice areas, each bringing.
              </h1>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            className="flex flex-col gap-y-1 mt-20"
          >
            <h1 className="text-[24px] text-white font-bold pl-3 pb-3">
              Our Key Practices
            </h1>
            <div className="w-full pl-3 pb-2">
              <div className="h-[0.8px] w-full bg-white"></div>
            </div>
          </div>

          {/* Section Each People */}
          <Swiper
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              468: { slidesPerView: 2 },
              724: { slidesPerView: 3 },
            }}
            className="relative mt-8"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              setSwiperIndex(swiper.realIndex);
            }}
          >
            {/* Profile People */}
            {dataKeyPeople.map((data, index) => {
              return (
                data?.seeProfile && (
                  <SwiperSlide key={index}>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-delay={`${index * 300}`}
                      className="flex flex-col w-[389px] h-fit gap-y-4"
                    >
                      <img
                        src={data?.photo}
                        alt=""
                        className="object-cover w-[389px] h-[380px] rounded-3xl"
                      />
                      <div className="flex flex-col">
                        <h1 className="font-bold text-white text-[24px]">
                          {data.name}
                        </h1>
                        <h1 className="font-normal text-[20px] text-ang-prm-red truncate-oneline">
                          {data.title}
                        </h1>
                      </div>
                      <p className="text-white font-extralight text-[16px] truncate-fiveline leading-6">
                        {data?.description}
                      </p>
                      <Button
                        onClick={() => {
                          dispatch(
                            setDrawerPeople({
                              drawer: true,
                              indexPeople: index,
                            })
                          );
                        }}
                        className="button-outline-white-black w-fit mt-5"
                      >
                        <h1>See full profile</h1>
                        <BsArrowUpRight />
                      </Button>
                    </div>
                  </SwiperSlide>
                )
              );
            })}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex w-full justify-between items-center gap-x-8 mt-12 px-4">
            <BsArrowLeftCircle className="swiper-prev size-10 text-white cursor-pointer" />
            <div className="flex-1 flex gap-x-5">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  id="dots-pagination"
                  className={`h-[1px] w-full cursor-pointer ${
                    swiperIndex === index ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => {
                    if (swiperRef.current) {
                      swiperRef.current.slideToLoop(index);
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
            <h1 className="text-[24px] text-white font-bold pl-3 pb-3">
              Other Highly Motivated Individuals
            </h1>
            <div className="w-full pl-3 pb-2">
              <div className="h-[0.8px] w-full bg-white"></div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="w-full grid grid-cols-3 pl-3 py-10 text-white gap-y-8"
          >
            {dataSupportPeople?.map((data, index) => {
              return (
                data?.category === 1 && (
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
            data-aos-offset="100"
            className="w-full pl-3 pb-2"
          >
            <div className="h-[0.8px] w-full bg-white"></div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="w-full grid grid-cols-3 pl-3 py-10 text-white gap-y-8"
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
            data-aos-offset="100"
            className="w-full flex justify-center items-center mt-12"
          >
            <Button
              children
              onClick={() => navigate("/our-people")}
              className="button-outline-white-black-2 w-fit mt-5 text-[20px]"
            >
              <h1>Discover More Our People</h1>
              <BsArrowUpRight />
            </Button>
          </div>
        </section>

        {/* Section Our Location */}
        <section
          id="section-our-location"
          className="bg-white w-full h-fit pt-[4rem] px-24 pb-[7rem] flex flex-col"
        >
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="flex w-full gap-x-20 items-start"
          >
            <div className="flex gap-x-4 items-center w-fit pt-2">
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="font-subtitle-black">Our Location</h1>
            </div>

            <div className="flex flex-col gap-y-8 flex-1">
              <h1 className="text-ang-prm-black text-[42px] max-w-[90%] font-light">
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

          <div className="w-full grid grid-cols-2 gap-8 mt-12">
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              className="flex flex-col relative h-[604px] w-full items-center justify-center shadow-g-sm group overflow-hidden rounded-3xl"
            >
              <img
                src={BgJakarta}
                alt=""
                className="w-full h-full rounded-3xl object-cover group-hover:scale-110 transition-all"
              />

              <div className="absolute flex flex-col p-10 xl:p-24">
                <img
                  src={IconAnagata}
                  alt="icon-anagata"
                  className="h-8 w-fit"
                />
                <h1 className="text-[38px] font-bold text-white">
                  Jakarta, Sudirman
                </h1>
                <p className="text-white text-[20px] font-light mt-4 leading-9">
                  Sudirman, a key thoroughfare in Jakarta, Indonesia, is named
                  after national hero General Sudirman. Running through the
                  heart of the city, it serves as a major commercial hub and
                  central business district (CBD).
                </p>
                <Button
                  children
                  className="button-outline-white-black w-fit mt-8"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/vK155Ge4cGQ8fxqH9",
                      "_blank"
                    )
                  }
                >
                  <h1>Discover Our Location in Jakarta</h1>
                  <BsArrowUpRight />
                </Button>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              className="flex flex-col relative h-[604px] w-full items-center justify-center shadow-g-sm group overflow-hidden rounded-3xl"
            >
              <img
                src={BgSurabaya}
                alt=""
                className="w-full h-full rounded-3xl object-cover group-hover:scale-110 transition-all"
              />

              <div className="absolute flex flex-col p-10 xl:p-24">
                <img
                  src={IconAnagata}
                  alt="icon-anagata"
                  className="h-8 w-fit"
                />
                <h1 className="text-[38px] font-bold text-white">
                  Surabaya, East Java
                </h1>
                <p className="text-white text-[20px] font-light mt-4 leading-9">
                  Anagata’s East Indonesian desk in Surabaya, East Java is a
                  strategic hub connecting East Indonesia to key developments,
                  including Ibu Kota Nusantara (IKN), providing legal expertise
                  to support regional growth.
                </p>
                <Button
                  children
                  className="button-outline-white-black w-fit mt-8"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/dK3ALQwRkTtbmjZw9",
                      "_blank"
                    )
                  }
                >
                  <h1>Discover Our Location in Surabaya</h1>
                  <BsArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contact Us */}
        <section
          id="section-contact-us"
          className="bg-ang-prm-red w-full h-[50rem] -mt-[27rem] pt-[25.8rem] px-24 pb-[28rem]"
        >
          <div
            data-aos="fade-up"
            className="h-[1px] w-full bg-white mb-12"
          ></div>

          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
            className="flex w-full h-[329px] rounded-3xl shadow-g-sm relative"
          >
            <div className="absolute w-full h-full bg-black/30 rounded-3xl"></div>
            <img
              src={BgContactUs}
              alt="bg-contact-us"
              className="w-full h-full object-cover rounded-3xl"
            />

            <div className="absolute flex flex-col gap-y-2 w-full h-full items-center justify-center">
              <div className="flex gap-x-4 items-center w-full justify-center">
                <img src={IconAnagata} alt="icon-anagata" className="h-6" />
                <h1 className="font-subtitle">Contact Us</h1>
              </div>
              <h1 className="font-bold text-[40px] text-white text-center leading-[3.5rem]">
                Reach out today—your future problem <br /> solver is just a call
                or click away.
              </h1>
              <div className="flex gap-x-2 mt-4">
                <Button
                  onClick={() => navigate("/contact-us")}
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

        <Footer />
      </MainLayout>

      <DrawerPeople />
      {/* Mobile Version Version */}
      <MobileHomePage />
    </>
  );
};

export default HomePage;
