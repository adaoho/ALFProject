import { FaFileDownload } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SeoHelmet from "../../../components/layout/SeoHelmet";
import MainLayout from "../../../components/layout/MainLayout";
import Header from "../../../components/ui/Header";
import ContactUs from "../../../components/ui/ContactUs";
import Footer from "../../../components/ui/Footer";
import { BgHome } from "../../home/assets/export-assets";
import { TaxImage } from "../assets/export-assets";
import { useFetchPostsDetails } from "../../../stores/mainAction";
import parse from "html-react-parser";
import "../../../assets/styles/wordpress-style.css";

const NewsUpdateDetail = () => {
  const { slug } = useParams();
  const { data, isLoading, isSuccess } = useFetchPostsDetails(slug);
  const [pdfUrl, setPdfUrl] = useState(null);

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
        return index < htmlContent.split("</p>").length - 1
          ? item + "</p>"
          : item + "</p>";
      })
      .join("");

    return (
      <div
        className="font-inter leading-[34px] text-[18px]"
        dangerouslySetInnerHTML={{ __html: contentWithBreaks }}
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
          title={data[0]?.title?.rendered}
          description={data[0]?.excerpt?.rendered}
        />
      )}

      <Header />
      <MainLayout loading={isLoading}>
        {isSuccess && (
          <div className="flex gap-y-2 w-full h-fit pb-[3rem] justify-center items-start mt-6 lg:mt-12">
            <div className="flex flex-col md:px-8 px-4 lg:max-w-[780px] gap-y-6">
              <h1
                dangerouslySetInnerHTML={{ __html: data[0]?.title?.rendered }}
                className="font-bold text-[32px] lg:text-[40px] w-full text-left lg:leading-[52px] leading-[42px]"
              />
              <div className="flex gap-x-2">
                <h1 className="text-[14px] text-gray-500">
                  {formatDate(data[0]?.modified)}
                </h1>
              </div>
              <img
                src={data[0]?.featured_image_url}
                alt="image-of-article"
                className="w-full h-[383px] object-cover rounded-xl"
              />

              <div className="flex w-full h-[1px] bg-gray-300 my-4"></div>

              <ContentWithLineBreaks htmlContent={data[0]?.content?.rendered} />

              {data[0]?.acf?.download_pdf && (
                <div
                  onClick={() =>
                    window.open(data[0]?.acf?.download_pdf, "_blank")
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

        <ContactUs />
        <Footer />
      </MainLayout>
    </>
  );
};

export default NewsUpdateDetail;
