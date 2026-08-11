import React from "react";
import DestinationCard from "@/components/TourCard/tourCard";
import Button from "@/components/Button/button";
import ArrowSvg from "@/components/svg/ArrowSvg/arrowSvg";

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

export default function TourSection({ year }: { year?: string }) {
  const cardData = year === "2025" ? destCardDetils2025 : destCardDetils;
  return (
    <div>
      {/* Header and Action Button */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-0 w-full">
        <div>
          <p className="font-[900] font-black text-5xl sm:text-7xl md:text-8xl lg:text-[100px] 2xl:text-[128px] leading-tight sm:leading-none 2xl:leading-[120px] tracking-normal uppercase text-[#1E365C]">
            {year}
          </p>
          <p className="font-[900] font-black text-5xl sm:text-7xl md:text-8xl lg:text-[100px] 2xl:text-[128px] leading-tight sm:leading-none 2xl:leading-[120px] tracking-[0%] uppercase text-[#404040]">
            Tours
          </p>
        </div>

        <div className="pb-0 sm:pb-[13px] 2xl:pb-[13px]">
          <button
            className="
      group
      font-[700] text-[16px] leading-[100%] tracking-[0%]
      text-[#1E365C]
      flex cursor-pointer
      pt-[13px] px-[31px] pb-[14px]
      flex-row items-center gap-[10px]
      rounded-[30px]
      border border-[#1E365C]
      hover:bg-[#1E365C]
      hover:text-white
      transition-colors
    "
          >
            All Tours
            <div className="pl-[10px] pt-[1px] text-[#1E365C] group-hover:text-white transition-colors">
              <ArrowSvg />
            </div>
          </button>
        </div>
      </div>

      {/* Destination Grid */}
      <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-8 2xl:gap-[20px] pt-8 sm:pt-10 2xl:pt-[32px]">
        {cardData.map(
          ({
            badge,
            cardNo,
            imgSrc,
            heading,
            details,
            bookings,
            destination,
            duration,
            buttontext,
          }) => (
            <div
              key={heading}
              className="w-full md:w-[calc(50%-16px)] 2xl:w-[calc(33.333%-13.33px)] flex"
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
