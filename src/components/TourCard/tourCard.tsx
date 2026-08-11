import React from "react";
import Image from "next/image";
import UserIcon from "@/components/svg/UserIconSvg/userIconSvg";
import MapIcon from "@/components/svg/LocationIconSvg/locationIconSvg";
import CalenderIcon from "@/components/svg/CalenderIconSvg/calenderIconSvg";
import Button from "@/components/Button/button";
import BadgeLimit from "@/components/Badges/BadgeLimit/badgeLimit";
import BadgeSold from "@/components/Badges/BadgeSold/badgeSold";

type CardProps = {
  badge: string;
  cardNo?: number;
  imgSrc: string;
  heading: string;
  details: string;
  bookings: string;
  destination: string;
  duration: string;
  buttontext: string;
};

export default function DestinationCard({
  badge,
  cardNo,
  imgSrc,
  heading,
  details,
  bookings,
  destination,
  duration,
  buttontext,
}: CardProps) {
  return (
    <div className="flex flex-col w-full shadow-[0px_40px_48px_-16px_rgba(0,0,0,0.16)] bg-white rounded-[24px] overflow-hidden h-full justify-between">
      {/* Image Wrapper */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[488/301] 2xl:w-[488px] 2xl:h-[301px] 2xl:aspect-none">
        <Image
          src={imgSrc}
          fill
          alt="destination"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 488px"
        />

        {badge === "Limit" ? (
          <BadgeLimit className="absolute top-4 right-4 sm:top-6 sm:right-6 2xl:top-[221px] 2xl:left-[408px] 2xl:bottom-[20px] 2xl:right-[20px]" />
        ) : badge === "Sold" ? (
          <BadgeSold className="absolute top-4 right-4 sm:top-6 sm:right-6 2xl:top-[221px] 2xl:left-[408px] 2xl:bottom-[20px] 2xl:right-[20px]" />
        ) : null}
      </div>

      {/* Details & Info Content */}
      <div className="flex flex-col flex-grow justify-between px-4 sm:px-[20px] pt-5 sm:pt-[24px] pb-5 sm:pb-[24px]">
        <div>
          <p className="font-black text-lg sm:text-xl 2xl:text-[20px] leading-tight 2xl:leading-[100%] tracking-[0%] uppercase text-[#1E1E1E]">
            {heading}
          </p>
          <p className="pt-[10px] font-[400] text-sm sm:text-base 2xl:text-[16px] leading-[22px] tracking-[0%] text-[#1E1E1E] line-clamp-4">
            {details}
          </p>
        </div>
        <div className="flex flex-col pt-5 sm:pt-[24px] pb-6 sm:pb-[30px]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-[16px]">
            <div className="flex flex-row items-center">
              <UserIcon />
              <div className="pt-[3.5px] pb-[3.5px] pl-[8px]">
                <span className="font-[600] text-[14px] leading-[100%] tracking-[0%] text-[#404040]">
                  {bookings.slice(0, 2)}{" "}
                </span>
                <span className="font-[400] text-[14px] leading-[100%] tracking-[0%] text-[#8F8F8F]">
                  {bookings.slice(2, 12)}
                </span>{" "}
                <span className="font-[600] text-[14px] leading-[100%] tracking-[0%] text-[#404040]">
                  {bookings.slice(12)}
                </span>
              </div>
            </div>

            <div className="flex flex-row items-center">
              <MapIcon />
              <div className="pt-[3.5px] pb-[3.5px] pl-[8px]">
                <span className="font-[400] text-[14px] leading-[100%] tracking-[0%] text-[#404040]">
                  {destination}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center pt-[16px]">
            <CalenderIcon />
            <div className="pl-[8px] pt-[3.5px] pb-[3.5px]">
              <span className="font-[400] text-[14px] leading-[100%] tracking-[0%] text-[#404040]">
                {duration.slice(0, 22)}
              </span>
              <span className="font-[400] text-[14px] leading-[100%] tracking-[0%] text-[#8F8F8F]">
                {duration.slice(22)}
              </span>
            </div>
          </div>
        </div>
        {/* Action Button */}
        <button className="font-[700] text-[16px] sm:text-[18px] leading-[100%] tracking-[0%] text-[var(--color-primary)] hover:text-[var(--color-accent)] pt-[15px] px-[30px] pb-[16px] rounded-[30px] flex justify-center border border-[var(--color-border)] hover:border-[#E9482B4D] flex gap-[10px] cursor-pointer">
          {buttontext}
        </button>
      </div>
    </div>
  );
}
