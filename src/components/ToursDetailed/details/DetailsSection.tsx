import React from "react";
import DetailsPageComponent1 from "@/components/ToursDetailed/DetailsPage/DetailsPageComponent1/page";
import DetailsPageComponent2 from "@/components/ToursDetailed/DetailsPage/DetailsPageComponent2/page";
import DetailsPageComponent3 from "@/components/ToursDetailed/DetailsPage/DetailsPageComponent3/page";
import DetailsPageComponent4 from "@/components/ToursDetailed/DetailsPage/DetailsPageComponent4/page";
import { Tour } from "@/data/type";

export default function DetailsSection({ tour }: { tour?: Tour }) {
    return (
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full max-w-[1038px]">
            <DetailsPageComponent1 tour={tour} />
            <DetailsPageComponent2 />
            <DetailsPageComponent3 />
            <DetailsPageComponent4 />
        </div>
    );
}
