import React from "react";
import UserIcon from "@/components/svg/UserIconSvg/userIconSvg";
import LocationIcon from "@/components/svg/LocationIconSvg/locationIconSvg";
import CalenderIcon from "@/components/svg/CalenderIconSvg/calenderIconSvg";
import { Tour } from "@/data/type";

interface Props {
  tour?: Tour;
}

export default function DetailsPageComponent1({ tour }: Props) {
    const detailsText = tour?.details || "Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!";
    const bookingsText = tour?.bookings || "2 out of 12 spots booked";
    const destinationText = tour?.destination || "Mexico";
    const durationText = tour?.duration || "Nov 08 — Nov 17, 2024 (10 days)";

    return (
        <div className="flex flex-col gap-4 sm:gap-6 items-start w-full">
            <h2 className="font-semibold text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-snug sm:leading-relaxed text-dark">
                {detailsText}
            </h2>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 w-full pt-1">
                {/* Bookings */}
                <div className="flex items-center gap-2 bg-gray-50 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-xl sm:rounded-none">
                    <div className="text-primary shrink-0 scale-90 sm:scale-100">
                        <UserIcon />
                    </div>
                    <span className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-gray-700 whitespace-nowrap">
                        <strong className="font-bold text-gray-900">{bookingsText.slice(0, 2)}</strong>
                        <span className="text-gray-500">{bookingsText.slice(2, 12)}</span>
                        <strong className="font-bold text-gray-900">{bookingsText.slice(12)}</strong>
                    </span>
                </div>

                <span className="hidden md:inline-block h-5 w-[1px] bg-gray-300" />

                {/* Location */}
                <div className="flex items-center gap-2 bg-gray-50 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-xl sm:rounded-none">
                    <div className="text-accent shrink-0 scale-90 sm:scale-100">
                        <LocationIcon />
                    </div>
                    <span className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-gray-700 whitespace-nowrap">
                        {destinationText}
                    </span>
                </div>

                <span className="hidden md:inline-block h-5 w-[1px] bg-gray-300" />

                {/* Duration */}
                <div className="flex items-center gap-2 bg-gray-50 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-xl sm:rounded-none">
                    <div className="text-primary shrink-0 scale-90 sm:scale-100">
                        <CalenderIcon />
                    </div>
                    <span className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-gray-700 whitespace-nowrap">
                        {durationText}
                    </span>
                </div>
            </div>
        </div>
    );
}
