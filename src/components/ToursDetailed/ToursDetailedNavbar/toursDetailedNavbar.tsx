'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ReservanceCard from "@/components/ToursDetailed/ReservanceCard/reservanceCard"
import TourSection from "@/components/TourSection/tourSection";
const Nav_Links = [
    { href: "/toursDetailed/details", title: "Details" },
    { href: "/toursDetailed/gallery", title: "Gallery" },
    { href: "/toursDetailed/map", title: "Map" },
    { href: "/toursDetailed/itinerary", title: "Itinerary" },
    { href: "/toursDetailed/toursEssentials", title: "Tour Essentials" }, // check spelling below
    { href: "/toursDetailed/whatsIncluded", title: "What's Included" },
]
export default function ToursDetailedNavbar() {
    const [isActive, setIsActive] = useState("Details")
    const handleIsActive = (title: string) => {
        setIsActive(title)
    }
    return (
        <div className="rounded-[16px] bg-white flex justify-between items-center gap-[2.2px] w-full">
            {Nav_Links.map((navLink, index) => {
                const active = isActive === navLink.title;
                return (
                    <Link key={index} href={navLink.href} onClick={() => handleIsActive(navLink.title)} className={`group py-[20px] px-[39px] rounded-[16px] cursor-pointer hover:bg-[#1E365C1A] font-[600] text-[16px] leading-[100%] tracking-[0%] uppercase text-center ${active ? "bg-[#1E365C1A] text-primary" : "text-grey"} transition-all duration-300`}>
                        {navLink.title}
                    </Link>
                );
            })}


        </div>
    );
}
