import React from "react";
import Image from "next/image";
import UserIcon from "@/components/svg/UserIconSvg/userIconSvg";
import LocationIcon from "@/components/svg/LocationIconSvg/locationIconSvg";
import CalenderIcon from "@/components/svg/CalenderIconSvg/calenderIconSvg";
import BadgeLimit from "@/components/Badges/BadgeLimit/badgeLimit";
import BadgeSold from "@/components/Badges/BadgeSold/badgeSold";
import Link from "next/link";

type CardProps = {
  badge: string;
  id?: number;
  imgSrc: string;
  heading: string;
  details: string;
  bookings: string;
  destination: string;
  duration: string;
  buttontext: string;
};

export default function TourCard({
  badge,
  id,
  imgSrc,
  heading,
  details,
  bookings,
  destination,
  duration,
  buttontext,
}: CardProps) {
  return (
    <div className="flex flex-col w-full h-full shadow-[0px_40px_48px_-16px_rgba(0,0,0,0.16)] bg-white rounded-[24px] overflow-hidden justify-between">
      {/* Image Wrapper */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[488/301] xl:h-[340px] 2xl:h-auto">
        <Image
          src={imgSrc}
          fill
          alt="destination"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 488px"
        />

        {badge === "Limit" ? (
          <BadgeLimit className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5" />
        ) : badge === "Sold" ? (
          <BadgeSold className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5" />
        ) : null}
      </div>

      {/* Details & Info Content */}
      <div className="flex flex-col flex-grow justify-between px-4 sm:px-[20px] pt-5 sm:pt-[24px] pb-5 sm:pb-[24px]">
        {/* Heading + Details */}
        <div>
          <p className="font-black text-lg sm:text-xl 2xl:text-[20px] leading-tight 2xl:leading-[100%] tracking-[0%] uppercase text-[#1E1E1E]">
            {heading}
          </p>
          <p className="pt-[10px] font-[400] text-sm sm:text-base 2xl:text-[16px] leading-[22px] tracking-[0%] text-[#1E1E1E] line-clamp-4">
            {details}
          </p>
        </div>

        {/* Meta info block */}
        <div className="flex flex-col pt-5 sm:pt-[24px] pb-6 sm:pb-[30px]">
          {/* Bookings + Destination — always same line */}
          <div className="flex flex-nowrap items-center gap-3 sm:gap-[16px] overflow-hidden">
            <div className="flex flex-row items-center shrink-0">
              <UserIcon />
              <div className="pt-[3.5px] pb-[3.5px] pl-[8px] whitespace-nowrap">
                <span className="font-[600] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#404040]">
                  {bookings.slice(0, 2)}{" "}
                </span>
                <span className="font-[400] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#8F8F8F]">
                  {bookings.slice(2, 12)}
                </span>{" "}
                <span className="font-[600] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#404040]">
                  {bookings.slice(12)}
                </span>
              </div>
            </div>

            <div className="flex flex-row items-center min-w-0">
              <LocationIcon />
              <div className="pt-[3.5px] pb-[3.5px] pl-[8px] min-w-0">
                <span className="font-[400] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#404040] truncate block">
                  {destination}
                </span>
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="flex flex-row items-center pt-[16px]">
            <CalenderIcon />
            <div className="pl-[8px] pt-[3.5px] pb-[3.5px]">
              <span className="font-[400] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#404040]">
                {duration.slice(0, 22)}
              </span>
              <span className="font-[400] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#8F8F8F]">
                {duration.slice(22)}
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link href={`/tours/${id}`} className="font-[700] text-[15px] sm:text-[16px] 2xl:text-[18px] leading-[100%] tracking-[0%] text-[var(--color-primary)] hover:text-[var(--color-accent)] pt-[14px] px-[24px] sm:px-[30px] pb-[15px] sm:pb-[16px] rounded-[30px] flex items-center justify-center gap-[10px] border border-[var(--color-border)] hover:border-[#E9482B4D] cursor-pointer transition-colors w-full">
          {buttontext}
        </Link>
      </div>
    </div>
  );
}