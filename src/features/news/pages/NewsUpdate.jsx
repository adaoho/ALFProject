import { BiSearch } from "react-icons/bi";
import Aos from "aos";
import React, { useCallback, useEffect, useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import Header from "../../../components/ui/Header";
import { IconLogo } from "../../../assets/logo/export-assets";
import TextReveal from "../../../components/animations/TextReveal";
import { image1 } from "../../firm/assets/export-assets";
import Footer from "../../../components/ui/Footer";
import { DummyImage } from "../assets/export-assets";
import CardNews from "../components/CardNews";
import { Button } from "@material-tailwind/react";
import { Pagination } from "../components/Pagination";
import { BannerNewsUpdate } from "../../../assets/images/export-assets";
import {
  useFetchAllPost,
  useFetchPageCoverPost,
} from "../../../stores/mainAction";
import { formatDate } from "../../../utils/formatted";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { useDebounce } from "use-debounce";
import MobileNewsUpdate from "./MobileNewsUpdate";

const NewsUpdate = () => {
  const [active, setActive] = useState(1);
  const [searchTitle, setSearchTitle] = useState("");
  const [queryTitle, setQueryTitle] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(18);

  useEffect(() => {
    if (searchTitle === "") {
      setQueryTitle("");
    }
  }, [searchTitle]);

  const navigate = useNavigate();
  const [debouncedSearchTitle] = useDebounce(queryTitle, 1000);
  const { data, isLoading: isLoadingAllPost } = useFetchAllPost(
    debouncedSearchTitle,
    page,
    limit
  );

  const { data: dataPageCover, isLoading: isLoadingPageCover } =
    useFetchPageCoverPost();

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    return () => Aos.refresh();
  }, []);

  return (
    <>
      <Header />
      <MainLayout
        title={"News and Updates - Anagata Law Firm"}
        description={
          "Delivering strategic legal solutions with global experience"
        }
        className={"hidden lg:flex"}
      >
        <div
          data-aos="fade-up"
          className="w-full bg-ang-prm-blue grid grid-cols-2 h-[495px]"
        >
          <div className="bg-ang-prm-blues flex w-full h-full justify-center items-start flex-col pl-24 pr-9">
            <div className="flex gap-x-4 items-center mb-10">
              <img src={IconLogo} alt="icon-anagata" className="h-6" />
              <h1 className="text-[24px] text-white">News and Updates</h1>
            </div>
            <TextReveal
              text={
                "We stay ahead of the curve by bringing you the latest insights."
              }
            />
          </div>
          <div className="bg-white flex w-full h-full justify-center items-center overflow-hidden relative">
            <div className="bg-ang-prm-text/20 absolute w-full h-full z-10"></div>
            <img
              src={BannerNewsUpdate}
              alt=""
              className="w-full h-full object-cover grayscale contrast-150"
            />
          </div>
        </div>

        {/* Latest Information */}
        <section
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="20"
          id="latest-information"
          className="w-full flex flex-col px-24 pt-[4rem] h-fit pb-[6rem]"
        >
          <h1 className="text-[32px] font-bold text-ang-prm-gray">
            Latest Information
          </h1>

          {isLoadingPageCover ? (
            <div className="w-full flex justify-center items-center h-[420px] ">
              <div className="loader"></div>
            </div>
          ) : (
            <div className="w-full grid grid-cols-3 gap-x-8 h-[420px] mt-8 mb-6">
              <div
                onClick={() =>
                  navigate("/news-and-update/" + dataPageCover[0]?.slug)
                }
                className="w-full h-[475px] relative flex justify-center group cursor-pointer"
              >
                <div className="h-[85%] w-full overflow-hidden rounded-2xl">
                  <img
                    src={dataPageCover[0]?.featured_image_url}
                    alt=""
                    className="h-full w-full rounded-2xl object-cover group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="bg-white  group-hover:bg-ang-prm-blue transition-all w-[90%] shadow-g-sm absolute h-fit bottom-0 rounded-2xl flex flex-col gap-y-3 p-5">
                  <h4 className="text-[14px] text-gray-500 group-hover:text-white transition-all">
                    {formatDate(dataPageCover[0]?.date)}
                  </h4>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: dataPageCover[0]?.title?.rendered,
                    }}
                    className="font-bold text-ang-prm-blue text-[24px] leading-8 truncate-threeline group-hover:text-white transition-all"
                  />
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: dataPageCover[0]?.excerpt?.rendered,
                    }}
                    className="text-[14px] text-gray-500 truncate-threeline group-hover:text-white transition-all"
                  />
                </div>

                <div className="bg-ang-prm-red w-fit px-3 py-1 absolute right-4 top-4 text-white rounded-lg">
                  {dataPageCover[0]?.category_names?.find(
                    (find) => find === "Updates"
                  )
                    ? "Updates"
                    : "News"}
                </div>
              </div>

              <div
                onClick={() =>
                  navigate("/news-and-update/" + dataPageCover[1]?.slug)
                }
                className="w-full h-[475px] col-span-2 flex justify-center relative group cursor-pointer"
              >
                <div className="h-[85%] w-full overflow-hidden rounded-2xl">
                  <img
                    src={dataPageCover[1]?.featured_image_url}
                    alt=""
                    className="h-full w-full rounded-2xl object-cover group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="bg-white  group-hover:bg-ang-prm-blue transition-all w-[90%] shadow-g-sm absolute h-fit bottom-0 rounded-2xl flex flex-col gap-y-3 p-4 px-7 justify-center">
                  <h4 className="text-[14px] text-gray-500 group-hover:text-white transition-all">
                    {formatDate(dataPageCover[1]?.date)}
                  </h4>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: dataPageCover[1]?.title?.rendered,
                    }}
                    className="font-bold h-[50%] text-ang-prm-blue text-[24px] leading-8 truncate-threeline group-hover:text-white transition-all"
                  />
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: dataPageCover[1]?.excerpt?.rendered,
                    }}
                    className="text-[14px] text-gray-500 truncate-threeline group-hover:text-white transition-all"
                  />
                </div>
                <div className="bg-ang-prm-red w-fit px-3 py-1 absolute right-4 top-4 text-white rounded-lg">
                  {dataPageCover[1]?.category_names?.find(
                    (find) => find === "Updates"
                  )
                    ? "Updates"
                    : "News"}
                </div>
              </div>
            </div>
          )}
        </section>

        <div className="w-full flex justify-center h-fit px-24 mb-8">
          <div className="h-[1px] w-full bg-gray-400"></div>
        </div>

        {/* Recent Information */}
        <section
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="20"
          id="latest-information"
          className="w-full flex flex-col px-24 pt-[2rem] h-fit pb-[4rem] "
        >
          <div className="w-full flex justify-between items-center">
            <h1 className="text-[32px] font-bold text-ang-prm-gray">
              Recent Information
            </h1>

            <div className="w-full max-w-[500px] h-10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setQueryTitle(searchTitle);
                }}
                className="relative flex items-center gap-x-3 h-full"
              >
                <BiSearch className="absolute ml-3 text-ang-prm-blue size-5" />

                <input
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                  className="w-full h-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-lg pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-ang-prm-red hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Search news and updates ..."
                />

                <Button children className="button-blue-size h-10 w-32">
                  Search
                </Button>
              </form>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="20"
            className="w-full grid grid-cols-3 gap-x-8 h-fit mt-8 gap-y-12 mb-12"
          >
            {isLoadingAllPost ? (
              <div className="w-full flex justify-center items-center h-[420px] col-span-3">
                <div className="loader"></div>
              </div>
            ) : (
              data?.posts?.map((data, index) => {
                return <CardNews key={"newsupdate" + index} data={data} />;
              })
            )}
          </div>

          <div className="w-full flex justify-center items-center h-fit mt-8 ">
            {data?.totalPosts > 18 && (
              <Pagination
                active={page}
                setActive={setPage}
                totalPages={data?.totalPages || 1}
              />
            )}
          </div>
        </section>
        <Footer />
      </MainLayout>

      {/* News Update Page Mobile Version */}
      <MobileNewsUpdate />
    </>
  );
};

export default NewsUpdate;
