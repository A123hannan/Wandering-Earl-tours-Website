import React from "react";
import UserIcon from "@/components/svg/UserIconSvg/userIconSvg";
import LocationIcon from "@/components/svg/LocationIconSvg/locationIconSvg";
import CalenderIcon from "@/components/svg/CalenderIconSvg/calenderIconSvg";
export default function TourHero() {
    return (
        <div className="flex flex-col gap-[24px] items-start w-full">
            <p className="font-[500] text-[24px] leading-[30px] tracking-[0%] text-dark">Join us on an unforgettable food-focused adventure in Southeast Asia, where we will uncover the culinary secrets of Thailand, Malaysia and Singapore!</p>
            <div className="flex flex-row gap-[30px] items-center ">

                <div className="flex flex-row items-center shrink-0">
                    <UserIcon />
                    <div className="pt-[3.5px] pb-[3.5px] pl-[8px] whitespace-nowrap">
                        <span className="font-[600] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#404040]">
                            2
                        </span>
                        <span className="font-[400] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#8F8F8F]">
                            out of 12
                        </span>{" "}
                        <span className="font-[600] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#404040]">
                            spots booked
                        </span>
                    </div>
                </div>
                <span className="bg-border h-[24px] w-[0px] border-[1px]" />
                <div className="flex flex-row items-center min-w-0">
                    <LocationIcon />
                    <div className="pt-[3.5px] pb-[3.5px] pl-[8px] min-w-0">
                        <span className="font-[400] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#404040] truncate block">
                            Romania
                        </span>
                    </div>
                </div>

                <span className="bg-border h-[24px] w-[0px] border-[1px]" />
                {/* Duration */}
                <div className="flex flex-row items-center ">
                    <CalenderIcon />
                    <div className="pl-[8px] pt-[3.5px] pb-[3.5px]">
                        <span className="font-[400] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#404040]">
                            Nov 8 - Nov 17, 2024
                        </span>
                        <span className="font-[400] text-[13px] sm:text-[14px] leading-[100%] tracking-[0%] text-[#8F8F8F]">
                            (10 days)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}