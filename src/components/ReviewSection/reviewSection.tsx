"use client";

import React, { useState, useEffect } from "react";
import ReviewCard from "@/components/ReviewCard/reviewCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviewCardDetails = [
  {
    id: 1,
    description:
      "Thank you for such a well thought out and memorable trip. The sights and people of Morocco are wonderful. I appreciated you feeding my nerdy self with information on the geography, animals and plants of Morocco. The meals were laid back and wonderful and I appreciated the pace. Truly memorable. Thank you for your hard work, phenomenal organization and attention to the needs of the group.",
    clientName: "Kathy J.",
    location: "Morocco",
  },
  {
    id: 2,
    description:
      "Wandering through Romania was an incredible trip in every way: great sights, great people, and everything was very well-organized. This was an excellent trip in which we got to visit many beautiful places (both well-known and off the beaten path) all while in the company of a small, cohesive group of like-minded travelers. I’ve traveled to 40+ countries and this trip still stands out in my mind as one of the best I’ve been on. I would highly recommend it!",
    clientName: "Nadia A.",
    location: "Romania",
  },
  {
    id: 3,
    description:
      "Wandering through Romania was an incredible trip in every way: great sights, great people, and everything was very well-organized. This was an excellent trip in which we got to visit many beautiful places (both well-known and off the beaten path) all while in the company of a small, cohesive group of like-minded travelers. I’ve traveled to 40+ countries and this trip still stands out in my mind as one of the best I’ve been on. I would highly recommend it!",
    clientName: "Nadia A.",
    location: "Romania",
  },
  {
    id: 4,
    description:
      "The trip was amazing, on every level. Your experience and curiosity has created an amazing itinerary, and your willingness to accommodate the random wishes that came up was above and beyond. India is just endless fascination. The accommodations were great, and as someone that doesn’t really care about the food experience…it was great!!",
    clientName: "Tricia S.",
    location: "Morocco",
  },
  {
    id: 5,
    description:
      "The trip was amazing, on every level. Your experience and curiosity has created an amazing itinerary, and your willingness to accommodate the random wishes that came up was above and beyond. India is just endless fascination. The accommodations were great, and as someone that doesn’t really care about the food experience…it was great!!",
    clientName: "Tricia S.",
    location: "Morocco",
  },
  {
    id: 6,
    description:
      "Wandering through Romania was an incredible trip in every way: great sights, great people, and everything was very well-organized. This was an excellent trip in which we got to visit many beautiful places (both well-known and off the beaten path) all while in the company of a small, cohesive group of like-minded travelers. I’ve traveled to 40+ countries and this trip still stands out in my mind as one of the best I’ve been on. I would highly recommend it!",
    clientName: "Nadia A.",
    location: "Romania",
  },
];

export default function ReviewSection() {
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  // Dynamically calculate cards per page based on viewport size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        setCardsPerPage(3); // 2xl: 3 columns x 1 row = 3 cards
      } else if (width >= 768) {
        setCardsPerPage(4); // md/lg/xl: 2 columns x 2 rows = 4 cards
      } else {
        setCardsPerPage(1); // Mobile: 1 column x 1 row = 1 card
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.max(1, Math.ceil(reviewCardDetails.length / cardsPerPage));

  // Reset page index if resizing causes out-of-bounds page numbers
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [cardsPerPage, currentPage, totalPages]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const currentReviews = reviewCardDetails.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <div className="flex flex-col items-start w-full">
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full gap-4 sm:gap-0">
        <div className="flex flex-col items-start">
          <p className="font-[900] text-2xl sm:text-3xl md:text-4xl 2xl:text-[48px] leading-tight 2xl:leading-[100%] tracking-[0%] uppercase text-[#1E1E1E]">
            What our client says
          </p>
          <p className="font-[900] text-2xl sm:text-3xl md:text-4xl 2xl:text-[48px] leading-tight 2xl:leading-[100%] tracking-[0%] uppercase text-[#E9482B]">
            About Us
          </p>
        </div>

        {/* Action Arrows */}
        <div className="flex flex-row gap-4 sm:gap-6 2xl:gap-[35.61px]">
          <button
            type="button"
            className="group h-12 w-12 sm:h-14 sm:w-14 2xl:h-[65.39px] 2xl:w-[65.39px] rounded-full border-[2px] bg-transparent border-[#D6D6D6] flex justify-center items-center cursor-pointer hover:scale-[1.05] hover:border-[#1E365C] transition-all duration-200"
            onClick={handlePrev}
            aria-label="Previous reviews"
          >
            <ChevronLeft
              className="w-6 h-6 sm:w-8 sm:h-8 text-[#D6D6D6] group-hover:text-[#1E365C] transition-colors"
              strokeWidth={1.5}
            />
          </button>
          <button
            type="button"
            className="h-12 w-12 sm:h-14 sm:w-14 2xl:h-[65.39px] 2xl:w-[65.39px] rounded-full border-[2px] bg-[#1E365C] border-white flex justify-center items-center cursor-pointer hover:scale-[1.05] transition-all duration-200"
            onClick={handleNext}
            aria-label="Next reviews"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="w-full mt-6 sm:mt-8 2xl:mt-[32px] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-[20px] [&>*]:min-w-0">
        {currentReviews.map(({ id, description, clientName, location }) => (
          <ReviewCard
            key={id}
            clientName={clientName}
            description={description}
            location={location}
          />
        ))}
      </div>

      {/* Interactive Pagination Dots */}
      <div className="pt-6 sm:pt-8 2xl:pt-[32px] flex flex-row items-center justify-center w-full gap-3 sm:gap-4 2xl:gap-[16px]">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentPage(index)}
            aria-label={`Go to review page ${index + 1}`}
            className={`transition-all duration-300 rounded-[6px] outline-none cursor-pointer ${
              index === currentPage
                ? "w-[40px] sm:w-[55px] h-[9px] sm:h-[11px] bg-[#1E365C]"
                : "w-[18px] sm:w-[24px] h-[9px] sm:h-[11px] bg-[#1E365C]/30 hover:bg-[#1E365C]/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}