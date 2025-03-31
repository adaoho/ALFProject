import { BsArrowUpRight } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SeoHelmet from "../../../components/layout/SeoHelmet";
import MainLayout from "../../../components/layout/MainLayout";
import Header from "../../../components/ui/Header";
import ContactUs from "../../../components/ui/ContactUs";
import Footer from "../../../components/ui/Footer";
import {
  useFetchAllPost,
  useFetchPostsDetails,
  useFetchRandomPosts,
} from "../../../stores/mainAction";
import "../../../assets/styles/wordpress-style.css";
import { IconLogo } from "../../../assets/logo/export-assets";
import CardOtherNews from "../components/CardOtherNews";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { toast } from "sonner";

const NewsUpdateDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { data, isLoading, isSuccess } = useFetchPostsDetails(slug);
  const { data: dataOther, isSucess: successOther } = useFetchRandomPosts(5);
  const getOther = dataOther?.filter((data) => data?.slug !== slug);
  const currentUrl = window.location.href;

  const [pdfUrl, setPdfUrl] = useState(null);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast.success("Link copied to clipboard!", {
          position: "bottom-center",
          duration: 3000,
          style: { maxWidth: "80vw", fontSize: "14px", padding: "10px" },
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://content.anagatalaw.com/wp-content/themes/twentytwentyfive/style.css";
    document.head.appendChild(link);
  }, []);

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = {
      year: "numeric",
      month: "long",
      day: "2-digit",
      timeZone: "Asia/Jakarta",
    };
    const formattedDate = date.toLocaleDateString("en-GB", options);

    return formattedDate;
  }

  const ContentWithLineBreaks = ({ htmlContent }) => {
    const contentWithBreaks = htmlContent
      .split("</p>")
      .map((item, index) => {
        return index < htmlContent.split("</p>")?.length - 1
          ? item + "</p>"
          : item + "</p>";
      })
      .join("");

    const contentWithLinks = contentWithBreaks.replace(
      /<a\b([^>]*)>/g,
      '<a $1 class="underline cursor-pointer text-blue-500 break-all">'
    );

    return (
      <div
        className="font-inter leading-[34px] text-[18px] break-words"
        dangerouslySetInnerHTML={{ __html: contentWithLinks }}
      />
    );
  };

  const extractPdfLink = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const link = doc.querySelector("a[href$='.pdf']");
    return link ? link.href : null;
  };

  useEffect(() => {
    if (data) {
      const link = extractPdfLink(data);
      setPdfUrl(link);
    }
  }, [data]);

  return (
    <>
      {isSuccess && (
        <SeoHelmet
          title={data?.at(0)?.title?.rendered}
          description={data?.at(0)?.excerpt?.rendered}
        />
      )}

      <Header />
      <MainLayout loading={isLoading}>
        {isSuccess && (
          <div className="flex gap-y-2 w-full h-fit pb-[3rem] justify-center items-start mt-6 lg:mt-12">
            <div className="flex flex-col md:px-8 px-4 lg:max-w-[780px] gap-y-6 w-full">
              <h1
                dangerouslySetInnerHTML={{
                  __html: data?.at(0)?.title?.rendered,
                }}
                className="font-bold text-[32px] lg:text-[40px] text-left lg:leading-[52px] leading-[42px]"
              />

              <div className="flex flex-row gap-x-2 w-full lg:justify-between gap-y-3 flex-wrap text-[14px] text-gray-700">
                <h1>{formatDate(data?.at(0)?.date)}</h1>
                <div className="flex lg:hidden ">-</div>
                <div className="flex gap-x-3">
                  Share on:{" "}
                  <div className="flex gap-x-3 items-center">
                    <FiCopy
                      onClick={handleCopy}
                      className="size-4 text-gray-800 cursor-pointer  hover:text-ang-prm-blue transition-all"
                    />
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(
                        currentUrl
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsWhatsapp className="size-4 text-gray-800 hover:text-green-700 transition-all cursor-pointer" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        currentUrl
                      )}&title=${encodeURIComponent(
                        "Check this out!"
                      )}&summary=${encodeURIComponent(
                        "Interesting article I found!"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillLinkedin className="size-5 text-gray-800 hover:text-blue-700 transition-all cursor-pointer" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        currentUrl
                      )}&text=${encodeURIComponent("Check this out!")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaXTwitter className="size-4 text-gray-800 hover:text-gray-900 transition-all cursor-pointer" />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        currentUrl
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillFacebook className="size-5 text-gray-800 hover:text-blue-800 transition-all cursor-pointer" />
                    </a>
                  </div>
                </div>
              </div>
              <img
                src={data?.at(0)?.featured_image_url}
                alt="image-of-article"
                className="w-full h-[383px] object-cover rounded-xl"
              />

              <div className="flex w-full h-[1px] bg-gray-300 my-4"></div>
              <ContentWithLineBreaks
                htmlContent={data?.at(0)?.content?.rendered}
              />

              {data?.at(0)?.acf?.download_pdf && (
                <div
                  onClick={() =>
                    window.open(data?.at(0)?.acf?.download_pdf, "_blank")
                  }
                  className="bg-ang-prm-blue text-white rounded-lg px-3 py-1 w-fit flex justify-center items-center gap-x-2 cursor-pointer transition-all z-10 hover:shadow-lg hover:bg-ang-prm-red"
                >
                  <FaFileDownload />
                  Download Article
                </div>
              )}
            </div>
          </div>
        )}

        {/* Other Practice Areas */}
        <section
          id="other-practices-section"
          className="w-full flex bg-ang-prm-white px-4 lg:px-24 h-fit flex-col gap-y-6 pt-14 pb-2 lg:pb-24"
        >
          <div className="flex flex-col gap-y-6 w-full">
            <div className="flex gap-x-4 items-start">
              <img
                src={IconLogo}
                alt="icon-anagata"
                className="h-6 mt-1.5 lg:mt-3"
              />
              <div
                onClick={() => navigate("/news-and-update")}
                className="flex gap-x-2 items-center group cursor-pointer transition-all"
              >
                <h1 className="text-[24px] lg:text-[32px] text-ang-prm-text  ">
                  Other News and Updates
                </h1>
                <BsArrowUpRight className="size-6 mt-0.5 group-hover:text-ang-prm-red transition-all group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </div>
            </div>
            <h2 className="text-[14px] lg:text-[18px]  text-gray-600 leading-7">
              Stay informed with the latest legal developments, industry trends,
              and firm updates. Our team of seasoned attorneys shares expert
              insights and strategic guidance to help businesses—from emerging
              startups to global enterprises—navigate legal complexities with
              confidence.
            </h2>
          </div>

          {successOther ? (
            <div className="w-full flex justify-center items-center h-[420px] ">
              <div className="loader"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-8 gap-y-12 lg:gap-y-0 mt-6">
              {getOther?.slice(0, 4)?.map((data, index) => {
                return (
                  <CardOtherNews
                    key={"newsUpdateOther" + index}
                    image={data?.featured_image_url}
                    title={data?.title?.rendered}
                    description={data?.excerpt?.rendered}
                    slug={data?.slug}
                  />
                );
              })}
            </div>
          )}

          <div className="h-[1px] w-full bg-gray-300 mt-7 mb-3"></div>

          <div className="w-full relative">
            <ContactUs noPadding />
          </div>
        </section>

        <Footer />
      </MainLayout>
    </>
  );
};

export default NewsUpdateDetail;
