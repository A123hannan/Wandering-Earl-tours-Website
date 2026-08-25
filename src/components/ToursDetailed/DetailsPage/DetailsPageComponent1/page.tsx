import React from "react";
import UserIcon from "@/components/svg/UserIconSvg/userIconSvg";
import LocationIcon from "@/components/svg/LocationIconSvg/locationIconSvg";
import CalenderIcon from "@/components/svg/CalenderIconSvg/calenderIconSvg";
import { Tour } from "@/data/type";

interface Props {
  tour?: Tour;
}

export default function DetailsPageComponent1({ tour }: Props) {
    const detailsText = tour?.details || "Join us on an unforgettable food-focused adventure in Southeast Asia, where we will uncover the culinary secrets of Thailand, Malaysia and Singapore!";
    const bookingsText = tour?.bookings || "2 out of 12 spots booked";
    const destinationText = tour?.destination || "Romania";
    const durationText = tour?.duration || "Nov 8 - Nov 17, 2024 (10 days)";

    return (
        <div className="flex flex-col gap-[16px] sm:gap-[24px] items-start w-full">
            <p className="font-[500] text-[18px] sm:text-[22px] md:text-[24px] leading-[26px] sm:leading-[30px] tracking-[0%] text-dark">{detailsText}</p>
            <div className="flex flex-row gap-4 sm:gap-6 md:gap-[30px] items-center flex-wrap">

                <div className="flex flex-row items-center shrink-0">
                    <UserIcon />
                    <div className="pt-[3.5px] pb-[3.5px] pl-[8px] whitespace-nowrap">
                        <span className="font-[600] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#404040]">
                            {bookingsText.slice(0, 2)}{" "}
                        </span>
                        <span className="font-[400] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#8F8F8F]">
                            {bookingsText.slice(2, 12)}
                        </span>{" "}
                        <span className="font-[600] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#404040]">
                            {bookingsText.slice(12)}
                        </span>
                    </div>
                </div>
                <span className="hidden md:inline-block bg-border h-[24px] w-[0px] border-[1px]" />
                <div className="flex flex-row items-center min-w-0">
                    <LocationIcon />
                    <div className="pt-[3.5px] pb-[3.5px] pl-[8px] min-w-0">
                        <span className="font-[400] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#404040] truncate block">
                            {destinationText}
                        </span>
                    </div>
                </div>

                <span className="hidden md:inline-block bg-border h-[24px] w-[0px] border-[1px]" />
                {/* Duration */}
                <div className="flex flex-row items-center">
                    <CalenderIcon />
                    <div className="pl-[8px] pt-[3.5px] pb-[3.5px]">
                        <span className="font-[400] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#404040]">
                            {durationText}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
