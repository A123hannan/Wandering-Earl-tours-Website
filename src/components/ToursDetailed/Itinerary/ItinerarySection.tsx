"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { MapPinIcon, SoupIcon, LibraryIcon } from "@/assets/icons";

interface ItineraryItem {
    id: string;
    date: string;
    city: string;
    tag?: string;
    highlight?: string;
    meals: string;
    description: string | string[];
}

const itineraryData: ItineraryItem[] = [
    {
        id: "day1",
        date: "Jan 20",
        city: "Bangkok",
        tag: "arrival day",
        highlight: "Arrival day and group welcome dinner",
        meals: "Dinner",
        description:
            "Upon arrival, you’ll be picked up at the airport and taken to our hotel in the city center. After getting settled and having a good rest, we’ll start off with an evening orientation and a group dinner at one of the city’s best restaurants.",
    },
    {
        id: "day2",
        date: "Jan 21",
        city: "Bangkok",
        highlight: "Full-day tour of Bangkok's highlights and markets",
        meals: "Breakfast, Lunch, Dinner",
        description: [
            "Today, we'll dive into the heart of Bangkok, exploring its rich culture, delicious cuisine, and local hotspots. We'll start off at the Grand Palace, a mesmerizing blend of buildings and temples that were the royal abode for the Kings of Siam. While there, we'll also make a stop at Wat Phra Kaew, the residence of the revered Emerald Buddha, and marvel at the grandeur of the Reclining Buddha at Wat Pho.",
            "Once we've soaked in the historical significance, we'll move on to the bustling flower market where you'll get hands-on experience in a garland flower arrangement workshop before grabbing lunch at a highly-rated local restaurant. After a break at the hotel to rest and recharge, our evening will take us on a culinary journey through Chinatown. We'll wander its narrow lanes, tasting a mix of time-honored and distinct dishes.",
        ],
    },
    {
        id: "day3",
        date: "Jan 22",
        city: "Bangkok",
        highlight: "Local street food safari & canal cruise",
        meals: "Breakfast, Lunch, Dinner",
        description:
            "We'll explore Bangkok's hidden waterways by longtail boat, observing authentic riverside life. Later in the afternoon, we'll venture into street food markets known only to locals to taste the freshest culinary specialties.",
    },
    {
        id: "day4",
        date: "Jan 23",
        city: "Bangkok > Ayutthaya",
        highlight: "Ancient temples & riverside dining",
        meals: "Breakfast, Lunch, Dinner",
        description:
            "A scenic morning drive brings us to the UNESCO World Heritage site of Ayutthaya. We'll wander through ancient ruins, learn about the kingdom of Siam, and enjoy a traditional dinner overlooking the river.",
    },
    {
        id: "day5",
        date: "Jan 24",
        city: "Ayutthaya > Bangkok > Kuala Lumpur",
        highlight: "Fly to Malaysia & night skyline views",
        meals: "Breakfast, Dinner",
        description:
            "After breakfast, we transfer to Bangkok Airport for our short flight to Kuala Lumpur, Malaysia. In the evening, we'll savor famous Malaysian street food with views of the illuminated Petronas Towers.",
    },
];

export default function ItinerarySection() {
    const [openItems, setOpenItems] = useState<string[]>(["day1", "day2"]);

    const toggleItem = (id: string) => {
        setOpenItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="w-full max-w-[1038px] flex flex-col gap-4">
            {itineraryData.map((item) => {
                const isOpen = openItems.includes(item.id);

                return (
                    <div
                        key={item.id}
                        className="flex flex-col items-start p-4 sm:p-6 lg:p-7 border border-gray-200 rounded-[20px] bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300"
                    >
                        <button
                            type="button"
                            onClick={() => toggleItem(item.id)}
                            className="flex items-center justify-between w-full text-left gap-3 cursor-pointer group"
                        >
                            <div className="flex items-center flex-wrap gap-2 sm:gap-3">
                                <span className="font-bold text-[16px] sm:text-[18px] md:text-[20px] text-gray-900 whitespace-nowrap">
                                    {item.date}
                                </span>
                                <span className="text-gray-300 hidden sm:inline">|</span>
                                <span className="font-semibold text-[15px] sm:text-[17px] md:text-[19px] text-primary">
                                    {item.city}
                                </span>
                                {item.tag && (
                                    <span className="font-medium text-[13px] sm:text-[15px] text-accent bg-accent/10 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                                        ({item.tag})
                                    </span>
                                )}
                            </div>

                            <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-600 group-hover:text-primary transition-transform duration-300 ${
                                        isOpen ? "rotate-180" : "rotate-0"
                                    }`}
                                />
                            </div>
                        </button>

                        {isOpen && (
                            <div className="w-full pt-4 mt-4 border-t border-gray-100 flex flex-col gap-4">
                                {item.highlight && (
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="shrink-0 mt-1 text-primary">
                                            <MapPinIcon />
                                        </div>
                                        <div className="font-medium text-[15px] sm:text-[16px] md:text-[17px] text-gray-800">
                                            <span className="font-bold text-gray-900">Highlights: </span>
                                            {item.highlight}
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="shrink-0 mt-1 text-accent">
                                        <SoupIcon />
                                    </div>
                                    <div className="font-medium text-[15px] sm:text-[16px] md:text-[17px] text-gray-800">
                                        <span className="font-bold text-gray-900">Included: </span>
                                        <span className="text-gray-600">{item.meals}</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="shrink-0 mt-1 text-primary">
                                        <LibraryIcon />
                                    </div>
                                    <div className="flex flex-col gap-2.5 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-gray-600">
                                        {Array.isArray(item.description) ? (
                                            item.description.map((paragraph, pIdx) => (
                                                <p key={pIdx}>{paragraph}</p>
                                            ))
                                        ) : (
                                            <p>{item.description}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
