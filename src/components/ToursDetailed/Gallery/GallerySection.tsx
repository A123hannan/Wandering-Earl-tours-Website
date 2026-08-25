"use client";

import React, { useState } from "react";
import Image from "next/image";

const galleryImages = [
    { src: "/images/pastTours/ImageContainer/Image1.png", alt: "Tour destination photo 1" },
    { src: "/images/pastTours/ImageContainer/Image2.png", alt: "Tour destination photo 2" },
    { src: "/images/pastTours/ImageContainer/Image3.png", alt: "Tour destination photo 3" },
    { src: "/images/pastTours/ImageContainer/Image4.png", alt: "Tour destination photo 4" },
    { src: "/images/pastTours/ImageContainer/Image5.png", alt: "Tour destination photo 5" },
    { src: "/images/pastTours/ImageContainer/Image6.png", alt: "Tour destination photo 6" },
    { src: "/images/pastTours/ImageContainer/Image7.png", alt: "Tour destination photo 7" },
    { src: "/images/pastTours/ImageContainer/Image8.png", alt: "Tour destination photo 8" },
    { src: "/images/pastTours/ImageContainer/Image9.png", alt: "Tour destination photo 9" },
    { src: "/images/pastTours/ImageContainer/Image10.png", alt: "Tour destination photo 10" },
    { src: "/images/pastTours/ImageContainer/Image11.png", alt: "Tour destination photo 11" },
    { src: "/images/pastTours/ImageContainer/Image12.png", alt: "Tour destination photo 12" },
];

export default function GallerySection() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    return (
        <div className="w-full max-w-[1038px] flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                {galleryImages.map((image, i) => (
                    <div
                        key={i}
                        onClick={() => setSelectedImg(image.src)}
                        className="group relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-gray-100 shadow-[0px_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0px_12px_28px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-primary text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                                View Full
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImg && (
                <div
                    onClick={() => setSelectedImg(null)}
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
                >
                    <div className="relative max-w-4xl w-full max-h-[85vh] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={selectedImg}
                            alt="Full preview"
                            fill
                            className="object-contain"
                        />
                        <button
                            onClick={() => setSelectedImg(null)}
                            className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
