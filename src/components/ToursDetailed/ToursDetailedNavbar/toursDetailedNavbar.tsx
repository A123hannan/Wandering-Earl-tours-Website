'use client'

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function ToursDetailedNavbar() {
    const params = useParams();
    const pathname = usePathname();
    const id = params?.id ? String(params.id) : "1";
    const activeRef = useRef<HTMLAnchorElement | null>(null);
    const navContainerRef = useRef<HTMLDivElement | null>(null);

    const navLinks = [
        { href: `/tours/${id}`, title: "Details", keys: [`/tours/${id}`, `/tours/${id}/details`] },
        { href: `/tours/${id}/gallery`, title: "Gallery", keys: [`/tours/${id}/gallery`] },
        { href: `/tours/${id}/map`, title: "Map", keys: [`/tours/${id}/map`] },
        { href: `/tours/${id}/itinerary`, title: "Itinerary", keys: [`/tours/${id}/itinerary`] },
        { href: `/tours/${id}/toursEssentials`, title: "Tour Essentials", keys: [`/tours/${id}/toursEssentials`] },
        { href: `/tours/${id}/whatsIncluded`, title: "What's Included", keys: [`/tours/${id}/whatsIncluded`] },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            if (activeRef.current && navContainerRef.current) {
                const container = navContainerRef.current;
                const activeItem = activeRef.current;

                const containerWidth = container.clientWidth;
                const itemLeft = activeItem.offsetLeft;
                const itemWidth = activeItem.clientWidth;

                const targetScrollLeft = itemLeft - (containerWidth / 2) + (itemWidth / 2);

                container.scrollTo({
                    left: Math.max(0, targetScrollLeft),
                    behavior: "smooth",
                });
            }
        }, 50);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <div className="rounded-[16px] bg-white w-full overflow-hidden shadow-sm">
            <div
                ref={navContainerRef}
                className="flex items-center justify-start 2xl:justify-between gap-1 sm:gap-2 2xl:gap-0 w-full overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap p-1.5 sm:p-2 2xl:p-0"
            >
                {navLinks.map((navLink, index) => {
                    const active = navLink.keys.includes(pathname);
                    return (
                        <Link
                            key={index}
                            ref={active ? activeRef : null}
                            href={navLink.href}
                            className={`inline-flex items-center justify-center py-[14px] px-[16px] sm:py-[18px] sm:px-[20px] 2xl:py-[20px] 2xl:px-[35px] rounded-[16px] cursor-pointer hover:bg-[#1E365C1A] font-[600] text-[13px] sm:text-[14px] 2xl:text-[16px] leading-[100%] tracking-[0%] uppercase text-center shrink-0 whitespace-nowrap ${active ? "bg-[#1E365C1A] text-primary" : "text-grey"} transition-all duration-300`}
                        >
                            {navLink.title}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}