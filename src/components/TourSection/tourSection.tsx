import React from "react";
import DestinationCard from "@/components/TourCard/tourCard";
import ArrowSvg from "@/components/svg/ArrowSvg/arrowSvg";
import { toursData } from "@/data/data";
import { destCardDetils2025 } from "@/data/2025data";
import { destCardDetils } from "@/data/2024data";

const COLS_WIDTH_MAP: Record<number, string> = {
  2: "w-full sm:w-[calc(50%-16px)] max-w-[488px] sm:max-w-none",
  3: "w-full sm:w-[calc(50%-16px)] 2xl:w-[calc(33.333%-14px)] max-w-[488px] sm:max-w-none",
  4: "w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] 2xl:w-[calc(25%-15px)] max-w-[488px] sm:max-w-none",
  5: "w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] 2xl:w-[calc(20%-16px)] max-w-[488px] sm:max-w-none",
};

interface TourSectionProps {
  page?: string;
  year?: string;
  /* How many columns to show at the widest breakpoint.*/
  cols?: 2 | 3 | 4 | 5;
  limit?: number;
  button?: boolean;
}

export default function TourSection({
  page = "/",
  year,
  cols = 3,
  limit = 3,
  button = true,
}: TourSectionProps) {
  const cardData =
    page === "/"
      ? year === "2025"
        ? destCardDetils2025
        : destCardDetils
      : toursData;

  const isToursPage = page === "/tours";
  const widthClass = COLS_WIDTH_MAP[cols] ?? COLS_WIDTH_MAP[3];
  return (
    <div>
      <div
        className={` relative z-10 flex w-full items-end ${
          isToursPage
            ? "justify-center text-center mb-[50px]"
            : "justify-between"
        }`}
      >
        <div className={isToursPage ? "w-full text-center" : ""}>
          {isToursPage ? (
            <h2 className="font-[900] font-black uppercase text-[48px] leading-[100%] tracking-[0%] text-center">
              <span className="text-[var(--color-accent)]">{year}</span>{" "}
              <span className="text-[var(--color-mid)]">Tours</span>
            </h2>
          ) : (
            <>
              <p className="font-[900] font-black text-5xl sm:text-7xl md:text-8xl lg:text-[100px] 2xl:text-[128px] leading-tight sm:leading-none 2xl:leading-[120px] tracking-normal uppercase text-[#1E365C]">
                {year ? year : ""}
              </p>

              <p className="font-[900] font-black text-5xl sm:text-7xl md:text-8xl lg:text-[100px] 2xl:text-[128px] leading-tight sm:leading-none 2xl:leading-[120px] tracking-[0%] uppercase text-[#404040]">
                Tours
              </p>
            </>
          )}
        </div>

        {button && !isToursPage && (
          <div className="pb-[10px] sm:pb-[8px] 2xl:pb-[13px]">
            <button className="group flex flex-row items-center cursor-pointer font-[700] leading-[100%] tracking-[0%] text-[#1E365C] rounded-[30px] border border-[#1E365C] hover:bg-[#1E365C] hover:text-white transition-colors text-[13px] sm:text-[14px] 2xl:text-[16px] gap-[6px] sm:gap-[8px] 2xl:gap-[10px] pt-[9px] pb-[10px] px-[18px] sm:pt-[11px] sm:pb-[12px] sm:px-[22px] 2xl:pt-[13px] 2xl:pb-[14px] 2xl:px-[31px] ">
              All Tours
              <div className="pl-0 pt-[1px] text-[#1E365C] group-hover:text-white transition-colors shrink-0">
                <ArrowSvg />
              </div>
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center items-start gap-6 sm:gap-8 2xl:gap-[20px] pt-8 sm:pt-10 2xl:pt-[32px]">
        {(limit ? cardData.slice(0, limit) : cardData).map(
          (
            {
              badge,
              cardNo,
              imgSrc,
              heading,
              details,
              bookings,
              destination,
              duration,
              buttontext,
            },
            index,
          ) => (
            <div
              key={`${heading}-${index}`}
              className={`${widthClass} flex justify-center`}
            >
              <DestinationCard
                badge={badge}
                cardNo={cardNo}
                imgSrc={imgSrc}
                heading={heading}
                details={details}
                bookings={bookings}
                destination={destination}
                duration={duration}
                buttontext={buttontext}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
