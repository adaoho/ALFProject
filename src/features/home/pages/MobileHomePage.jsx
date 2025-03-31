import React, { useEffect, useRef, useState } from "react";
import IconAnagata from "../../../assets/logo/icon_logo.png";
import MainLayout from "../../../components/layout/MainLayout";
import Header from "../../../components/ui/Header";
import Aos from "aos";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsArrowUpRight, BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { Button } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useFetchPosts } from "../../../stores/mainAction";
import { useDispatch, useSelector } from "react-redux";
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
  Award5,
  Award6,
  Award7,
  BgJakarta,
  BgSurabaya,
  LogoAnagataWhySection,
} from "../assets/export-assets";
import { dataKeyPeople } from "../../../constant/dataKeyPeople";
import { dataSliderHome } from "../../../constant/dataSlider";
import { dataPracticeAreas } from "../../../constant/dataPracticeAreas";
import { setDrawerPeople } from "../../../stores/mainSlices";
import { dataSupportPeople } from "../../../constant/dataSupportPeople";
import DrawerPeople from "../../../components/ui/DrawerPeople";
import SliderText from "../../../components/ui/SliderText";
import ContactUs from "../../../components/ui/ContactUs";
import Footer from "../../../components/ui/Footer";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";

const MobileHomePage = () => {
  const dispatch = useDispatch();
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(1);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [indexImage, setIndexImage] = useState(0);

  const { data, isSuccess } = useFetchPosts();
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const { drawerPeople } = useSelector((state) => state.main);

  function Icon({ id, open }) {
    setTimeout(() => {
      Aos.refresh();
    }, 300);
    return <>{id === open ? <BiChevronUp /> : <BiChevronDown />}</>;
  }

  useEffect(() => {
    document.body.style.overflow = drawerPeople?.drawer ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [drawerPeople?.drawer]);

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
              </Swiper>
            </div>

            {/* News Carousel */}
            <div className="bg-ang-prm-blue h-[28rem] w-[90%] absolute -bottom-[25rem] rounded-3xl p-8 shadow-g-lg z-20">
              <div className="flex flex-col w-full h-full justify-between items-center">
                {isSuccess ? (
                  <>
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
                              <div className="w-full h-[50%] flex justify-center items-center rounded-3xl overflow-hidden">
                                <img
                                  src={data?.featured_image_url}
                                  alt=""
                                  className="w-full h-full object-cover bg-white"
                                />
                              </div>
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
                  </>
                ) : (
                  <>
                    <div className="w-full flex justify-center items-center h-full">
                      <div className="loader"></div>
                    </div>
                  </>
                )}
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
            id="our-practices-areas"
            className="w-full mt-[6rem] flex gap-x-2 flex-col"
          >
            <div className="flex h-[16rem] justify-center items-center">
              <div className="relative w-full">
                <div className="bg-gradient-to-t from-ang-prm-red/70 to-ang-prm-blue/30 w-full h-full absolute rounded-3xl z-10"></div>
                <div className="bg-gray-900/70 absolute w-full h-full rounded-3xl"></div>
                <img
                  src={dataPracticeAreas[indexImage]?.image}
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
                  onClick={() => navigate("/our-practice-areas")}
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
                onClick={() => navigate("/our-firm")}
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
            {dataKeyPeople.map((data, index) => {
              return (
                data?.seeProfile && (
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
            {dataSupportPeople?.map((data, index) => {
              return (
                data?.category === 1 && (
                  <div
                    key={"support-people-1" + index}
                    className="flex gap-x-4 text-white items-center"
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
            className="w-full pl-3 pb-2"
          >
            <div className="h-[0.8px] w-full bg-white"></div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            className="w-full grid grid-cols-1 pt-8 pb-4 gap-y-3"
          >
            {dataSupportPeople?.map((data, index) => {
              return (
                data?.category === 2 && (
                  <div
                    key={"support-people-1" + index}
                    className="flex gap-x-4 text-white items-center"
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
            className="w-full flex justify-center items-center mt-12"
          >
            <Button
              children
              onClick={() => navigate("/our-people")}
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
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/vK155Ge4cGQ8fxqH9",
                      "_blank"
                    )
                  }
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
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/dK3ALQwRkTtbmjZw9",
                      "_blank"
                    )
                  }
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

          <ContactUs noPadding={true} className={"-my-10"} />
        </section>

        {/* Footer Content */}
        <Footer />
      </MainLayout>

      <DrawerPeople />
    </>
  );
};

export default MobileHomePage;
