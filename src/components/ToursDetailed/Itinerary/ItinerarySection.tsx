"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { MapPinIcon, SoupIcon, LibraryIcon } from "@/assets/icons";

export default function ItinerarySection() {
    const [isActive, setIsActive] = useState<string[]>(["first", "second"]);

    const handleActive = (position: string) => {
        setIsActive((prev) =>
            prev.includes(position)
                ? prev.filter((item) => item !== position)
                : [...prev, position]
        );
    };

    return (
        <div className="w-full max-w-[1038px] flex flex-col gap-[16px]">

            {/* first section */}
            <div className="flex flex-col items-start gap-[16px] sm:gap-[20px] p-4 sm:p-[24px] border-[1px] border-border rounded-[16px] bg-white shadow-[0px_16px_24px_0px_rgba(0,0,0,0.06)]">
                <button
                    onClick={() => handleActive("first")}
                    className="flex items-center justify-between w-full text-left gap-2">
                    <div className="w-full flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-[10px]">
                        <span className="font-[800] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-dark whitespace-nowrap">Jan 20</span>
                        <span className="font-[400] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-border hidden sm:inline" >|</span>
                        <span className="font-[500] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-primary">Bangkok</span>
                        <span className="font-[500] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-accent">(arrival day)</span>
                    </div>
                    <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 cursor-pointer shrink-0 ${isActive.includes("first")
                            ? "rotate-180"
                            : "rotate-0"
                            }`}
                    />
                </button>

                {isActive.includes("first") && (
                    <>
                        <div className="w-full h-0 border-[1px] border-border" />
                        <div className="flex flex-col gap-[10px] items-start w-full">
                            <div className="flex items-start gap-[12px] sm:gap-[16px]">
                                <div className="shrink-0 mt-1"><MapPinIcon /></div>
                                <span className="font-[500] text-[16px] sm:text-[20px] leading-[130%] sm:leading-[100%] tracking-[0%] text-dark">Arrival day</span>
                            </div>

                            <div className="h-[24px] w-[24px] flex items-center justify-center"><span className="w-[16px] h-[0px] border border-border rotate-90" /></div>

                            <div className="flex items-start gap-[12px] sm:gap-[16px]">
                                <div className="shrink-0 mt-1"><SoupIcon /></div>
                                <span className="font-[600] text-[16px] sm:text-[20px] leading-[130%] sm:leading-[100%] tracking-[0%] text-dark">Included: <span className="font-[500] text-mid">Dinner</span></span>
                            </div>

                            <div className="h-[24px] w-[24px] flex items-center justify-center"><span className="w-[16px] h-[0px] border border-border rotate-90" /></div>

                            <div className="flex items-start gap-[12px] sm:gap-[16px]">
                                <div className="shrink-0 mt-1"><LibraryIcon /></div>
                                <span className="font-[400] text-[15px] sm:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[28px] tracking-[0%] text-dark">Upon arrival, you’ll be picked up at the airport and taken to our hotel in the city center. After getting settled and having a good rest, we’ll start off with an evening orientation and a group dinner at one of the city’s best restaurants.</span>
                            </div>

                        </div>
                    </>

                )}
            </div>

            {/* second section */}
            <div className="flex flex-col items-start gap-[16px] sm:gap-[20px] p-4 sm:p-[24px] border-[1px] border-border rounded-[16px] bg-white shadow-[0px_16px_24px_0px_rgba(0,0,0,0.06)]">
                <button
                    onClick={() => handleActive("second")}
                    className="flex items-center justify-between w-full text-left gap-2">
                    <div className="w-full flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-[10px]">
                        <span className="font-[800] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-dark whitespace-nowrap">Jan 21</span>
                        <span className="font-[400] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-border hidden sm:inline" >|</span>
                        <span className="font-[500] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-primary">Bangkok</span>
                    </div>
                    <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 cursor-pointer shrink-0 ${isActive.includes("second")
                            ? "rotate-180"
                            : "rotate-0"
                            }`}
                    />
                </button>

                {isActive.includes("second") && (
                    <>
                        <div className="w-full h-0 border-[1px] border-border" />
                        <div className="flex flex-col gap-[10px] items-start w-full">
                            <div className="flex items-start gap-[12px] sm:gap-[16px]">
                                <div className="shrink-0 mt-1"><MapPinIcon /></div>
                                <span className="font-[500] text-[16px] sm:text-[20px] leading-[130%] sm:leading-[100%] tracking-[0%] text-dark">Highlights: <span className="font-[400]">Full-day tour of Bangkok's highlights and markets</span></span>
                            </div>

                            <div className="h-[24px] w-[24px] flex items-center justify-center"><span className="w-[16px] h-[0px] border border-border rotate-90" /></div>

                            <div className="flex items-start gap-[12px] sm:gap-[16px]">
                                <div className="shrink-0 mt-1"><SoupIcon /></div>
                                <span className="font-[600] text-[16px] sm:text-[20px] leading-[130%] sm:leading-[100%] tracking-[0%] text-dark">Included: <span className="font-[500] text-mid">Breakfast, Lunch, Dinner</span></span>
                            </div>

                            <div className="h-[24px] w-[24px] flex items-center justify-center"><span className="w-[16px] h-[0px] border border-border rotate-90" /></div>

                            <div className="flex items-start gap-[12px] sm:gap-[16px]">
                                <div className="shrink-0 mt-1"><LibraryIcon /></div>
                                <div className="flex flex-col gap-[10px] items-start">
                                    <span className="font-[400] text-[15px] sm:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[28px] tracking-[0%] text-dark">Today, we'll dive into the heart of Bangkok, exploring its rich culture, delicious cuisine, and local hotspots. We'll start off at the Grand Palace, a mesmerizing blend of buildings and temples that were the royal abode for the Kings of Siam. While there, we'll also make a stop at Wat Phra Kaew, the residence of the revered Emerald Buddha, and marvel at the grandeur of the Reclining Buddha at Wat Pho. </span>
                                    <span className="font-[400] text-[15px] sm:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[28px] tracking-[0%] text-dark">Once we've soaked in the historical significance, we'll move on to the bustling flower market where you'll get hands-on experience in a garland flower arrangement workshop before grabbing lunch at a highly-rated local restaurant. After a break at the hotel to rest and recharge, our evening will take us on a culinary journey through Chinatown. We'll wander its narrow lanes, tasting a mix of time-honored and distinct dishes.</span>
                                </div>
                            </div>

                        </div>
                    </>

                )}
            </div>

            {/* third section */}
            <div className="flex flex-col items-start gap-[16px] sm:gap-[20px] p-4 sm:p-[24px] border-[1px] border-border rounded-[16px] bg-white shadow-[0px_16px_24px_0px_rgba(0,0,0,0.06)]">
                <button
                    onClick={() => handleActive("third")}
                    className="flex items-center justify-between w-full text-left gap-2">
                    <div className="w-full flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-[10px]">
                        <span className="font-[800] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-dark whitespace-nowrap">Jan 22</span>
                        <span className="font-[400] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-border hidden sm:inline" >|</span>
                        <span className="font-[500] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-primary">Bangkok</span>
                    </div>
                    <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 cursor-pointer shrink-0 ${isActive.includes("third")
                            ? "rotate-180"
                            : "rotate-0"
                            }`}
                    />
                </button>

                {isActive.includes("third") && (
                    <>
                        <div className="w-full h-0 border-[1px] border-border" />
                        <div className="flex flex-col gap-[10px] items-start w-full">
                            <div className="flex items-start gap-[12px] sm:gap-[16px]">
                                <div className="shrink-0 mt-1"><MapPinIcon /></div>
                                <span className="font-[500] text-[16px] sm:text-[20px] leading-[130%] sm:leading-[100%] tracking-[0%] text-dark">Arrival day</span>
                            </div>

                            <div className="h-[24px] w-[24px] flex items-center justify-center"><span className="w-[16px] h-[0px] border border-border rotate-90" /></div>

                            <div className="flex items-start gap-[12px] sm:gap-[16px]">
                                <div className="shrink-0 mt-1"><SoupIcon /></div>
                                <span className="font-[600] text-[16px] sm:text-[20px] leading-[130%] sm:leading-[100%] tracking-[0%] text-dark">Included: <span className="font-[500] text-mid">Dinner</span></span>
                            </div>

                            <div className="h-[24px] w-[24px] flex items-center justify-center"><span className="w-[16px] h-[0px] border border-border rotate-90" /></div>

                            <div className="flex items-start gap-[12px] sm:gap-[16px]">
                                <div className="shrink-0 mt-1"><LibraryIcon /></div>
                                <span className="font-[400] text-[15px] sm:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[28px] tracking-[0%] text-dark">Upon arrival, you’ll be picked up at the airport and taken to our hotel in the city center. After getting settled and having a good rest, we’ll start off with an evening orientation and a group dinner at one of the city’s best restaurants.</span>
                            </div>

                        </div>
                    </>

                )}
            </div>

            {/* fourth section */}
            <div className="flex flex-col items-start gap-[16px] sm:gap-[20px] p-4 sm:p-[24px] border-[1px] border-border rounded-[16px] bg-white shadow-[0px_16px_24px_0px_rgba(0,0,0,0.06)]">
                <button
                    onClick={() => handleActive("fourth")}
                    className="flex items-center justify-between w-full text-left gap-2">
                    <div className="w-full flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-[10px]">
                        <span className="font-[800] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-dark whitespace-nowrap">Jan 23</span>
                        <span className="font-[400] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-border hidden sm:inline" >|</span>
                        <span className="font-[500] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-primary">Bangkok &gt; &gt; Ayutthaya </span>
                    </div>
                    <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 cursor-pointer shrink-0 ${isActive.includes("fourth")
                            ? "rotate-180"
                            : "rotate-0"
                            }`}
                    />
                </button>

                {isActive.includes("fourth") && (
                    <>
                        <div className="w-full h-0 border-[1px] border-border" />
                        <div className="flex flex-col gap-[10px] items-start w-full">
                            <div className="flex items-start gap-[12px] sm:gap-[16px]">
                                <div className="shrink-0 mt-1"><MapPinIcon /></div>
                                <span className="font-[500] text-[16px] sm:text-[20px] leading-[130%] sm:leading-[100%] tracking-[0%] text-dark">Arrival day</span>
                            </div>

                            <div className="h-[24px] w-[24px] flex items-center justify-center"><span className="w-[16px] h-[0px] border border-border rotate-90" /></div>

                            <div className="flex items-start gap-[12px] sm:gap-[16px]">
                                <div className="shrink-0 mt-1"><SoupIcon /></div>
                                <span className="font-[600] text-[16px] sm:text-[20px] leading-[130%] sm:leading-[100%] tracking-[0%] text-dark">Included: <span className="font-[500] text-mid">Dinner</span></span>
                            </div>

                            <div className="h-[24px] w-[24px] flex items-center justify-center"><span className="w-[16px] h-[0px] border border-border rotate-90" /></div>

                            <div className="flex items-start gap-[12px] sm:gap-[16px]">
                                <div className="shrink-0 mt-1"><LibraryIcon /></div>
                                <span className="font-[400] text-[15px] sm:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[28px] tracking-[0%] text-dark">Upon arrival, you’ll be picked up at the airport and taken to our hotel in the city center. After getting settled and having a good rest, we’ll start off with an evening orientation and a group dinner at one of the city’s best restaurants.</span>
                            </div>

                        </div>
                    </>

                )}
            </div>

            {/* fifth section */}
            <div className="flex flex-col items-start gap-[16px] sm:gap-[20px] p-4 sm:p-[24px] border-[1px] border-border rounded-[16px] bg-white shadow-[0px_16px_24px_0px_rgba(0,0,0,0.06)]">
                <button
                    onClick={() => handleActive("fifth")}
                    className="flex items-center justify-between w-full text-left gap-2">
                    <div className="w-full flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-[10px]">
                        <span className="font-[800] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-dark whitespace-nowrap">Jan 23</span>
                        <span className="font-[400] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-border hidden sm:inline" >|</span>
                        <span className="font-[500] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] text-primary">Ayutthaya &gt; &gt; Bangkok &gt; &gt; Kuala Lumpur</span>
                    </div>
                    <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 cursor-pointer shrink-0 ${isActive.includes("fifth")
                            ? "rotate-180"
                            : "rotate-0"
                            }`}
                    />
                </button>

                {isActive.includes("fifth") && (
                    <>
                        <div className="w-full h-0 border-[1px] border-border" />
                        <div className="flex flex-col gap-[10px] items-start w-full">
                            <div className="flex items-start gap-[12px] sm:gap-[16px]">
                                <div className="shrink-0 mt-1"><MapPinIcon /></div>
                                <span className="font-[500] text-[16px] sm:text-[20px] leading-[130%] sm:leading-[100%] tracking-[0%] text-dark">Arrival day</span>
                            </div>

                            <div className="h-[24px] w-[24px] flex items-center justify-center"><span className="w-[16px] h-[0px] border border-border rotate-90" /></div>

                            <div className="flex items-start gap-[12px] sm:gap-[16px]">
                                <div className="shrink-0 mt-1"><SoupIcon /></div>
                                <span className="font-[600] text-[16px] sm:text-[20px] leading-[130%] sm:leading-[100%] tracking-[0%] text-dark">Included: <span className="font-[500] text-mid">Dinner</span></span>
                            </div>

                            <div className="h-[24px] w-[24px] flex items-center justify-center"><span className="w-[16px] h-[0px] border border-border rotate-90" /></div>

                            <div className="flex items-start gap-[12px] sm:gap-[16px]">
                                <div className="shrink-0 mt-1"><LibraryIcon /></div>
                                <span className="font-[400] text-[15px] sm:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[28px] tracking-[0%] text-dark">Upon arrival, you’ll be picked up at the airport and taken to our hotel in the city center. After getting settled and having a good rest, we’ll start off with an evening orientation and a group dinner at one of the city’s best restaurants.</span>
                            </div>

                        </div>
                    </>

                )}
            </div>

        </div>
    );
}
