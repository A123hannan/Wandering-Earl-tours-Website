import React from "react";
import Image from "next/image";

export default function CountryMap() {
  return (
    <div className="relative z-[-10] w-full overflow-hidden 2xl:overflow-visible">
      {/* Background Gradient Blur Underlay - Locked exactly at 2xl */}
      <div className="absolute -top-[50px] sm:-top-[80px] 2xl:-top-[100px] -left-10 sm:-left-20 2xl:-left-[160px] -right-10 sm:-right-20 2xl:-right-[160px] bottom-0 bg-[linear-gradient(180deg,rgba(30,54,92,0.3)_0%,#1E365C_20%,#1E365C_90%,rgba(30,54,92,0.4)_100%)] blur-[40px] sm:blur-[50px] 2xl:blur-[60px] pointer-events-none z-0" />

      {/* Main Section Content Container */}
      <div className="w-full max-w-[1920px] mx-auto relative pt-12 sm:pt-16 md:pt-20 2xl:pt-[77px] pb-16 sm:pb-24 2xl:pb-[125px] flex flex-col gap-10 sm:gap-14 md:gap-20 2xl:gap-[80px]">
        {/* Title Header */}
        <div className="pt-8 sm:pt-16 md:pt-24 2xl:pt-[151px] px-4 sm:px-8 md:px-16 lg:px-24 2xl:px-[377px] text-center z-10">
          <p className="font-inter font-black text-2xl sm:text-3xl md:text-4xl 2xl:text-[48px] text-center uppercase leading-tight sm:leading-snug 2xl:leading-[58px] text-white">
            countries where we are offering tours{" "}
            <span className="text-[#E9482B]">each year</span>
          </p>
        </div>

        {/* Interactive Map Image Wrapper */}
        <div className="px-4 sm:px-8 md:px-12 2xl:px-[79.98px] pb-12 sm:pb-20 2xl:pb-[115px] z-10">
          <Image
            src="/svg/Map.svg"
            alt="Map"
            width={1920}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
