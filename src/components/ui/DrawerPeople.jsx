import React, { useEffect, useRef, useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setDrawerPeople } from "../../stores/mainSlices";
import { GiPlainCircle } from "react-icons/gi";
import { Drawer } from "@material-tailwind/react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {
  Award1,
  Award2,
  Award3,
  Award5,
  Award6,
  Award7,
} from "../../features/home/assets/export-assets";
import { motion } from "framer-motion";
import { dataKeyPeople } from "../../constant/dataKeyPeople";

const DrawerPeople = () => {
  const drawerRef = useRef(null);
  const { drawer, indexPeople } = useSelector(
    (state) => state?.main?.drawerPeople
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (drawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [drawer]);

  const handleTouchMove = (e) => {
    e.preventDefault();
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <Drawer
          onTouchMove={handleTouchMove}
          children
          size={window.innerWidth}
          open={drawer}
          placement="right"
          transition={{ type: "tween", duration: 0.5 }}
          className="fixed lg:hidden justify-end w-screen bg-transparent z-50 h-screen"
          onScroll={false}
          overlay={false}
        >
          <div
            ref={drawerRef}
            onTouchMove={(e) => e.stopPropagation()}
            onScroll={(e) => e.stopPropagation()}
            className="w-full bg-white h-full items-start fixed flex p-4 overflow-auto gap-x-6 flex-col"
          >
            {/* Right Side */}
            <div className="flex flex-col gap-y-4">
              <IoIosCloseCircleOutline
                className="size-10 text-gray-500 hover:text-ang-prm-black transition-all cursor-pointer"
                onClick={() =>
                  dispatch(setDrawerPeople({ drawer: false, indexPeople }))
                }
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
                  {/* {dataKeyPeople[indexPeople].phoneNumber} */}
                  +62 21 5711707
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
                  {dataKeyPeople[indexPeople].keyPractices.map(
                    (data, index) => (
                      <div
                        key={index}
                        className="practices-border text-ang-prm-text"
                      >
                        {data}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      ) : (
        <>
          <Drawer
            children
            size={window.innerWidth}
            open={drawer}
            placement="right"
            transition={{ type: "tween", duration: 0.5 }}
            overlay={false}
            className="lg:flex justify-end w-full bg-transparent z-50 hidden"
          >
            <div
              ref={drawerRef}
              className="w-[85%] bg-white h-full items-start flex p-20 overflow-scroll gap-x-6"
            >
              <div className="flex gap-x-2 flex-1">
                <IoIosCloseCircleOutline
                  className="size-10 text-gray-500 hover:text-ang-prm-black transition-all cursor-pointer"
                  onClick={() =>
                    dispatch(setDrawerPeople({ drawer: false, indexPeople }))
                  }
                />
                <div className="flex flex-col gap-y-2 items-start w-fit justify-start px-8 pb-[4rem]">
                  <div className="flex flex-col">
                    <h1 className="text-[40px] font-semibold leading-[2.8rem]">
                      {dataKeyPeople[indexPeople]?.name}
                    </h1>
                    <h1 className="text-[20px] text-ang-prm-red font-bold mt-2">
                      {dataKeyPeople[indexPeople]?.title}
                    </h1>
                  </div>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: dataKeyPeople[indexPeople]?.description,
                    }}
                    className="font-light mt-8 pr-6 text-[16px] leading-7 text-ang-prm-text font-inter"
                  ></p>

                  <div className="h-[1px] w-full bg-gray-400 mt-12 mb-9"></div>

                  <div className="flex flex-col gap-y-4 w-full">
                    <h1 className="font-semibold text-[24px] mb-3">
                      Education:
                    </h1>
                    <div className="flex flex-col gap-x-3 gap-y-4 text-ang-prm-text">
                      {dataKeyPeople[indexPeople]?.education.map(
                        (data, index) => (
                          <div
                            key={index}
                            className="flex gap-x-3 items-center"
                          >
                            <GiPlainCircle className="size-2 text-ang-prm-red" />
                            {data}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-gray-400 my-12"></div>

                  <div className="flex flex-col gap-y-4 w-full">
                    <h1 className="font-semibold text-[24px] mb-3">
                      Expertise:
                    </h1>
                    <div className="flex flex-wrap gap-x-3 gap-y-4">
                      {dataKeyPeople[indexPeople]?.keyPractices.map(
                        (data, index) => (
                          <div
                            key={index}
                            className="practices-border text-ang-prm-text"
                          >
                            {data}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-y-4 items-end sticky top-0">
                <img
                  src={dataKeyPeople[indexPeople]?.photo}
                  alt="profile-picture"
                  className="rounded-3xl size-[25rem] object-cover"
                />

                {dataKeyPeople[indexPeople]?.award == true && (
                  <>
                    <div className="h-[1px] w-full bg-gray-300 my-4"></div>
                    <div className="flex justify-between w-full items-center gap-x-2">
                      <img src={Award1} alt="" className="h-12" />
                      <img src={Award2} alt="" className="h-12" />
                      <img src={Award3} alt="" className="h-12" />
                      <img src={Award5} alt="" className="h-14" />
                      <img src={Award7} alt="" className="h-12" />
                      <img src={Award6} alt="" className="h-12" />
                    </div>
                  </>
                )}

                <div className="h-[1px] w-full bg-gray-300 my-4"></div>

                <div className="flex flex-col gap-y-4 w-full justify-start">
                  <div className="flex gap-x-2 items-center cursor-pointer hover:underline transition-all font-inter text-ang-prm-text">
                    <AiFillLinkedin className="size-6" />
                    {dataKeyPeople[indexPeople]?.linkedin}
                  </div>
                  <div className="flex gap-x-2 items-center cursor-pointer hover:underline transition-all font-inter text-ang-prm-text">
                    <HiMail className="size-6" />
                    {dataKeyPeople[indexPeople]?.email}
                  </div>
                  <div className="flex gap-x-2 items-center cursor-pointer hover:underline transition-all font-inter text-ang-prm-text">
                    <BsTelephoneFill className="size-5" />
                    {/* {dataKeyPeople[indexPeople]?.phoneNumber} */}
                    +62 21 5711707
                  </div>
                </div>
              </div>
            </div>
          </Drawer>

          {/* Mobile Drawer */}
          {drawer && (
            <motion.div
              className="bg-black/50 inset-0 fixed z-40 hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: drawer ? 1 : 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default DrawerPeople;
