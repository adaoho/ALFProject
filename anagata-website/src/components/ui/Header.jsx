import { CgMenuRight } from "react-icons/cg";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import MainLogo from "../../assets/logo/main_logo.png";
import { Button, Drawer } from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import { WhitePrimaryLogo } from "../../assets/logo/export-assets";

const Header = () => {
  const drawerMenuRef = useRef(null);
  const [drawerMobile, setDrawerMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const headerMenu = [
    {
      label: "Home",
      location: "/",
      onClick: () => navigate("/"),
    },
    {
      label: "Our Firm",
      location: "/our-firm",
      onClick: () => toast.info("Will be Coming Soon 🚀"),
    },
    {
      label: "Our People",
      location: "/our-people",
      onClick: () => toast.info("Will be Coming Soon 🚀"),
    },
    {
      label: "Our Practice",
      location: "/our-practice",
      onClick: () => toast.info("Will be Coming Soon 🚀"),
    },
    {
      label: "News & Updates",
      location: "/news-and-update",
      onClick: () => toast.info("Will be Coming Soon 🚀"),
    },
  ];

  useEffect(() => {
    document.body.style.overflow = drawerMobile ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [drawerMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Header Desktop Version */}
      <section
        className={`w-full px-24 hidden lg:flex justify-between items-center h-fit py-7 sticky top-0 bg-white shadow-g-md z-30 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        id="header-section"
      >
        <img
          src={MainLogo}
          onClick={() => navigate("/")}
          alt="header-logo-anagata"
          className="h-10 object-contain"
        />

        <div className="flex gap-x-4 items-center justify-center h-full">
          {headerMenu.slice(1, 5).map((data, index) => {
            return (
              <Fragment key={index + "header"}>
                <span
                  onClick={
                    location.startsWith(data.location) ? null : data.onClick
                  }
                  className={`${
                    location.startsWith(data.location)
                      ? "underline"
                      : "custom-hover-effect"
                  }`}
                >
                  {data.label}
                </span>
                {headerMenu.length !== index + 1 && (
                  <BsCircleFill className="size-1.5 text-ang-prm-red" />
                )}
              </Fragment>
            );
          })}

          <span
            onClick={() =>
              toast.info("This feature is currently in development 🚀")
            }
            className="custom-hover-effect"
          >
            <CgSearch className="size-4" />
            <span className="text-[16px]">Search</span>
          </span>
        </div>

        <Button
          onClick={() =>
            toast.info("This feature is currently in development 🚀")
          }
          children
          className="button-red"
        >
          <h1>Contact Us</h1>
        </Button>
      </section>

      {/* Header Mobile Version */}
      <section
        className={`w-full flex lg:hidden md:px-8 px-4 justify-between bg-white items-center h-fit py-7 sticky top-0 shadow-g-md z-30 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        id="header-section-mobile"
      >
        <img
          src={MainLogo}
          alt="header-logo-anagata"
          className="h-7 object-contain"
        />
        <CgMenuRight
          onClick={() => setDrawerMobile(true)}
          className="text-[1.8rem] text-ang-prm-blue"
        />
      </section>

      <AnimatePresence>
        {drawerMobile && (
          <motion.div
            className="fixed inset-0 bg-ang-prm-blue z-30 flex"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="fixed w-screen flex flex-col h-full p-5 py-7">
              <div className="w-full h-full flex flex-col gap-y-2">
                <div className="w-full flex justify-between items-center">
                  <img
                    src={WhitePrimaryLogo}
                    alt="header-logo-anagata"
                    className="h-7 object-contain"
                  />

                  <MdClose
                    onClick={() => setDrawerMobile(false)}
                    className="size-12 text-white cursor-pointer"
                  />
                </div>

                <div className="flex flex-col w-full gap-y-8 text-white font-light text-[2.1rem] mt-14 justify-center items-center">
                  <div className="flex flex-col gap-y-8 items-center">
                    {headerMenu.map((data, index) => {
                      const isCurrent =
                        data.location === "/"
                          ? location === "/"
                          : location.startsWith(data.location);

                      return (
                        <span
                          onClick={isCurrent ? null : data.onClick}
                          key={index + "mobile-menu"}
                          className={`${
                            isCurrent
                              ? "underline font-semibold"
                              : "hover-menumobile relative w-fit"
                          }`}
                        >
                          {data.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
