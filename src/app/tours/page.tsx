import React from "react";
import Image from "next/image";
import ToursIndexPage from "@/components/Tours/ToursHeroComponent/toursHeroComponent";
import TourSection from "@/components/TourSection/tourSection";

export default function TourHero() {
  return (
    <div className="w-full">
      <div>
        <ToursIndexPage />
      </div>
      <div className="mx-auto max-w-[1760px] px-[3rem] 2xl:px-[1rem] relative top-[-178px] z-50">
        <div id="tours-2024" className="scroll-mt-28">
          <TourSection
            limit={8}
            year="2024"
            cols={4}
            // gridCols="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4"
            page="/tours"
            button={false}
          />
        </div>
        <div id="tours-2025" className="mt-[94px] scroll-mt-28">
          <TourSection
            limit={8}
            year="2025"
            cols={4}
            // gridCols="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4"
            page="/tours"
            button={false}
          />
        </div>
      </div>
    </div>
  );
}
