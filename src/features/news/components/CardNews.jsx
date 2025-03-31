import React from "react";
import { DummyImage } from "../assets/export-assets";
import { formatDate } from "../../../utils/formatted";
import { useNavigate } from "react-router-dom";

const CardNews = ({ data }) => {
  const navigate = useNavigate();
  const getCategory = data?.category_names?.find((data) => data === "Updates");

  return (
    <>
      {/* Dekstop Version */}
      <div
        onClick={() => navigate("/news-and-update/" + data?.slug)}
        className="w-full h-[475px] relative hidden lg:flex justify-center group cursor-pointer"
      >
        <div className="h-[85%] w-full overflow-hidden rounded-2xl">
          <img
            src={data?.featured_image_url}
            alt=""
            className="h-full w-full rounded-2xl object-cover group-hover:scale-105 transition-all"
          />
        </div>
        <div className="bg-white  group-hover:bg-ang-prm-blue transition-all w-[90%] shadow-g-sm absolute h-fit bottom-0 rounded-2xl flex flex-col gap-y-3 p-6">
          <h4 className="text-[14px] text-gray-500 group-hover:text-white transition-all">
            {formatDate(data?.date)}
          </h4>
          <h1
            dangerouslySetInnerHTML={{ __html: data?.title?.rendered }}
            className="font-bold text-ang-prm-blue text-[24px] leading-8 truncate-threeline group-hover:text-white transition-all"
          />
          <h4
            dangerouslySetInnerHTML={{ __html: data?.excerpt?.rendered }}
            className="text-[14px] text-gray-500 truncate-threeline group-hover:text-white transition-all"
          />
        </div>

        {/* Catageory Tanda */}
        <div className="bg-ang-prm-red w-fit px-3 py-1 absolute right-4 top-4 text-white rounded-lg">
          {getCategory ? "Updates" : "News"}
        </div>
      </div>

      {/* Mobile Version */}
      <div
        onClick={() => navigate("/news-and-update/" + data?.slug)}
        className="w-full h-[280px] relative flex lg:hidden justify-center group cursor-pointer"
      >
        <div className="h-[85%] w-full overflow-hidden rounded-2xl">
          <img
            src={data?.featured_image_url}
            alt=""
            className="h-full w-full rounded-2xl object-cover group-hover:scale-105 transition-all"
          />
        </div>
        <div className="bg-white  group-hover:bg-ang-prm-blue transition-all w-[93%] shadow-g-sm absolute h-fit bottom-0 rounded-2xl flex flex-col gap-y-2 p-4">
          <h4 className="text-[12px] text-gray-500 group-hover:text-white transition-all">
            {formatDate(data?.date)}
          </h4>
          <h1
            dangerouslySetInnerHTML={{ __html: data?.title?.rendered }}
            className="font-bold text-ang-prm-blue text-[18px] leading-6 truncate-threeline group-hover:text-white transition-all"
          />
          <h4
            dangerouslySetInnerHTML={{
              __html: data?.excerpt?.rendered,
            }}
            className="text-[12px] text-gray-500 truncate-oneline group-hover:text-white transition-all"
          />
        </div>

        {/* Catageory Tanda */}
        <div className="bg-ang-prm-red w-fit px-3 py-1 absolute right-4 top-4 text-white rounded-lg text-[12px]">
          {getCategory ? "Updates" : "News"}
        </div>
      </div>
    </>
  );
};

export default CardNews;
