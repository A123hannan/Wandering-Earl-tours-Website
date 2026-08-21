import React from "react";
import ReviewLogo from "@/components/svg/ReviewLogo/reviewLogo";
import MapIcon from "@/components/svg/LocationIconSvg/locationIconSvg";

type reviewProps = {
  description: string;
  clientName: string;
  location: string;
};

export default function reviewCard({
  description,
  clientName,
  location,
}: reviewProps) {
  return (
    <div className="flex flex-col justify-between h-full gap-[24px] py-6 px-5 sm:py-10 sm:px-8 2xl:py-[50px] 2xl:px-[40px] bg-white border border-[#D6D6D6] rounded-[24px] shadow-[0px_30px_60px_-24px_rgba(0,0,0,0.16)]">
      <div className="flex flex-col gap-4 sm:gap-6 2xl:gap-[30px] items-center justify-start">
        <ReviewLogo />
        <p className="font-[400] text-[15px] sm:text-[16px] 2xl:text-[18px] leading-[22px] sm:leading-[24px] tracking-[0%] text-center text-[#1E1E1E] line-clamp-6 sm:line-clamp-7 2xl:line-clamp-8">
          {description}
        </p>
      </div>
      <div className="flex flex-col justify-start items-center gap-[12px]">
        <p className="font-[Poppins] font-[600] text-[16px] leading-[100%] tracking-[0%] text-center">
          {clientName}
        </p>
        <span className="border border-[#D6D6D6] w-full"></span>
        <div className="flex flex-row gap-[6px] items-center">
          <MapIcon />
          <p className="font-[Poppins] font-[400] text-[14px] leading-[100%] tracking-[0%] text-[#8F8F8F]">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}