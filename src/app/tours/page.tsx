import React from "react";
import Image from "next/image";
import ToursIndexPage from "@/components/Tours/ToursRouteComponent/ToursRouteComponent";
import TourSection from "@/components/TourSection/tourSection";
export default function TourHero() {
  return (
    <div className="">
      <div className="pb-[128px]">
        <ToursIndexPage />
      </div>
      <div className="mx-auto max-w-[1760px] ">
        <div className="">
          <TourSection
            limit={8}
            year="2024"
            gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            page="/tours"
            button={false}
          />
        </div>
        <div className="mt-[94px]">
          <TourSection
            limit={8}
            year="2025"
            gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            page="/tours"
            button={false}
          />
        </div>
      </div>
    </div>
  );
}
