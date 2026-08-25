"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function ToursDetailedNavbar() {
    const params = useParams();
    const pathname = usePathname();

    const id = params?.id ? String(params.id) : "1";
    const activeRef = useRef<HTMLAnchorElement | null>(null);

    const navLinks = [
        { href: `/tours/${id}`, title: "Details", keys: [`/tours/${id}`, `/tours/${id}/details`] },
        { href: `/tours/${id}/gallery`, title: "Gallery", keys: [`/tours/${id}/gallery`] },
        { href: `/tours/${id}/map`, title: "Map", keys: [`/tours/${id}/map`] },
        { href: `/tours/${id}/itinerary`, title: "Itinerary", keys: [`/tours/${id}/itinerary`] },
        { href: `/tours/${id}/toursEssentials`, title: "Tour Essentials", keys: [`/tours/${id}/toursEssentials`] },
        { href: `/tours/${id}/whatsIncluded`, title: "What's Included", keys: [`/tours/${id}/whatsIncluded`] },
    ];

    useEffect(() => {
        if (window.innerWidth < 1024 && activeRef.current) {
            activeRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }
    }, [pathname]);

    return (
        <nav className="w-full overflow-hidden rounded-[16px] bg-white p-1.5 shadow-[0px_4px_20px_rgba(0,0,0,0.08)] sm:p-2 lg:p-1.5">
            <div className="flex w-full items-center justify-start gap-1.5 overflow-x-auto scroll-smooth scrollbar-hide sm:gap-2 lg:justify-between lg:gap-1 lg:overflow-x-hidden">
                {navLinks.map((navLink) => {
                    const active = navLink.keys.includes(pathname);

                    return (
                        <Link key={navLink.href} ref={active ? activeRef : null} href={navLink.href} className={`flex h-[42px] shrink-0 items-center justify-center whitespace-nowrap rounded-[12px] px-[22px] font-inter text-[12px] font-semibold uppercase tracking-[0.01em] transition-all duration-300 ease-out sm:h-[46px] sm:px-[25px] sm:text-[13px] md:h-[50px] md:px-[28px] md:text-[14px] lg:h-[52px] lg:flex-1 lg:shrink lg:px-[10px] lg:text-[14px] xl:h-[54px] xl:px-[14px] xl:text-[15px] 2xl:h-[56px] 2xl:text-[16px] ${active ? "bg-[#1E365C1A] text-[#1E365C] font-bold" : "text-[#8F8F8F] hover:bg-[#1E365C0D] hover:text-[#1E365C]"}`}>
                            {navLink.title}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}