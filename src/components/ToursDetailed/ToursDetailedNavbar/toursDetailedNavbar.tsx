"use client";

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
        {
            href: `/tours/${id}`,
            title: "Details",
            keys: [`/tours/${id}`, `/tours/${id}/details`],
        },
        {
            href: `/tours/${id}/gallery`,
            title: "Gallery",
            keys: [`/tours/${id}/gallery`],
        },
        {
            href: `/tours/${id}/map`,
            title: "Map",
            keys: [`/tours/${id}/map`],
        },
        {
            href: `/tours/${id}/itinerary`,
            title: "Itinerary",
            keys: [`/tours/${id}/itinerary`],
        },
        {
            href: `/tours/${id}/toursEssentials`,
            title: "Tour Essentials",
            keys: [`/tours/${id}/toursEssentials`],
        },
        {
            href: `/tours/${id}/whatsIncluded`,
            title: "What's Included",
            keys: [`/tours/${id}/whatsIncluded`],
        },
    ];

    useEffect(() => {
        const activeItem = activeRef.current;
        const container = navContainerRef.current;

        if (!activeItem || !container) return;

        // Only auto-scroll on screens where the navbar is actually scrollable.
        if (window.innerWidth < 1024) {
            activeItem.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }
    }, [pathname]);

    return (
        <nav className="w-full rounded-[16px] bg-white shadow-sm overflow-hidden">
            <div
                ref={navContainerRef}
                className="
          flex w-full items-center

          /* Mobile / tablet */
          justify-start
          gap-1
          overflow-x-auto
          scrollbar-hide
          scroll-smooth
          whitespace-nowrap
          p-1.5

          /* Small devices */
          sm:gap-1.5
          sm:p-2

          /* Large screens */
          lg:justify-between
          lg:gap-0
          lg:overflow-x-hidden
          lg:p-0
        "
            >
                {navLinks.map((navLink) => {
                    const active = navLink.keys.includes(pathname);

                    return (
                        <Link
                            key={navLink.href}
                            ref={active ? activeRef : null}
                            href={navLink.href}
                            className={`
                inline-flex
                shrink-0
                items-center
                justify-center
                whitespace-nowrap
                rounded-[14px]

                font-inter
                font-semibold
                uppercase
                text-center
                leading-none

                transition-all
                duration-300
                ease-out

                /* Mobile */
                px-[16px]
                py-[12px]
                text-[13px]

                /* Small */
                sm:px-[20px]
                sm:py-[14px]
                sm:text-[14px]

                /* Medium */
                md:px-[24px]
                md:py-[16px]

                /* Large - distribute across entire navbar */
                lg:flex-1
                lg:px-[12px]
                lg:py-[17px]
                lg:text-[15px]

                /* XL */
                xl:px-[16px]
                xl:py-[18px]
                xl:text-[16px]

                /* Active */
                ${active
                                    ? "bg-[#1E365C1A] text-primary font-bold"
                                    : "text-[#8F8F8F] hover:bg-[#1E365C0D] hover:text-[#1E365C]"
                                }
              `}
                        >
                            {navLink.title}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}