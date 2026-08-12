import React from "react";
import DestinationCard from "@/components/TourCard/tourCard";
import Button from "@/components/Button/button";
import ArrowSvg from "@/components/svg/ArrowSvg/arrowSvg";
import { toursData } from "@/data/data";

const destCardDetils2025 = [
  {
    badge: "Limit",
    cardNo: 1,
    imgSrc: "/images/landingpage/2025CardImages/dcard1.png",
    heading: "WANDER ACROSS MEXICO",
    details:
      "Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!",
    bookings: "2 out of 12 spots booked",
    destination: "Mexico",
    duration: "Nov 08 — Nov 17, 2024 (10 days)",
    buttontext: "Details",
  },
  {
    badge: "",
    cardNo: 3,
    imgSrc: "/images/landingpage/2025CardImages/dcard2.png",
    heading: "WANDER TO VIETNAM",
    details:
      "Join our unique journey into the heart of Vietnam! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!",
    bookings: "2 out of 12 spots booked",
    destination: "Vietnam",
    duration: "Nov 08 — Nov 17, 2024 (10 days)",
    buttontext: "Details",
  },
  {
    badge: "Sold",
    cardNo: 2,
    imgSrc: "/images/landingpage/2025CardImages/dcard3.png",
    heading: "WANDER ACROSS Romania",
    details:
      "Join our unique journey into the heart of Romania! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!",
    bookings: "2 out of 12 spots booked",
    destination: "Romania",
    duration: "Nov 08 — Nov 17, 2024 (10 days)",
    buttontext: "Add to wishlist",
  },
];

const destCardDetils = [
  {
    badge: "Limit",
    cardNo: 1,
    imgSrc: "/images/landingpage/2024CardImages/dCard1.png",
    heading: "WANDER ACROSS MEXICO",
    details:
      "Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!",
    bookings: "2 out of 12 spots booked",
    destination: "Mexico",
    duration: "Nov 08 — Nov 17, 2024 (10 days)",
    buttontext: "Details",
  },
  {
    badge: "Sold",
    cardNo: 2,
    imgSrc: "/images/landingpage/2024CardImages/dCard2.png",
    heading: "WANDER TO VIETNAM",
    details:
      "Join our unique journey into the heart of Vietnam! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!",
    bookings: "2 out of 12 spots booked",
    destination: "Vietnam",
    duration: "Nov 08 — Nov 17, 2024 (10 days)",
    buttontext: "Add to wishlist",
  },
  {
    badge: "",
    cardNo: 3,
    imgSrc: "/images/landingpage/2024CardImages/dCard3.png",
    heading: "WANDER ACROSS Romania",
    details:
      "Join our unique journey into the heart of Romania! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!",
    bookings: "2 out of 12 spots booked",
    destination: "Romania",
    duration: "Nov 08 — Nov 17, 2024 (10 days)",
    buttontext: "Details",
  },
];

interface TourSectionProps {
  page?: string;
  year?: string;
  gridCols?: string;
  limit?: number;
  button?: boolean;
}

export default function TourSection({
  page = "/",
  year,
  gridCols = "grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3",
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

  return (
    <div>
      {/* Header Container */}
      <div
        className={`relative z-10 flex w-full items-center ${
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
                {year}
              </p>
              <p className="font-[900] font-black text-5xl sm:text-7xl md:text-8xl lg:text-[100px] 2xl:text-[128px] leading-tight sm:leading-none 2xl:leading-[120px] tracking-[0%] uppercase text-[#404040]">
                Tours
              </p>
            </>
          )}
        </div>

        {button && !isToursPage && (
          <div className="pb-0 sm:pb-[13px] 2xl:pb-[13px]">
            <button className="group font-[700] text-[16px] leading-[100%] tracking-[0%] text-[#1E365C] flex cursor-pointer pt-[13px] px-[31px] pb-[14px] flex-row items-center gap-[10px] rounded-[30px] border border-[#1E365C] hover:bg-[#1E365C] hover:text-white transition-colors">
              All Tours
              <div className="pl-[10px] pt-[1px] text-[#1E365C] group-hover:text-white transition-colors">
                <ArrowSvg />
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Destination Grid */}
      <div
        className={`${gridCols} gap-6 sm:gap-8 2xl:gap-[20px] pt-8 sm:pt-10 2xl:pt-[32px]`}
      >
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
              className="w-full flex justify-center"
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
