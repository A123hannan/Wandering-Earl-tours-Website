import React from "react";
import DestinationCard from "@/components/TourCard/tourCard";
import ArrowSvg from "@/components/svg/ArrowSvg/arrowSvg";
import { toursData } from "@/data/data";

/* =========================================================
   2025 TOUR DATA
========================================================= */

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

/* =========================================================
   2024 TOUR DATA
========================================================= */

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

/* =========================================================
   COLUMN WIDTH MAP

   Each entry is written out as a complete, literal Tailwind
   class string (not built by string-concatenation) so the
   JIT compiler can find and generate it at build time.
   That's what lets `cols` be dynamic per usage while still
   producing real Tailwind classes.

   Card container is ALWAYS `flex flex-wrap justify-center`,
   never CSS grid — grid has no way to center a short final
   row, flex-wrap does it for free.
========================================================= */

const COLS_WIDTH_MAP: Record<number, string> = {
  2: "w-full sm:w-[calc(50%-16px)] max-w-[488px] sm:max-w-none",
  3: "w-full sm:w-[calc(50%-16px)] 2xl:w-[calc(33.333%-14px)] max-w-[488px] sm:max-w-none",
  4: "w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] max-w-[488px] sm:max-w-none",
  5: "w-full sm:w-[calc(50%-16px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] 2xl:w-[calc(20%-16px)] max-w-[488px] sm:max-w-none",
};

/* =========================================================
   PROPS
========================================================= */

interface TourSectionProps {
  page?: string;
  year?: string;

  /**
   * How many columns to show at the widest breakpoint.
   * 2, 3, 4, or 5 — smaller breakpoints scale down automatically.
   * Any incomplete last row is always centered.
   */
  cols?: 2 | 3 | 4 | 5;

  limit?: number;
  button?: boolean;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function TourSection({
  page = "/",
  year,
  cols = 3,
  limit = 3,
  button = true,
}: TourSectionProps) {
  /* -------------------------------------------------------
     DATA
  ------------------------------------------------------- */

  const cardData =
    page === "/"
      ? year === "2025"
        ? destCardDetils2025
        : destCardDetils
      : toursData;

  const isToursPage = page === "/tours";

  const widthClass = COLS_WIDTH_MAP[cols] ?? COLS_WIDTH_MAP[3];

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */

  return (
    <div>
      {/* =====================================================
          HEADER
      ===================================================== */}

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

      {/* =====================================================
          DESTINATION GRID

          flex-wrap + justify-center, always. This is what makes
          any incomplete final row (1 or 2 leftover cards) sit
          centered instead of pinned to the left/grid-track.
      ===================================================== */}

      <div
        className="
          flex flex-wrap justify-center

          gap-6
          sm:gap-8
          2xl:gap-[20px]

          pt-8
          sm:pt-10
          2xl:pt-[32px]
        "
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
