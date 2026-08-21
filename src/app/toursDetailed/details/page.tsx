import React from "react";
import Image from "next/image";
import DetailsPageComponent1 from "@/components/ToursDetailed/DetailsPage/DetailsPageComponent1/page";
import DetailsPageComponent2 from "@/components/ToursDetailed/DetailsPage/DetailsPageComponent2/page";
import DetailsPageComponent3 from "@/components/ToursDetailed/DetailsPage/DetailsPageComponent3/page";
import DetailsPageComponent4 from "@/components/ToursDetailed/DetailsPage/DetailsPageComponent4/page";
export default function TourHero() {
    return (
        <div className="flex flex-col gap-[40px] max-w-[1038px]">

            <DetailsPageComponent1 />
            <DetailsPageComponent2 />
            <DetailsPageComponent3 />
            <DetailsPageComponent4 />

        </div>
    );
}
