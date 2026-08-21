import React from "react";
import Image from "next/image";
import PhotoGallery from "@/components/PastTours/PhotoGallery/photoGallery";
export default function TourHero() {
    return (
        <div className="flex flex-col gap-[40px] max-w-[1038px]">
            <PhotoGallery last={false} visible={13} />
        </div>
    );
}
