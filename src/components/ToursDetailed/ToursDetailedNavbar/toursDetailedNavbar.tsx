"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function ToursDetailedNavbar() {
    const params = useParams();
    const pathname = usePathname();

    const id = params?.id ? String(params.id) : "1";
    const activeRef = useRef<HTMLAnchorElement | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const [showLeftShadow, setShowLeftShadow] = useState(false);
    const [showRightShadow, setShowRightShadow] = useState(false);

    const navLinks = [
        { href: `/tours/${id}`, title: "Details", keys: [`/tours/${id}`, `/tours/${id}/details`] },
        { href: `/tours/${id}/gallery`, title: "Gallery", keys: [`/tours/${id}/gallery`] },
        { href: `/tours/${id}/map`, title: "Map", keys: [`/tours/${id}/map`] },
        { href: `/tours/${id}/itinerary`, title: "Itinerary", keys: [`/tours/${id}/itinerary`] },
        { href: `/tours/${id}/toursEssentials`, title: "Tour Essentials", keys: [`/tours/${id}/toursEssentials`] },
        { href: `/tours/${id}/whatsIncluded`, title: "What's Included", keys: [`/tours/${id}/whatsIncluded`] },
    ];

    const updateShadows = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;

        const { scrollLeft, scrollWidth, clientWidth } = el;
        setShowLeftShadow(scrollLeft > 4);
        setShowRightShadow(scrollLeft + clientWidth < scrollWidth - 4);
    }, []);

    useEffect(() => {
        updateShadows();

        const el = scrollRef.current;
        if (!el) return;

        el.addEventListener("scroll", updateShadows, { passive: true });
        window.addEventListener("resize", updateShadows);

        return () => {
            el.removeEventListener("scroll", updateShadows);
            window.removeEventListener("resize", updateShadows);
        };
    }, [updateShadows]);

    useEffect(() => {
        if (window.innerWidth < 1024 && activeRef.current) {
            activeRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }
        const timeout = setTimeout(updateShadows, 350);
        return () => clearTimeout(timeout);
    }, [pathname, updateShadows]);

    return (
        <nav className="relative w-screen left-1/2 right-1/2 -mx-[50vw] rounded-none lg:w-full lg:left-auto lg:right-auto lg:mx-0 lg:rounded-[16px] overflow-hidden bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
            <div
                ref={scrollRef}
                className="flex w-full items-center justify-start gap-1.5 overflow-x-auto scroll-smooth scrollbar-hide px-4 lg:px-0 lg:gap-1 lg:justify-between lg:overflow-x-hidden"
            >
                {navLinks.map((navLink) => {
                    const active = navLink.keys.includes(pathname);

                    return (
                        <Link
                            key={navLink.href}
                            ref={active ? activeRef : null}
                            href={navLink.href}
                            className={`flex h-[42px] shrink-0 items-center justify-center p-1.5 sm:p-2 lg:p-1.5 whitespace-nowrap rounded-[12px] px-[22px] font-inter text-[12px] font-semibold uppercase tracking-[0.01em] transition-all duration-300 ease-out sm:h-[46px] sm:px-[25px] sm:text-[13px] md:h-[50px] md:px-[28px] md:text-[14px] lg:h-[52px] lg:flex-1 lg:shrink lg:px-[10px] lg:text-[14px] xl:h-[54px] xl:px-[14px] xl:text-[15px] 2xl:h-[56px] 2xl:text-[16px] ${active
                                ? "bg-[#1E365C1A] text-[#1E365C] font-bold"
                                : "text-[#8F8F8F] hover:bg-[#1E365C0D] hover:text-[#1E365C]"
                                }`}
                        >
                            {navLink.title}
                        </Link>
                    );
                })}
            </div>

            {/* Left edge shadow/fade */}
            <div
                aria-hidden
                className={`pointer-events-none absolute left-0 top-0 h-full w-8 transition-opacity duration-200 lg:hidden ${showLeftShadow ? "opacity-100" : "opacity-0"
                    }`}
                style={{
                    background:
                        "linear-gradient(to right, rgba(30,54,92,0.65), rgba(30,54,92,0))",
                }}
            />

            {/* Right edge shadow/fade */}
            <div
                aria-hidden
                className={`pointer-events-none absolute right-0 top-0 h-full w-8 transition-opacity duration-200 lg:hidden ${showRightShadow ? "opacity-100" : "opacity-0"
                    }`}
                style={{
                    background:
                        "linear-gradient(to left, rgba(30,54,92,0.65), rgba(30,54,92,0))",
                }}
            />
        </nav>
    );
}