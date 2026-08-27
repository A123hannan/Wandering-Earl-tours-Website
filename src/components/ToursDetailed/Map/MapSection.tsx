import React from "react";
import Image from "next/image";

export default function MapSection() {
    return (
        <div className="w-full max-w-[1038px] mx-auto overflow-hidden rounded-[20px] border border-gray-200 shadow-[0px_10px_30px_rgba(0,0,0,0.06)] bg-white p-2 sm:p-3">
            <div className="relative w-full aspect-square xs:aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-[14px] overflow-hidden">
                <Image
                    src="/images/toursDetailed/Map/ToursDetailedMap.png"
                    alt="Tour Map Route"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1038px"
                    className="object-contain object-center"
                    priority
                />
            </div>
        </div>
    );
}