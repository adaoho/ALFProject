import { BiSearch } from "react-icons/bi";
import Aos from "aos";
import React, { useEffect, useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import Header from "../../../components/ui/Header";
import { IconLogo } from "../../../assets/logo/export-assets";
import TextReveal from "../../../components/animations/TextReveal";
import Footer from "../../../components/ui/Footer";
import CardNews from "../components/CardNews";
import { Button } from "@material-tailwind/react";
import { BannerNewsUpdate } from "../../../assets/images/export-assets";
import {
  useFetchAllPost,
  useFetchPageCoverPost,
} from "../../../stores/mainAction";
import { formatDate } from "../../../utils/formatted";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { Pagination } from "../components/Pagination";

const MobileNewsUpdate = () => {
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

  const [debouncedSearchTitle] = useDebounce(queryTitle, 1000);
  const { data, isLoading: isLoadingAllPost } = useFetchAllPost(
    debouncedSearchTitle,
    page,
    limit
  );
  const { data: dataPageCover, isLoading: isLoadingPageCover } =
    useFetchPageCoverPost();
  const navigate = useNavigate();

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
      <MainLayout
        title={"News and Updates - Anagata Law Firm"}
        description={
          "Delivering strategic legal solutions with global experience"
        }
        className={"flex lg:hidden"}
      >
        <div
          data-aos="fade-up"
          className="w-full bg-ang-prm-blue grid grid-cols-1 h-[665px]"
        >
          <div className="bg-white flex w-full h-full justify-center items-center overflow-hidden relative">
            <div className="bg-ang-prm-text/20 absolute w-full h-full z-10"></div>
            <img
              src={BannerNewsUpdate}
              alt=""
              className="w-full h-full object-cover grayscale contrast-150"
            />
          </div>
          <div className="bg-ang-prm-blues h-full flex w-full justify-center items-start flex-col pl-4 -my-3 -mb-12 pr-2">
            <div className="flex gap-x-4 items-center mb-4">
              <img src={IconLogo} alt="icon-anagata" className="h-4" />
              <h1 className="text-[16px] text-white">News and Updates</h1>
            </div>
            <TextReveal
              textSize={"text-[24px]"}
              text={
                "We stay ahead of the curve by bringing you the latest insights."
              }
            />
          </div>
        </div>

        {/* Latest Information */}
        <section
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="20"
          id="latest-information"
          className="w-full flex flex-col px-4 pt-[4rem] h-fit pb-[4rem]"
        >
          <h1 className="text-[32px] font-bold text-ang-prm-gray">
            Latest Information
          </h1>

          {isLoadingPageCover ? (
            <div className="w-full flex justify-center items-center h-[420px] ">
              <div className="loader"></div>
            </div>
          ) : (
            <div className="w-full grid grid-cols-1 gap-x-8 h-fit mt-8 gap-y-8">
              {/* News and Update Headline Article 1 */}
              <div
                onClick={() =>
                  navigate("/news-and-update/" + dataPageCover?.at(0)?.slug)
                }
                className="w-full h-[280px] relative flex justify-center group cursor-pointer"
              >
                <div className="h-[85%] w-full overflow-hidden rounded-2xl">
                  <img
                    src={dataPageCover?.at(0)?.featured_image_url}
                    alt=""
                    className="h-full w-full rounded-2xl object-cover group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="bg-white  group-hover:bg-ang-prm-blue transition-all w-[90%] shadow-g-sm absolute h-fit bottom-0 rounded-2xl flex flex-col gap-y-2 p-4">
                  <h4 className="text-[14px] text-gray-500 group-hover:text-white transition-all">
                    {formatDate(dataPageCover?.at(0)?.date)}
                  </h4>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: dataPageCover?.at(0)?.title?.rendered,
                    }}
                    className="font-bold text-ang-prm-blue text-[18px] leading-6 truncate-threeline group-hover:text-white transition-all"
                  />
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: dataPageCover?.at(0)?.excerpt?.rendered,
                    }}
                    className="text-[14px] text-gray-500 truncate-oneline group-hover:text-white transition-all"
                  />
                </div>

                <div className="bg-ang-prm-red w-fit px-3 py-1 absolute right-4 top-4 text-white rounded-lg text-[12px]">
                  {dataPageCover
                    ?.at(0)
                    ?.category_names?.find((find) => find === "Updates")
                    ? "Updates"
                    : "News"}
                </div>
              </div>

              {/* News and Update Headline Article 2 */}
              <div
                onClick={() =>
                  navigate("/news-and-update/" + dataPageCover?.at(1)?.slug)
                }
                className="w-full h-[280px] flex justify-center relative group cursor-pointer"
              >
                <div className="h-[85%] w-full overflow-hidden rounded-2xl">
                  <img
                    src={dataPageCover?.at(1)?.featured_image_url}
                    alt=""
                    className="h-full w-full rounded-2xl object-cover group-hover:scale-105 transition-all"
                  />
                </div>
                <div className="bg-white  group-hover:bg-ang-prm-blue transition-all w-[90%] shadow-g-sm absolute h-fit bottom-0 rounded-2xl flex flex-col gap-y-2 p-4 px-7 justify-center">
                  <h4 className="text-[12px] text-gray-500 group-hover:text-white transition-all">
                    {formatDate(dataPageCover?.at(1)?.date)}
                  </h4>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: dataPageCover?.at(1)?.title?.rendered,
                    }}
                    className="font-bold text-ang-prm-blue text-[18px] leading-6 truncate-threeline group-hover:text-white transition-all"
                  />
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: dataPageCover?.at(1)?.excerpt?.rendered,
                    }}
                    className="text-[14px] text-gray-500 truncate-oneline group-hover:text-white transition-all"
                  />
                </div>
                <div className="bg-ang-prm-red w-fit px-3 py-1 absolute right-4 top-4 text-white rounded-lg text-[12px]">
                  {dataPageCover
                    ?.at(1)
                    ?.category_names?.find((find) => find === "Updates")
                    ? "Updates"
                    : "News"}
                </div>
              </div>
            </div>
          )}
        </section>

        <div className="w-full flex justify-center h-fit px-4 mb-8">
          <div className="h-[1px] w-full bg-gray-400"></div>
        </div>

        {/* Recent Information */}
        <section
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="20"
          id="latest-information"
          className="w-full flex flex-col px-4 h-fit pb-[4rem] gap-y-5"
        >
          <div className="w-full flex flex-col justify-between items-start gap-y-3">
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

                <Button
                  children
                  className="button-blue-size h-10 w-32"
                  type="submit"
                >
                  Search
                </Button>
              </form>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="20"
            className="w-full grid grid-cols-1 gap-x-4 h-fit mt-6 gap-y-8 mb-12"
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

          <div className="w-full flex justify-center items-center h-fit">
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
    </>
  );
};

export default MobileNewsUpdate;
