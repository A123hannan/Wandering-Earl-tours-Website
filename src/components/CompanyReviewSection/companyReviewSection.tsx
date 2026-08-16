import React from "react";
import ImageContainer from "@/components/CompanyReviewSection/ImageContainer/imageContainer";
import { stylesData } from "@/data/OurStlye/ourStyle";

interface props {
  page: string;
}
export default function CompanyReviewSection({ page }: props) {
  return (
    <>
      {page === "/about" && <div className="relative top-[-60px] sm:top-[-80px] md:top-[-100px] lg:top-[-120px] 2xl:top-[-150px] flex flex-col lg:flex-row mb-[40px] sm:mb-[60px] md:mb-[80px] lg:mb-[100px] 2xl:mb-[140px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-0 sm:pt-[12px] lg:pt-[18px] 2xl:pt-[24px] mr-0 lg:mr-[60px] xl:mr-[90px] 2xl:mr-[128px] mb-8 lg:mb-0">
          <p className="font-[500] text-base sm:text-lg 2xl:text-[20px] leading-relaxed sm:leading-8 2xl:leading-[36px] tracking-[0%] text-dark">
            Our team at Wandering Earl Tours has a strong desire to bring rich
            cultural connections around the world to people who would appreciate
            them the most. And we hold this mission at the core of everything we
            do.
          </p>
          <p className="font-[500] text-base sm:text-lg 2xl:text-[20px] leading-relaxed sm:leading-8 2xl:leading-[36px] tracking-[0%] text-dark mt-4 sm:mt-5 2xl:mt-[24px]">
            Focused, purposeful and incredibly rewarding trips are the goal, and
            each member of our team brings their own insights, skills and
            enthusiasm to the table. When combined, our goal is achieved, with
            unique Wandering Earl Tours that we are all genuinely excited to
            offer!
          </p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <ImageContainer containerNumber={1} />
        </div>
      </div>}
      {page === "/ourStyle" &&
        stylesData.map((styleData: any) => (
          <div key={styleData.index} className={`relative top-[-60px] sm:top-[-80px] md:top-[-100px] lg:top-[-120px] 2xl:top-[-150px] flex flex-col lg:items-center mb-[40px] sm:mb-[60px] md:mb-[80px] lg:mb-[100px] 2xl:mb-[140px] overflow-x-hidden ${(styleData?.index ?? 0) % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
            <div className={`flex-1 min-w-0 flex flex-col items-start justify-center gap-[20px] sm:gap-[30px] 2xl:gap-[40px] ${styleData.index % 2 === 0 ? "mr-0 lg:mr-[24px] xl:mr-[60px] 2xl:mr-[128px]" : "mr-0 lg:ml-[24px] xl:ml-[60px] 2xl:ml-[128px]"} mb-8 lg:mb-0`}>
              <div className="flex flex-col">
                <p className="font-[700] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[36px] xl:text-[44px] 2xl:text-[49px] leading-[110%] tracking-[0%] uppercase text-accent">{styleData?.title1}</p>
                <p className="font-[700] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[36px] xl:text-[44px] 2xl:text-[49px] leading-[110%] tracking-[0%] uppercase text-dark">{styleData?.title2}</p>
              </div>
              <div className="flex flex-col">
                {styleData?.description1 && <p className="font-[500] text-base sm:text-lg 2xl:text-[20px] leading-relaxed sm:leading-8 2xl:leading-[36px] tracking-[0%] text-dark mt-4 sm:mt-5 2xl:mt-[24px]">
                  {styleData?.description1}
                </p>}
                {styleData?.description2 && <p className="font-[500] text-base sm:text-lg 2xl:text-[20px] leading-relaxed sm:leading-8 2xl:leading-[36px] tracking-[0%] text-dark mt-4 sm:mt-5 2xl:mt-[24px]">
                  {styleData?.description2}
                </p>}
                {styleData?.description3 && <p className="font-[500] text-base sm:text-lg 2xl:text-[20px] leading-relaxed sm:leading-8 2xl:leading-[36px] tracking-[0%] text-dark mt-4 sm:mt-5 2xl:mt-[24px]">
                  {styleData?.description3}
                </p>}
              </div>
            </div>
            <div className="shrink-0 flex justify-center lg:justify-end">
              <ImageContainer containerNumber={styleData.index + 2} imageSources={styleData.imageSources} />
            </div>
          </div>))}
    </>
  );
}