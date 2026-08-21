import React from "react";
import UserIcon from "@/components/svg/featureCardIcons/UserIcon/userIcon";
import StarIcon from "@/components/svg/featureCardIcons/StarIcon/starIcon";
import MapIcon from "@/components/svg/featureCardIcons/MapIcon/mapIcon";
import MessageIcon from "@/components/svg/featureCardIcons/MessageIcon/messageIcon";
import SitIcon from "@/components/svg/featureCardIcons/SitIcon/sitIcon";
import BookIcon from "@/components/svg/featureCardIcons/BookIcon/bookIcon";
import Button from "@/components/Button/button";

type CardProps = {
  icon?: number;
  heading: string;
  details: string;
  buttontext: string;
};

export default function StandardCard({
  icon,
  heading,
  details,
  buttontext,
}: CardProps) {
  return (
    <div className="flex flex-col justify-between w-full h-full bg-white border border-[#D6D6D6] rounded-[24px] gap-6 sm:gap-8 2xl:gap-[40px] p-6 sm:p-8 2xl:pt-[30px] 2xl:pr-[40px] 2xl:pb-[40px] 2xl:pl-[40px] shadow-[0px_30px_60px_-24px_rgba(0,0,0,0.16)]">
      <div className="flex flex-col items-center justify-start gap-4 sm:gap-6 2xl:gap-[30px]">
        {/* Icon Container */}
        <div className="pt-5 pb-5 px-5 2xl:pt-[27px] 2xl:pb-[28px] 2xl:px-[25px] rounded-[16px] bg-[#1E365C]/5 flex items-center justify-center">
          {icon === 1 ? (
            <UserIcon />
          ) : icon === 2 ? (
            <StarIcon />
          ) : icon === 3 ? (
            <MapIcon />
          ) : icon === 4 ? (
            <MessageIcon />
          ) : icon === 5 ? (
            <SitIcon />
          ) : (
            <BookIcon />
          )}
        </div>

        {/* Heading */}
        <div className="w-full">
          <p className="font-[900] text-xl sm:text-2xl 2xl:text-[24px] leading-tight 2xl:leading-[100%] tracking-[0%] text-center uppercase text-[#1E1E1E] line-clamp-1">
            {heading}
          </p>
        </div>

        {/* Details */}
        <div className="w-full">
          <p className="font-[400] text-base sm:text-lg 2xl:text-[20px] leading-relaxed 2xl:leading-[100%] tracking-[0%] text-center text-[#404040] line-clamp-4 sm:line-clamp-3 2xl:line-clamp-4">
            {details}
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="group flex items-center justify-center self-center pt-[15px] px-[30px] pb-[16px] gap-[10px] border border-[#1E365C] rounded-[30px] hover:bg-[#1E365C] hover:text-white transition-colors font-[600] text-[16px] sm:text-[18px] leading-[100%] text-center tracking-[0%] text-[#1E365C] group-hover:text-white cursor-pointer">
        {buttontext}
      </button>
    </div>
  );
}