import Aos from "aos";
import React, { useEffect, useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
import Header from "../../../components/ui/Header";
import { IconLogo } from "../../../assets/logo/export-assets";
import TextReveal from "../../../components/animations/TextReveal";
import Footer from "../../../components/ui/Footer";
import ContactUs from "../../../components/ui/ContactUs";
import { image } from "../assets/export-assets";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const successStories = [
  {
    id: 1,
    title: "FMCG Company",
    description: `
      <p>assisted a
      leading company in the semiconductor and electronic components industry in a customs audit: <br/> <strong>Achieves 95% Reduction in
      Customs Audit Findings (import duty, taxes, and penalties)</strong> 
    `,
    link: "https://www.linkedin.com/posts/anagata-law-firm_anagatalawfirm-shapingfutures-anagatadelivers-activity-7359148638746345472-aVVQ",
  },
  {
    id: 2,
    title: "German Petfood",
    description: `
      <p><strong>assisted a German-based pet food company in obtaining book-value merger facility from the Indonesian tax authority.</strong>
       <br/><br/>The approval leads to a tax-efficient merger for the client in relation to its Indonesian restructuring.
    `,
    link: "https://www.linkedin.com/posts/anagata-law-firm_anagatalawfirm-shapingfutures-empoweringprogress-activity-7361264356036083712--5AC",
  },
  {
    id: 3,
    title: "FMCG Tax Audit",
    description: `
      <p><strong>Anagata represented a multinational FMCG company in appearing before the Indonesian tax authority in relation to its tax audit,</strong>
       <br/>resulting in a 95% reduction tax exposure compared to the tax authority's initial findings.
    `,
    link: "https://www.linkedin.com/posts/anagata-law-firm_anagatalawfirm-shapingfutures-empoweringprogress-activity-7361939701701726208-L5YE",
  },
  {
    id: 4,
    title: "Tobacco",
    description: `
      <p><strong>Anagata advised a Korea-based tobacco company on the strategic development of innovative tobacco products.</strong>
       <br/>The support helped the company modernize its offerings while staying financially sound and aligned with regulations across key markets from excise perspective.
    `,
    link: "https://www.linkedin.com/posts/anagata-law-firm_anagatalawfirm-anagatadelivers-shapingfutures-activity-7368904124735627264-11yG",
  },
  {
    id: 5,
    title: "Beauty Company",
    description: `
      <p><strong>Anagata advised a leading beauty company on merger-related risks to import licensing and supply chain continuity in Indonesia.</strong>
       <br/><br/>Helping the company understand risks, protect its import licenses, and ensure operational continuity in a tightly regulated consumer goods market.
    `,
    link: "https://www.linkedin.com/posts/anagata-law-firm_anagatalawfirm-empoweringprogress-shapingfutures-activity-7371418396569063424-L88z",
  },
  {
    id: 6,
    title: "Hospital Acquisition",
    description: `
      <p><strong>Anagata Law Firm advised on the operational restructuring and acquisition of a specialty hospital in Jakarta.</strong>
       <br/><br/>Helping manage the transition by handling healthcare regulations, setting up a compliant structure, and ensuring all licenses met Indonesian legal standards.
    `,
    link: "https://www.linkedin.com/posts/anagata-law-firm_anagatalawfirm-empoweringprogress-shapingfutures-activity-7373913618272362496-2Gf6",
  },
  {
    id: 7,
    title: "Restructuring",
    description: `
      <p><strong>Anagata assisted and advised a leading Asia-based private equity firm on the strategic restructuring of its Indonesian subsidiaries.</strong>
       <br/><br/>The new setup strengthens financial foundations and unlocks key fiscal incentives.
    `,
    link: "https://www.linkedin.com/posts/anagata-law-firm_anagatalawfirm-anagatadelivers-empoweringprogress-activity-7379040953900175360-IlPE",
  },
  {
    id: 8,
    title: "Travel Dispute",
    description: `
      <p><strong>Anagata Law Firm successfully represented a leading travel agency in resolving a customer dispute in court.</strong>
       <br/><br/>The case was decided in favor of our client, reinforcing our commitment to effective legal advocacy in the consumer sector.
    `,
    link: "https://www.linkedin.com/posts/anagata-law-firm_anagatalawfirm-anagatadelivers-empoweringprogress-activity-7386234787453333505-QDUh",
  },
  {
    id: 9,
    title: "Aquaculture Relocate",
    description: `
      <p><strong>Anagata have advised a global aquaculture company in relocating its operations within Indonesia.</strong>
       <br/><br/>Improving operational efficiency and streamlining export activities for its fishery products.
    `,
    link: "https://www.linkedin.com/posts/anagata-law-firm_anagatalawfirm-anagatadelivers-empoweringprogress-activity-7396821760287002624-9eXK",
  },
  {
    id: 10,
    title: "Aquaculture Restructuring",
    description: `
      <p><strong>Anagata advised a leading aquaculture company on restructuring its supply and export chains in response to U.S. trade policy changes.</strong>
       <br/><br/>Managing regulatory risks, adjust export strategies, and maintain smooth operations in a shifting global market.
    `,
    link: "https://www.linkedin.com/posts/anagata-law-firm_anagatalawfirm-empoweringprogress-shapingfutures-activity-7401911933165330432-hlwB",
  },
];

const OurSuccess = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    return () => Aos.refresh();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };
  return (
    <>
      <Header />
      <MainLayout
        title={"Our Practice Areas - Anagata Law Firm"}
        description={"Delivering strategic legal solutions with global experience"}
        className={"hidden lg:flex"}
      >
        <div data-aos="fade-up" className="w-full bg-ang-prm-blue grid grid-cols-2 h-[495px]">
          <div className="bg-ang-prm-blues flex w-full h-full justify-center items-start flex-col pl-24 pr-9">
            <div className="flex gap-x-4 items-center mb-10">
              <img src={IconLogo} alt="icon-anagata" className="h-6" />
              <h1 className="text-[24px] text-white">Client Success Stories</h1>
            </div>
            <TextReveal text={"Showcasing client success through Anagata's effective legal solutions."} />
          </div>
          <div className="bg-white flex w-full h-full justify-center items-center overflow-hidden relative">
            <div className="bg-ang-prm-text/20 absolute w-full h-full z-10"></div>
            <img src={image.HeroAsset} alt="" className="w-full h-full object-cover grayscale contrast-125" />
          </div>
        </div>

        <section id="our-core-practices" className="w-full px-24 flex py-[3rem] flex-col gap-y-7 pb-[6rem]">
          <div data-aos="fade-up" data-aos-delay={"100"} data-aos-offset="20" className="flex flex-col gap-y-8 pb-4">
            <div className="flex flex-col gap-y-6 w-full">
              <div className="h-[1px] w-full bg-ang-prm-text/30"></div>

              <div className="flex gap-x-4 items-center">
                <img src={IconLogo} alt="icon-anagata" className="h-6" />
                <h1 className="text-[32px] text-ang-prm-text">Success Shaped by Countless Stories</h1>
              </div>
            </div>

            <h3 data-aos="fade-up" data-aos-delay="100" className="text-[16px] text-gray-800 w-[90%] leading-8">
              Anagata's Success Story collection highlights impactful client achievements, demonstrating our dedicated legal
              approach, strategic insight, and proven results while showcasing the meaningful outcomes we consistently
              deliver across diverse cases and practice areas.
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-7">
            {successStories.slice(0, visibleCount).map((data, index) => {
              return (
                <div
                  key={"data-" + index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="rounded-xl border-[1px] border-gray-500 p-8 flex items-start justify-between flex-col gap-y-3 h-[22rem]"
                >
                  <div className="flex flex-col gap-y-2">
                    <h1 className="text-[1.2rem] font-bold" dangerouslySetInnerHTML={{ __html: data.title }} />
                    <div
                      className="font-light text-[0.85rem] leading-loose"
                      style={{ overflow: "auto", maxHeight: "95%", width: "100%" }}
                      dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                  </div>

                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full justify-between text-[0.9rem] font-semibold hover:text-ang-prm-red transition-all"
                  >
                    Learn More
                    <BsArrowUpRight className="text-[1.3rem]" />
                  </a>
                </div>
              );
            })}
          </div>

          {visibleCount < successStories.length && (
            <div className="flex justify-center mt-8">
              {/* <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-ang-prm-red text-white font-semibold rounded-lg hover:bg-ang-prm-red/90 transition-all"
              >
                Load More
              </button> */}

              <Button onClick={handleLoadMore} children className="button-outline-red-2 w-fit">
                <h1 className="text-[1.1rem]">Load More</h1>
              </Button>
            </div>
          )}
        </section>

        {/* Supporting Sectors */}
        <section
          data-aos="fade-up"
          id="supporting-sectors"
          className="w-full bg-ang-prm-red h-fit flex flex-col py-[3.8rem]"
        >
          <div data-aos="fade-up" className="w-full">
            <ContactUs />
          </div>
        </section>

        <Footer />
      </MainLayout>

      {/* Mobile Our Success */}
      <MainLayout
        title={"Our Practice Areas - Anagata Law Firm"}
        description={"Delivering strategic legal solutions with global experience"}
        className={"flex lg:hidden"}
      >
        <div data-aos="fade-up" className="w-full bg-ang-prm-blue grid grid-cols-1 h-[665px]">
          <div className="bg-white flex w-full h-full justify-center items-center overflow-hidden relative">
            <div className="bg-ang-prm-text/20 absolute w-full h-full z-10"></div>
            <img src={image.HeroAsset} alt="" className="w-full h-full object-cover grayscale contrast-125" />
          </div>
          <div className="bg-ang-prm-blues h-full flex w-full justify-center items-start flex-col pl-4 -my-3 -mb-12">
            <div className="flex gap-x-3 items-center mb-4">
              <img src={IconLogo} alt="icon-anagata" className="h-4" />
              <h1 className="text-[16px] text-white">Client Success Stories</h1>
            </div>
            <TextReveal
              textSize={"text-[24px]"}
              text={"Showcasing client success through Anagata's effective legal solutions."}
            />
          </div>
        </div>

        <section id="our-core-practices" className="w-full px-4 flex py-[3rem] flex-col gap-y-7 pb-[6rem]">
          <div data-aos="fade-up" data-aos-delay={"100"} data-aos-offset="20" className="flex flex-col gap-y-8 pb-4">
            <div className="flex flex-col gap-y-6 w-full">
              <div className="h-[1px] w-full bg-ang-prm-text/30"></div>

              <div className="flex gap-x-3 items-start">
                <img src={IconLogo} alt="icon-anagata" className="h-4 mt-2.5" />
                <h1 className="text-[24px] text-ang-prm-text font-bold">Success Shaped by Countless Stories</h1>
              </div>
            </div>

            <h3 data-aos="fade-up" data-aos-delay="100" className="text-[14px] text-gray-800 w-full leading-7">
              Anagata's Success Story collection highlights impactful client achievements, demonstrating our dedicated legal
              approach, strategic insight, and proven results while showcasing the meaningful outcomes we consistently
              deliver across diverse cases and practice areas.
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-7">
            {successStories.slice(0, visibleCount).map((data, index) => {
              return (
                <div
                  key={"mobile-data-" + index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="rounded-xl border-[1px] border-gray-500 p-6 flex items-start justify-between flex-col gap-y-3 min-h-[18rem]"
                >
                  <div
                    className="font-light text-[0.85rem] leading-loose"
                    style={{ overflow: "auto", maxHeight: "85%", width: "100%" }}
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />

                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full justify-between text-[0.85rem] font-semibold hover:text-ang-prm-red transition-all"
                  >
                    Learn More
                    <BsArrowUpRight className="text-[1.3rem]" />
                  </a>
                </div>
              );
            })}
          </div>

          {visibleCount < successStories.length && (
            <div className="flex justify-center mt-8">
              <Button onClick={handleLoadMore} children className="button-outline-red-2 w-fit">
                <h1 className="text-[1.1rem]">Load More</h1>
              </Button>
            </div>
          )}
        </section>

        {/* Supporting Sectors */}
        <section
          data-aos="fade-up"
          id="supporting-sectors"
          className="w-full bg-ang-prm-red h-fit flex flex-col py-[3.8rem]"
        >
          <div data-aos="fade-up" className="w-full -mb-20">
            <ContactUs />
          </div>
        </section>

        <Footer />
      </MainLayout>
    </>
  );
};

export default OurSuccess;
