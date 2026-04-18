import { imageDummy, logoDummy } from "../../../assets/dummy/export-assest";
import { BsArrowUpRight, BsArrowDownCircle, BsArrowLeftCircle, BsArrowUpCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import MainLayout from "../../../components/layout/MainLayout";
import Header from "../../../components/ui/Header";
import IconAnagata from "../../../assets/logo/icon_logo.png";
import { Button } from "@material-tailwind/react";
import "aos/dist/aos.css";
import {
  Award1,
  Award10,
  Award11,
  Award12,
  Award2,
  Award3,
  Award5,
  Award6,
  Award7,
  Award8,
  Award9,
} from "../assets/export-assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Aos from "aos";
import SeoHelmet from "../../../components/layout/SeoHelmet";
import { useFetchPosts } from "../../../stores/mainAction";
import { useDispatch } from "react-redux";
import MobileHomePage from "./MobileHomePage";
import Footer from "../../../components/ui/Footer";
import DrawerPeople from "../../../components/ui/DrawerPeople";
import SliderText from "../../../components/ui/SliderText";
import ContactUs from "../../../components/ui/ContactUs";
import { dataKeyPeople } from "../../../constant/dataKeyPeople";
import { dataSupportPeople } from "../../../constant/dataSupportPeople";
import { setDrawerPeople } from "../../../stores/mainSlices";
import { dataSliderHome } from "../../../constant/dataSlider";
import "swiper/css";
import "swiper/css/navigation";

const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const HomePage = () => {
  const [open, setOpen] = useState(1);

  const dispatch = useDispatch();
  const swiperRef = useRef(null);
  const { data, isSuccess } = useFetchPosts();
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    return () => Aos.refresh();
  }, []);

  useEffect(() => {
    const swiperInstance = swiperRef?.current?.swiper;
    return () => {
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, [data]);

  return (
    <>
      <SeoHelmet title="Anagata Law Firm" description={`Delivering strategic legal solutions with global experience`} />

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
                            <SliderText title={slide?.content?.title} subtitle={slide?.content?.subtitle} />
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
                                  onClick={() => navigate("/news-and-update/" + data?.slug)}
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
        <section id="our-firm-section" className="bg-ang-prm-blue w-full h-fit pt-[14rem] px-24 pb-[6rem]">
          <div className="h-[0.5px] w-full bg-white"></div>

          {/* Our Firm Content */}
          <div data-aos="fade-up" data-aos-duration="700" className="flex w-full gap-x-20 items-start mt-14">
            <div
              onClick={() => navigate("/our-firm")}
              className="flex gap-x-4 items-center w-fit pt-2 hover:underline text-white  transition-all cursor-pointer"
            >
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="font-subtitle">Our Firm</h1>
              <BsArrowUpRight className="size-5" />
            </div>

            <div className="flex flex-col gap-y-8 flex-1">
              <h1 className="text-white text-[42px] max-w-[90%]">
                At Anagata, we understand the complexities of today's business landscape.
              </h1>

              <h1 className="text-white text-[20px] font-light leading-9">
                Our team of experienced attorneys provides comprehensive legal strategies tailored to support growth and
                navigate complex challenges. We serve a diverse clientele, from startups laying their legal foundations to
                multinational corporations requiring sophisticated counsel.
              </h1>

              <Button children onClick={() => navigate("/our-success-stories")} className="button-outline-white w-fit mt-4">
                <h1 className="text-[1.1rem]">Our Client Success Stories</h1>
                <BsArrowUpRight />
              </Button>

              {/* Statistic Section */}
              {/* <div className="flex gap-x-12 text-white flex-wrap">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col items-start"
                >
                  <h1 className="text-[12rem]">
                    <AnimatedCounter value={95} suffix="%" />
                  </h1>
                  <h4 className="text-[1.5rem] font-light">Client Success Rate</h4>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col items-start"
                >
                  <h1 className="text-[12rem]">
                    <AnimatedCounter value={9} suffix="/10" />
                  </h1>
                  <h4 className="text-[1.5rem] font-light">Client Recommend</h4>
                </motion.div>
              </div> */}
            </div>
          </div>

          {/* <div className="flex flex-col w-full items-center justify-center mt-20">
            <div className="flex gap-x-4 w-full justify-center items-center">
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="text-white text-[24px] font-sans font-light">Our Happy Client</h1>
            </div>

            <div className="flex gap-10 flex-wrap items-center justify-center mt-14">
              {Array.from({ length: 8 }).map((_, index) => {
                return <img key={"logo-dummy-" + index} src={logoDummy.Client1} alt="logo-dummy" className="" />;
              })}
            </div>

            <Button children onClick={() => navigate("/our-success-stories")} className="button-outline-white w-fit mt-20 ">
              <h1 className="text-[1.1rem]">Discover Their Success Story</h1>
              <BsArrowUpRight />
            </Button>
          </div> */}
        </section>

        {/* Why Choose Anagata Content */}
        <section id="why-choose-anagata" className="w-full h-fit px-24 pb-[8rem] mt-12">
          <div data-aos="fade-up" data-aos-duration="1000" className="flex w-full gap-x-20 items-start mt-8 flex-col">
            <div data-aos="fade-up" data-aos-delay="300" className="flex w-full justify-center items-center gap-x-4">
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="text-ang-prm-black text-[24px] font-sans font-light">Accolades</h1>
            </div>

            <div
              data-aos="fade-up"
              data-aos-offset="150"
              className="flex w-full items-center justify-center mt-12 flex-wrap gap-x-12 gap-y-5"
            >
              <img data-aos="fade-up" src={Award1} alt="" className="h-32" />
              <img data-aos="fade-up" data-aos-delay="100" src={Award2} alt="" className="h-32" />
              <img data-aos="fade-up" data-aos-delay="200" src={Award3} alt="" className="h-32" />
              <img data-aos="fade-up" data-aos-delay="300" src={Award5} alt="" className="h-40" />
              <img data-aos="fade-up" data-aos-delay="400" src={Award7} alt="" className="h-36" />
              <img data-aos="fade-up" data-aos-delay="500" src={Award6} alt="" className="h-32" />
              <img data-aos="fade-up" data-aos-delay="500" src={Award8} alt="" className="h-36" />
              <img data-aos="fade-up" data-aos-delay="500" src={Award9} alt="" className="h-36 -mx-4" />
              <img data-aos="fade-up" data-aos-delay="500" src={Award10} alt="" className="h-36" />
              <img data-aos="fade-up" data-aos-delay="500" src={Award11} alt="" className="w-[11rem] -ml-4" />
              <img data-aos="fade-up" data-aos-delay="500" src={Award12} alt="" className="w-[12rem] -ml-12" />
            </div>

            <div data-aos="fade-up" className="w-full justify-center flex mt-20">
              <Button onClick={() => navigate("/our-practice-areas")} children className="button-outline-red-2 w-fit">
                <h1>Discover Our Practice Areas</h1>
                <BsArrowUpRight />
              </Button>
            </div>
          </div>
        </section>

        {/* Section Our Network */}
        <section id="section-our-network" className="bg-gray-900 w-full h-fit pt-[4rem] px-24 pb-[7rem] flex flex-col">
          <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="100" className="flex w-full gap-x-20 items-start">
            <div
              onClick={() => navigate("/our-network")}
              className="flex gap-x-4 items-center w-fit pt-2 hover:underline text-white  transition-all cursor-pointer"
            >
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="font-subtitle">Network</h1>
              <BsArrowUpRight className="size-5" />
            </div>

            <div className="flex flex-col gap-y-8 flex-1">
              <h1 className="text-white text-[42px] max-w-[90%] font-light">
                At Anagata, we strengthen the legal landscape through strategic collaboration.
              </h1>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            className="grid grid-cols-2 mt-20 gap-x-12 text-white leading-loose text-[1.2rem] font-light"
          >
            <div className="relative">
              <img src={imageDummy.NetworkDummy} alt="image-network" className="" />
              <div className="absolute inset-0 flex items-start justify-end p-4 flex-col">
                <span className="bg-white/50 text-ang-prm-blackbg bg-opacity-50 pl-4 pr-20 py-2 rounded-lg flex flex-col">
                  <h4 className="text-[1.3rem] font-semibold">Rubicon Collective</h4>
                  <h5 className="text-[1rem] -mt-2.5 font-light">An alliance of independent law firms</h5>
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-start gap-y-2">
              <p>
                We are aligned with a consortium of independent international firms, enabling us to combine global reach with
                the agility of local practice, ensuring clients receive informed, consistent, and strategic legal counsel
                worldwide.
              </p>

              <Button
                children
                onClick={() => navigate("/our-network/rubicon-collective")}
                className="button-outline-white-black-2 w-fit mt-5 text-[20px]"
              >
                <span className="text-[1rem]">Learn More</span>
                <BsArrowUpRight />
              </Button>
            </div>
          </div>
        </section>

        {/* Section Our People V2 */}
        <section id="section-our-people" className="bg-ang-prm-blackbg w-full h-fit pt-[4rem] px-24 pb-[7rem] flex flex-col">
          <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="100" className="flex w-full gap-x-20 items-start">
            <div
              onClick={() => navigate("/our-people")}
              className="flex gap-x-4 items-center w-fit pt-2 hover:underline text-white  transition-all cursor-pointer"
            >
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="font-subtitle">People</h1>
              <BsArrowUpRight className="size-5" />
            </div>

            <div className="flex flex-col gap-y-8 flex-1">
              <h1 className="text-white text-[42px] max-w-[90%] font-light">
                Our lawyers are renowned in their practice areas, each bringing practical solutions.
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-10">
            {dataKeyPeople.map((data, index) => {
              return (
                data?.seeProfile && (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    onClick={() => {
                      dispatch(
                        setDrawerPeople({
                          drawer: true,
                          indexPeople: index,
                        })
                      );
                    }}
                  >
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[90%] bg-white bg-opacity-80 flex cursor-pointer flex-col items-start pl-4 pr-1 py-4 rounded-lg text-gray-900">
                      <h1 className="font-bold text-lg text-left">{data?.name}</h1>
                      <p className="font-light text-left text-[0.85rem]">{data?.title}</p>
                    </div>
                    <img src={data?.photo} alt="" className="rounded-lg w-full h-auto" />
                  </div>
                )
              );
            })}
          </div>
          <div data-aos="fade-up" data-aos-offset="100" className="flex flex-col gap-y-1 mt-20">
            <h1 className="text-[24px] text-white font-bold pl-3 pb-3">Other Highly Motivated Individuals</h1>
            <div className="w-full pl-3 pb-2">
              <div className="h-[0.8px] w-full bg-white"></div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-offset="100" className="w-full grid grid-cols-3 pl-3 py-10 text-white gap-y-8">
            {dataSupportPeople?.map((data, index) => {
              return (
                data?.category === 1 && (
                  <div key={"support-people-2" + index} className="flex flex-col gap-y-2">
                    <h1 className="text-[24px]">{data?.name}</h1>
                    <h1 className="font-light">{data?.title}</h1>
                  </div>
                )
              );
            })}
          </div>
          <div data-aos="fade-up" data-aos-offset="100" className="w-full pl-3 pb-2">
            <div className="h-[0.8px] w-full bg-white"></div>
          </div>
          <div data-aos="fade-up" data-aos-offset="100" className="w-full grid grid-cols-3 pl-3 py-10 text-white gap-y-8">
            {dataSupportPeople?.map((data, index) => {
              return (
                data?.category === 2 && (
                  <div key={"support-people-2" + index} className="flex flex-col gap-y-2">
                    <h1 className="text-[24px]">{data?.name}</h1>
                    <h1 className="font-light">{data?.title}</h1>
                  </div>
                )
              );
            })}
          </div>
        </section>

        <section
          id="other-practices-section"
          className="w-full flex bg-ang-prm-red px-4 lg:px-24 h-fit flex-col gap-y-6 py-32"
        >
          <div data-aos="fade-up" data-aos-offset="100" className="w-full relative">
            <ContactUs noPadding />
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
