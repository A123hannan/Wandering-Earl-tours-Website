import React from "react";
import { getTourById } from "@/data/getTour";
import { notFound } from "next/navigation";
import DetailsSection from "@/components/ToursDetailed/details/DetailsSection";

interface props {
    params: Promise<{ id: string }>;
}

export default async function TourSlugPage({ params }: props) {
    const { id } = await params;
    const tour = getTourById(id);
    if (!tour) {
        notFound();
    }
    return <DetailsSection tour={tour} />;
}
