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
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
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
import { imageDummy, logoDummy } from "../../../assets/dummy/export-assest";

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
        <section id="carousel-section" className="h-[300px] w-full px-4 flex justify-center items-center">
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
                            <SliderText title={slide?.content?.title} subtitle={slide?.content?.subtitle} />
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
                                <img src={data?.featured_image_url} alt="" className="w-full h-full object-cover bg-white" />
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
                                  onClick={() => navigate("/news-and-update/" + data?.slug)}
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
        <section id="our-firm-section" className="bg-ang-prm-blue w-full h-fit pt-[30rem] px-6 pb-[5rem]">
          <div className="h-[1px] w-full bg-white"></div>

          {/* Our Firm Content */}
          <div className="flex w-full gap-y-4 items-start mt-14 flex-col">
            <div
              onClick={() => navigate("/our-firm")}
              className="flex gap-x-4 items-center w-fit pt-2 hover:underline text-white  transition-all cursor-pointer"
            >
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className=" text-white text-[1.2rem]">Our Firm</h1>
              <BsArrowUpRight className="size-5" />
            </div>

            <div className="flex flex-col gap-y-4 flex-1">
              <h1 className="text-white text-[32px] w-full">
                At Anagata, <br /> we understand the complexities of today's business landscape.
              </h1>

              <h1 className="text-white text-[16px] font-light leading-9">
                Our team of experienced attorneys provides comprehensive legal strategies tailored to support growth and
                navigate complex challenges. We serve a diverse clientele, from startups laying their legal foundations to
                multinational corporations requiring sophisticated counsel.
              </h1>
            </div>

            <Button children onClick={() => navigate("/our-success-stories")} className="button-outline-white w-fit mt-6">
              <h1 className="text-[1.1rem]">Our Client Success Stories</h1>
              <BsArrowUpRight />
            </Button>
          </div>

          {/* Statistics */}
          {/* <div className="flex gap-x-12 text-white flex-wrap">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-start"
            >
              <h1 className="text-[9rem]">
                <AnimatedCounter value={95} suffix="%" />
              </h1>
              <h4 className="text-[1rem] font-light">Client Success Rate</h4>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-start"
            >
              <h1 className="text-[9rem]">
                <AnimatedCounter value={9} suffix="/10" />
              </h1>
              <h4 className="text-[1rem] font-light">Client Recommend</h4>
            </motion.div>
          </div> */}

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
        <section id="why-choose-anagata" className="w-full h-fit px-6 pb-[8rem] mt-12">
          <div className="flex w-full gap-x-20 items-start mt-8 flex-col">
            <div data-aos="fade-up" data-aos-delay="300" className="flex w-full justify-center items-center gap-x-4">
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="text-ang-prm-black text-[18px] font-sans font-light">Accolades</h1>
            </div>

            <div
              data-aos="fade-up"
              data-aos-offset="150"
              className="grid grid-cols-3 md:flex w-full items-center justify-between mt-12 gap-10"
            >
              <div className="flex justify-center items-center">
                <img data-aos="fade-up" src={Award1} alt="" className="h-20 object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <img data-aos="fade-up" data-aos-delay="100" src={Award2} alt="" className="h-20 object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <img data-aos="fade-up" data-aos-delay="200" src={Award3} alt="" className="h-20 object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <img data-aos="fade-up" data-aos-delay="300" src={Award5} alt="" className="h-28 object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <img data-aos="fade-up" data-aos-delay="400" src={Award7} alt="" className="h-24 object-contain" />
              </div>
              <div className="flex justify-center items-center">
                <img data-aos="fade-up" data-aos-delay="500" src={Award6} alt="" className="h-20 object-contain" />
              </div>
              <div className="flex w-full col-span-3 justify-center items-center gap-x-8">
                <img data-aos="fade-up" data-aos-delay="400" src={Award8} alt="" className="h-20 object-contain" />
                <img data-aos="fade-up" data-aos-delay="400" src={Award9} alt="" className="h-20 object-contain -mx-3" />
                <img data-aos="fade-up" data-aos-delay="400" src={Award10} alt="" className="h-20 object-contain" />
              </div>
              <div className="flex w-full col-span-3 justify-center items-center gap-x-8 -mt-6">
                <img data-aos="fade-up" data-aos-delay="500" src={Award11} alt="" className="w-[7.3rem]" />
                <img data-aos="fade-up" data-aos-delay="500" src={Award12} alt="" className="w-[7.3rem] -ml-7" />
              </div>
            </div>

            <div data-aos="fade-up" className="w-full justify-center flex mt-20">
              <Button onClick={() => navigate("/our-practice-areas")} children className="button-outline-red-2 w-fit">
                <h1 className="text-[16px]">Discover Our Practice Areas</h1>
                <BsArrowUpRight />
              </Button>
            </div>
          </div>
        </section>

        {/* Section Our Network */}
        <section id="section-our-network" className="bg-gray-900 w-full h-fit pt-12 px-4 pb-14 flex flex-col">
          <div
            data-aos="fade-up"
            data-aos-offset="60"
            data-aos-delay="80"
            className="flex flex-col w-full gap-y-3 items-start"
          >
            <div
              onClick={() => navigate("/our-network")}
              className="flex gap-x-2 items-center w-fit pt-1 hover:underline text-white transition-all cursor-pointer"
            >
              <img src={IconAnagata} alt="icon-anagata" className="h-5" />
              <h1 className="font-subtitle text-[1.2rem]">Network</h1>
              <BsArrowUpRight className="size-4" />
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
              <h1 className="text-white text-xl font-light leading-snug">
                At Anagata, we strengthen the legal landscape through strategic collaboration.
              </h1>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="60"
            data-aos-delay="80"
            className="flex flex-col mt-10 gap-y-6 text-white leading-relaxed text-sm font-light"
          >
            <div className="relative w-full">
              <img
                src={imageDummy.NetworkDummy}
                alt="image-network"
                className="w-full object-cover rounded-xl"
                style={{ maxHeight: 168 }}
              />
              <div className="absolute inset-0 flex items-end justify-start p-3">
                <span className="bg-white/70 text-ang-prm-blackbg px-3 py-[6px] rounded-lg flex flex-col backdrop-blur-sm">
                  <h4 className="text-lg font-semibold">Rubicon Collective</h4>
                  <h5 className="text-xs -mt-1.5 font-light">An alliance of independent law firms</h5>
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-start gap-y-3">
              <p>
                We are aligned with a consortium of independent international firms, enabling us to combine global reach with
                the agility of local practice, ensuring clients receive informed, consistent, and strategic legal counsel
                worldwide.
              </p>

              <Button
                onClick={() => navigate("/our-network/rubicon-collective")}
                className="button-outline-white-black-2 w-fit mt-4 px-4 py-2 text-base flex items-center gap-x-2"
              >
                <span className="text-[0.9rem]">Learn More</span>
                <BsArrowUpRight />
              </Button>
            </div>
          </div>
        </section>

        {/* Section Our People */}
        <section id="section-our-people" className="bg-ang-prm-blackbg w-full h-fit pt-[4rem] px-6 pb-[7rem] flex flex-col">
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            className="flex flex-col w-full gap-y-6 items-start"
          >
            <div
              onClick={() => navigate("/our-people")}
              className="flex gap-x-3 items-center w-fit pt-2 hover:underline text-white transition-all cursor-pointer"
            >
              <img src={IconAnagata} alt="icon-anagata" className="h-6" />
              <h1 className="font-subtitle text-lg">People</h1>
              <BsArrowUpRight className="size-5" />
            </div>

            <div className="flex flex-col gap-y-4 w-full">
              <h1 className="text-white text-[1.8rem] font-light leading-snug w-full">
                Our lawyers are renowned in their practice areas, each bringing practical solutions.
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8 w-full">
            {dataKeyPeople.map((data, index) => {
              return (
                data?.seeProfile && (
                  <div
                    key={index}
                    className="relative group cursor-pointer overflow-hidden"
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
                    <img src={data?.photo} alt="" className="rounded-lg w-full h-auto aspect-[3/4] object-cover" />
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[92%] bg-white/80 flex cursor-pointer flex-col items-start pl-3 pr-1 py-3 rounded-lg text-gray-900 shadow-md backdrop-blur-sm">
                      <h1 className="font-bold text-base text-left truncate w-full">{data?.name}</h1>
                      <p className="font-light text-left text-xs w-full truncate">{data?.title}</p>
                    </div>
                  </div>
                )
              );
            })}
          </div>

          <div data-aos="fade-up" data-aos-offset="100" className="flex flex-col gap-y-1 mt-20">
            <h1 className="text-[24px] text-white font-bold pb-3">Other Highly Motivated Individuals</h1>
            <div className="w-full pb-2">
              <div className="h-[0.8px] w-full bg-white"></div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-offset="100" className="w-full grid grid-cols-1 py-8 gap-y-3">
            {dataSupportPeople?.map((data, index) => {
              return (
                data?.category === 1 && (
                  <div key={"support-people-1" + index} className="flex gap-x-4 text-white items-center">
                    <h1 className="text-[20px]">⁠{data?.name}</h1>
                    <h1>-</h1>
                    <h1 className="font-light text-gray-400">{data?.title}</h1>
                  </div>
                )
              );
            })}
          </div>
          <div data-aos="fade-up" data-aos-offset="100" className="w-full pl-3 pb-2">
            <div className="h-[0.8px] w-full bg-white"></div>
          </div>
          <div data-aos="fade-up" data-aos-offset="100" className="w-full grid grid-cols-1 pt-8 pb-4 gap-y-3">
            {dataSupportPeople?.map((data, index) => {
              return (
                data?.category === 2 && (
                  <div key={"support-people-1" + index} className="flex gap-x-4 text-white items-center flex-wrap">
                    <h1 className="text-[20px]">⁠{data?.name}</h1>
                    <h1>-</h1>
                    <h1 className="font-light text-gray-400">{data?.title}</h1>
                  </div>
                )
              );
            })}
          </div>
        </section>

        {/* Section Contact Us */}
        <section
          id="other-practices-section"
          className="w-full flex bg-ang-prm-red px-4 lg:px-24 h-fit flex-col gap-y-6 py-6"
        >
          <div data-aos="fade-up" data-aos-offset="100" className="w-full relative">
            <ContactUs noPadding />
          </div>
        </section>

        {/* Footer Content */}
        <Footer />
      </MainLayout>

      <DrawerPeople />
    </>
  );
};

export default MobileHomePage;
