import React from "react";
import Image from "next/image";

export default function TourHero() {
    return (
        <div className=" max-w-[1038px]">
            <Image src={"/images/toursDetailed/Map/ToursDetailedMap.png"} alt="Map" height={1038} width={1038} className="object-contain" />
        </div>
    );
}
