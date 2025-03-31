import { BsArrowLeftCircle } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { BsArrowUpRight, BsCircleFill } from "react-icons/bs";
import MainLogo from "../../assets/logo/main_logo.png";
import { Button, Input } from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import { WhitePrimaryLogo } from "../../assets/logo/export-assets";
import { DummyImage } from "../../features/news/assets/export-assets";
import { useDebounce } from "use-debounce";
import { useSearchByTitle } from "../../stores/mainAction";
import { dataKeyPeople } from "../../constant/dataKeyPeople";
import { dataPracticeAreas } from "../../constant/dataPracticeAreas";
import useDebouncedSearchLawyers from "../../utils/useDebounceSearchLawyer";
import { setDrawerPeople } from "../../stores/mainSlices";
import { useDispatch } from "react-redux";
import useDebounceSearchPractices from "../../utils/useDebounceSearchPractices";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const drawerMenuRef = useRef(null);
  const dispatch = useDispatch();

  const [drawerMobile, setDrawerMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchMenu, setSearchMenu] = useState(false);
  const [searchDrawer, setSearchDrawer] = useState(false);
  const [searchDrawerMobile, setSearchDrawerMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [debouncedSearchTitle] = useDebounce(searchQuery, 1000);
  const { data: dataAllPost, isLoading: isLoadingAllPost } =
    useSearchByTitle(debouncedSearchTitle);
  const filteredLawyers = useDebouncedSearchLawyers(
    dataKeyPeople,
    searchQuery,
    500
  );
  const filteredExpertise = useDebounceSearchPractices(
    dataPracticeAreas,
    searchQuery
  );

  const headerMenu = [
    {
      label: "Home",
      location: "/",
      onClick: () => navigate("/"),
    },
    {
      label: "Our Firm",
      location: "/our-firm",
      onClick: () => navigate("/our-firm"),
    },
    {
      label: "Our People",
      location: "/our-people",
      onClick: () => navigate("/our-people"),
    },
    {
      label: "Our Practice Areas",
      location: "/our-practice-areas",
      onClick: () => navigate("/our-practice-areas"),
    },
    {
      label: "News & Updates",
      location: "/news-and-update",
      onClick: () => navigate("/news-and-update"),
    },
  ];

  useEffect(() => {
    document.body.style.overflow =
      drawerMobile || searchMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [drawerMobile, searchMenu]);

  useEffect(() => {
    if (searchMenu) return;

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
  }, [lastScrollY, searchMenu]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.info("Enter text to start your search.", {
        position: "bottom-center",
        duration: 3000,
        style: { maxWidth: "80vw", fontSize: "14px", padding: "10px" },
      });
      return;
    }
    setSearchDrawer(true);
  };

  const handleSearchMobile = () => {
    if (!searchQuery.trim()) {
      toast.info("Enter text to start your search.", {
        position: "bottom-center",
        duration: 3000,
        style: { maxWidth: "80vw", fontSize: "14px", padding: "10px" },
      });
      return;
    }
    setSearchDrawerMobile(true);
  };

  const onCloseSearchBar = () => {
    setDrawerMobile(false);
    setSearchMenu(false);
    setSearchDrawer(false);
    setSearchDrawerMobile(false);
    setSearchQuery("");
  };

  return (
    <>
      {/* Header Desktop Version */}
      <section
        className={`w-full px-24 hidden lg:flex justify-between items-center h-fit py-7 sticky top-0 bg-white shadow-g-md z-40 transition-all duration-300 ${
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

        <div className="flex gap-x-4 items-center justify-center h-full flex-wrap gap-y-3 px-14">
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
                {headerMenu?.length !== index + 1 && (
                  <BsCircleFill className="size-1.5 text-ang-prm-red" />
                )}
              </Fragment>
            );
          })}

          <span
            onClick={() => setSearchMenu(!searchMenu)}
            className={
              searchMenu
                ? "custom-hover-effect-underline"
                : "custom-hover-effect"
            }
          >
            <CgSearch className="size-4" />
            <span className="text-[16px]">Search</span>
          </span>
        </div>

        <Button
          onClick={() => navigate("/contact-us")}
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
          onClick={() => navigate("/")}
        />
        <CgMenuRight
          onClick={() => setDrawerMobile(true)}
          className="text-[1.8rem] text-ang-prm-blue"
        />
      </section>

      {/* Search Menu */}
      <AnimatePresence>
        {searchMenu && (
          <>
            <section id="search-bar-menu" className="hidden lg:block">
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed top-[6rem] w-full h-fit py-10 flex justify-center items-center z-[35] bg-ang-prm-gray px-24"
              >
                <Input
                  variant="standard"
                  label="Search Legal Insights"
                  placeholder="e.g., Tax, Customs, Law, Company, Valuation"
                  color="white"
                  style={{ fontSize: 25 }}
                  icon={<BiSearch className="text-white size-4" />}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
              </motion.div>

              {searchDrawer && searchQuery.trim() && (
                <>
                  <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-150%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed top-[13.5rem] w-full bg-ang-prm-gray hidden lg:flex justify-start items-center z-30 px-24 text-white overflow-y-auto"
                  >
                    <div className="flex flex-col gap-y-5 w-full max-h-[65vh] overflow-y-auto pb-12">
                      {isLoadingAllPost ? (
                        <div className="w-full h-20 flex justify-center items-center">
                          <div className="loader"></div>
                        </div>
                      ) : dataAllPost?.length > 0 &&
                        searchQuery?.trim()?.length > 2 ? (
                        <>
                          <div className="flex flex-col gap-y-3 h-fit">
                            <h2 className="text-[18px]">News & Updates</h2>
                            <div className="gap-6 grid grid-cols-3 h-fit overflow-y-auto">
                              {dataAllPost?.slice(0, 10)?.map((data, index) => (
                                <div
                                  key={"news-after-search" + index}
                                  className="flex w-full justify-between items-center group cursor-pointer hover:text-ang-prm-red transition-all relative"
                                  onClick={() => {
                                    navigate("/news-and-update/" + data?.slug);
                                    onCloseSearchBar();
                                    window.scrollTo({
                                      top: 0,
                                      left: 0,
                                      behavior: "smooth",
                                    });
                                  }}
                                >
                                  <div className="flex gap-x-3 items-center mr-3">
                                    <img
                                      src={data?.featured_image_url}
                                      alt="news-update-thumbnail"
                                      className="size-12 rounded-lg object-cover"
                                    />
                                    <h2
                                      dangerouslySetInnerHTML={{
                                        __html: data?.title?.rendered,
                                      }}
                                      className="truncate-twoline max-w-[75%]"
                                    />
                                  </div>
                                  <BsArrowUpRight className="size-4 absolute right-4 top-4" />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="h-[1px] w-full border-gray-100 border-b-[1px] border-dashed my-4"></div>
                        </>
                      ) : null}

                      {searchQuery?.trim()?.length > 2 &&
                        filteredLawyers?.length > 0 &&
                        filteredLawyers?.at(0)?.seeProfile && (
                          <>
                            <div className="flex flex-col gap-y-3 h-fit">
                              <h2 className="text-[18px]">Our People</h2>
                              <div className="gap-6 grid grid-cols-1 h-fit overflow-y-auto">
                                {filteredLawyers?.map((data, index) => {
                                  return (
                                    data?.seeProfile && (
                                      <div
                                        key={"search-expertise" + index}
                                        className="flex w-full justify-between items-center group cursor-pointer hover:text-ang-prm-red transition-all"
                                        onClick={() => {
                                          navigate("/our-people");
                                          onCloseSearchBar();
                                          dispatch(
                                            setDrawerPeople({
                                              drawer: true,
                                              indexPeople: data?.id - 1,
                                            })
                                          );
                                        }}
                                      >
                                        <div className="flex gap-x-3 items-start w-full">
                                          <img
                                            src={data?.photo}
                                            alt="news-update-thumbnail"
                                            className="size-12 rounded-lg object-cover"
                                          />
                                          <div className="flex flex-col w-full">
                                            <h2>{data?.name}</h2>

                                            <div className="text-gray-400 text-[14px] italic flex gap-x-1 group-hover:text-ang-prm-red transition-all max-w-[80%]">
                                              Expertise:{" "}
                                              {data?.keyPractices
                                                ?.slice(0, 5)
                                                ?.join(", ")}
                                            </div>
                                          </div>
                                        </div>

                                        <BsArrowUpRight className="size-5" />
                                      </div>
                                    )
                                  );
                                })}
                              </div>
                            </div>
                            <div className="h-[1px] w-full border-gray-100 border-b-[1px] border-dashed my-4"></div>
                          </>
                        )}

                      {/* Section Our People Search */}
                      {searchQuery.trim()?.length > 2 &&
                        filteredExpertise?.length > 0 && (
                          <div className="flex flex-col gap-y-3 h-fit">
                            <h2 className="text-[18px]">Our Practice Areas</h2>
                            <div className="gap-6 grid grid-cols-1 h-fit overflow-y-auto">
                              {filteredExpertise?.map((data, index) => {
                                return (
                                  <div
                                    key={"search-our-practive" + index}
                                    className="flex w-full justify-between items-center group cursor-pointer hover:text-ang-prm-red transition-all"
                                    onClick={() => {
                                      onCloseSearchBar();
                                      navigate(
                                        "/our-practice-areas/" + data?.slug
                                      );
                                      window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                      });
                                    }}
                                  >
                                    <div className="flex gap-x-3 items-start">
                                      <img
                                        src={data?.image}
                                        alt="news-update-thumbnail"
                                        className="size-12 rounded-lg object-cover"
                                      />
                                      <div className="flex flex-col w-full">
                                        <h2>{data?.title}</h2>

                                        <div className="text-gray-400 text-[14px] italic flex gap-x-1 group-hover:text-ang-prm-red transition-all">
                                          <span>Specialist Services Area:</span>
                                          {data?.specialistServiceArea
                                            ?.slice(0, 2)
                                            ?.map((text, index, array) => (
                                              <h2 key={index}>
                                                {text?.title}
                                                {index !== array?.length - 1 &&
                                                  ","}
                                              </h2>
                                            ))}
                                        </div>
                                      </div>
                                    </div>

                                    <BsArrowUpRight className="size-5" />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                      {dataAllPost?.length == 0 &&
                        filteredExpertise?.length == 0 &&
                        filteredLawyers?.length == 0 && (
                          <div className="w-full justify-center items-center flex h-14 text-white">
                            <h1>No Data</h1>
                          </div>
                        )}
                    </div>
                  </motion.div>
                </>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onCloseSearchBar}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed inset-0 z-20 bg-black/50"
              ></motion.div>
            </section>
          </>
        )}
      </AnimatePresence>

      {/* Menu Mobile Version */}
      <AnimatePresence>
        {drawerMobile && (
          <motion.div
            className="fixed inset-0 bg-ang-prm-blue z-30 flex lg:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="fixed w-screen flex flex-col h-full p-5 py-7">
              <div className="w-full h-full flex flex-col gap-y-12 px-3 relative">
                <div className="w-full flex justify-between items-center">
                  <img
                    src={WhitePrimaryLogo}
                    alt="header-logo-anagata"
                    className="h-7 object-contain"
                  />

                  <MdClose
                    onClick={() => {
                      setSearchDrawer(false);
                      setDrawerMobile(false);
                      setSearchQuery("");
                    }}
                    className="size-12 text-white cursor-pointer -mr-2"
                  />
                </div>

                <Input
                  variant="standard"
                  label="Search Legal Insights"
                  placeholder="e.g., Tax or Customs"
                  color="white"
                  style={{ fontSize: 28 }}
                  icon={<BiSearch className="text-white size-4" />}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSearchMobile();
                      e.target.blur();
                    }
                  }}
                />

                <div className="flex flex-col w-full gap-y-8 text-white font-light text-[2rem] justify-center items-start">
                  <div className="flex flex-col gap-y-8 items-start">
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

      <AnimatePresence>
        {searchDrawerMobile && (
          <motion.div
            initial={{ x: "-150%" }}
            animate={{ x: 0 }}
            exit={{ x: "-150%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 justify-center items-center bg-ang-prm-gray z-40 flex lg:hidden p-5 pt-8"
          >
            <div className="flex flex-col gap-y-5 w-full h-full overflow-y-auto text-white pb-12">
              <div className="w-full gap-x-4 items-center flex justify-start pl-12 relative pb-8 border-b-[1px] border-gray-100 border-dashed mb-3 h-fit">
                <BsArrowLeftCircle
                  className="text-white size-8 absolute left-0 top-1"
                  onClick={() => setSearchDrawerMobile(false)}
                />
                <h2 className="text-white text-[1.8rem]">{searchQuery}</h2>
              </div>
              {isLoadingAllPost ? (
                <div className="w-full h-20 flex justify-center items-center">
                  <div className="loader"></div>
                </div>
              ) : dataAllPost?.length > 0 && searchQuery?.trim()?.length > 2 ? (
                <>
                  <div className="flex flex-col gap-y-3 h-fit">
                    <h2 className="text-[18px]">News & Updates</h2>
                    <div className="gap-6 grid grid-cols-1 h-fit overflow-y-auto">
                      {dataAllPost?.slice(0, 10)?.map((data, index) => (
                        <div
                          key={"news-after-search" + index}
                          className="flex w-full justify-between items-center group cursor-pointer hover:text-ang-prm-red transition-all relative"
                          onClick={() => {
                            navigate("/news-and-update/" + data?.slug);
                            onCloseSearchBar();
                            window.scrollTo({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          <div className="flex gap-x-3 items-start w-full">
                            <img
                              src={data?.featured_image_url}
                              alt="news-update-thumbnail"
                              className="size-12 rounded-lg object-cover"
                            />
                            <h2
                              dangerouslySetInnerHTML={{
                                __html: data?.title?.rendered,
                              }}
                              className="truncate-twoline max-w-[75%]"
                            />
                          </div>
                          <BsArrowUpRight className="size-5 absolute right-0 top-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-[1px] w-full border-gray-100 border-b-[1px] border-dashed my-4"></div>
                </>
              ) : null}

              {searchQuery?.trim()?.length > 2 &&
                filteredLawyers?.length > 0 &&
                filteredLawyers?.at(0)?.seeProfile && (
                  <>
                    <div className="flex flex-col gap-y-3 h-fit">
                      <h2 className="text-[18px]">Our People</h2>
                      <div className="gap-6 grid grid-cols-1 h-fit overflow-y-auto">
                        {filteredLawyers?.map((data, index) => {
                          return (
                            data?.seeProfile && (
                              <div
                                key={"search-expertise" + index}
                                className="flex w-full justify-between items-center group cursor-pointer hover:text-ang-prm-red transition-all relative"
                                onClick={() => {
                                  navigate("/our-people");
                                  onCloseSearchBar();
                                  dispatch(
                                    setDrawerPeople({
                                      drawer: true,
                                      indexPeople: data?.id - 1,
                                    })
                                  );
                                }}
                              >
                                <div className="flex gap-x-3 items-start w-full">
                                  <img
                                    src={data?.photo}
                                    alt="news-update-thumbnail"
                                    className="size-12 rounded-lg object-cover"
                                  />
                                  <div className="flex flex-col w-full">
                                    <h2>{data?.name}</h2>

                                    <div className="text-gray-400 text-[14px] italic flex gap-x-1 group-hover:text-ang-prm-red transition-all max-w-[80%]">
                                      Expertise:{" "}
                                      {data?.keyPractices
                                        ?.slice(0, 5)
                                        ?.join(", ")}
                                    </div>
                                  </div>
                                </div>

                                <BsArrowUpRight className="size-5 absolute top-2 right-0" />
                              </div>
                            )
                          );
                        })}
                      </div>
                    </div>
                    <div className="h-[1px] w-full border-gray-100 border-b-[1px] border-dashed my-4"></div>
                  </>
                )}

              {/* Section Our People Search */}
              {searchQuery.trim()?.length > 2 &&
                filteredExpertise?.length > 0 && (
                  <div className="flex flex-col gap-y-3 h-fit">
                    <h2 className="text-[18px]">Our Practice Areas</h2>
                    <div className="gap-6 grid grid-cols-1 h-fit overflow-y-auto">
                      {filteredExpertise?.map((data, index) => {
                        return (
                          <div
                            key={"search-our-practive" + index}
                            className="flex w-full justify-between items-center group cursor-pointer hover:text-ang-prm-red transition-all relative"
                            onClick={() => {
                              onCloseSearchBar();
                              navigate("/our-practice-areas/" + data?.slug);
                              window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            <div className="flex gap-x-3 items-start">
                              <img
                                src={data?.image}
                                alt="news-update-thumbnail"
                                className="size-12 rounded-lg object-cover"
                              />
                              <div className="flex flex-col w-full">
                                <h2>{data?.title}</h2>

                                <div className="text-gray-400 text-[14px] italic flex gap-x-1 group-hover:text-ang-prm-red transition-all flex-wrap max-w-[80%]">
                                  <span>Specialist Services Area:</span>
                                  {data?.specialistServiceArea
                                    ?.slice(0, 2)
                                    ?.map((text, index, array) => (
                                      <h2 key={index}>
                                        {text?.title}
                                        {index !== array?.length - 1 && ","}
                                      </h2>
                                    ))}
                                </div>
                              </div>
                            </div>

                            <BsArrowUpRight className="size-5 absolute right-0 top-2" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              {dataAllPost?.length == 0 &&
                filteredExpertise?.length == 0 &&
                filteredLawyers?.length == 0 && (
                  <div className="w-full justify-center items-center flex h-14 text-white">
                    <h1>No Data</h1>
                  </div>
                )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
