import React from "react";
import Image from "next/image";

export default function MapSection() {
    return (
        <div className="w-full max-w-[1038px] overflow-hidden rounded-[16px]">
            <Image src="/images/toursDetailed/Map/ToursDetailedMap.png" alt="Map" height={1038} width={1038} className="w-full h-auto object-cover rounded-[16px]" />
        </div>
    );
}
