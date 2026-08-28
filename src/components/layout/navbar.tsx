"use client";

import Logo from "./logo";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Cart from "@/components/Cart/cart";
import Button from "@/components/Button/button";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About Us" },
  { href: "/ourStyle", label: "Our Style" },
  { href: "/privateTours", label: "Private Tours" },
  { href: "/pastTours", label: "Past Tours" },
  { href: "/contactUs", label: "Contact Us" },
];

const navStyles: any = {
  "/": {
    className: "bg-transparent",
    buttonBg: "bg-[var(--color-primary)]",
    textColor: "text-[var(--color-white)]",
    textWeight: "text-[500]",
  },
  "/tours": {
    className: "bg-[var(--color-primary)]",
    buttonBg: "bg-[var(--color-white)]",
    textColor: "text-[var(--color-grey)]",
  },
  "/about": {
    className: "bg-[var(--color-primary)]",
    buttonBg: "bg-[var(--color-white)]",
    textColor: "text-[var(--color-grey)]",
  },
  "/ourStyle": {
    className: "bg-[var(--color-primary)]",
    buttonBg: "bg-[var(--color-white)]",
    textColor: "text-[var(--color-grey)]",
  },
  "/privateTours": {
    className: "bg-[var(--color-primary)]",
    buttonBg: "bg-[var(--color-white)]",
    textColor: "text-[var(--color-grey)]",
  },
  "/pastTours": {
    className: "bg-[var(--color-primary)]",
    buttonBg: "bg-[var(--color-white)]",
    textColor: "text-[var(--color-grey)]",
  },
  "/contactUs": {
    className: "bg-[var(--color-primary)]",
    buttonBg: "bg-[var(--color-white)]",
    textColor: "text-[var(--color-grey)]",
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const pathName = usePathname();
  const styles = navStyles[pathName] ?? navStyles["/contactUs"];
  const textWeight = styles.textWeight ?? "text-[700]";

  const isTransparentRoute = pathName === "/" || pathName === "/pastTours";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure the fixed navbar's real rendered height so the spacer below
  // always matches exactly, at every breakpoint, with no guessed px values.
  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    // Re-measure if the navbar's content changes size (e.g. font load, logo swap)
    let resizeObserver: ResizeObserver | undefined;
    if (navRef.current && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(navRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={navRef}
        className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${isTransparentRoute && !scrolled
          ? "bg-transparent"
          : styles.className
          }`}
      >
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-8 py-6 lg:pt-[10px] lg:pb-[10px] 2xl:pt-[30px] min-[1720px]:px-[80px] 2xl:pb-[20px]">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-2 pt-[1px] lg:flex lg:gap-[10px] xl:gap-[20px] min-[1720px]:gap-[30px]">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`flex gap-[10px] px-2 py-1 text-[13px] font-[500] leading-[100%] tracking-[0%] 2xl:px-[16px] 2xl:py-[10px] 2xl:text-[18px] ${isTransparentRoute && !scrolled ? navStyles["/"].textColor : styles.textColor
                  } uppercase whitespace-nowrap transition-opacity hover:opacity-80`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Login + Cart */}
          <div className="hidden items-center justify-start gap-3 py-[17px] lg:flex 2xl:gap-[16px]">
            <Cart />

            <button
              className={`flex gap-[10px] cursor-pointer rounded-[24px] px-4 py-2 text-[13px] font-inter leading-[100%] tracking-[0%] whitespace-nowrap 2xl:px-[30px] 2xl:pt-[11px] 2xl:pb-[12px] 2xl:text-[14px] ${isTransparentRoute && !scrolled ? navStyles["/"].buttonBg : styles.buttonBg
                } ${textWeight} ${isTransparentRoute && !scrolled ? navStyles["/"].textColor : styles.textColor
                }`}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to offset fixed navbar height, only for non-transparent-hero routes.
          Height is measured live from the navbar itself, so it always matches
          exactly at every breakpoint — no gap, no guessed px values. */}
      {!isTransparentRoute && <div style={{ height: navHeight }} />}

      {/* Hamburger Toggle Button */}
      <button
        onClick={toggleMenu}
        className={`fixed top-5 right-5 z-[95] flex cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full bg-transparent p-2.5 backdrop-blur-md transition-transform lg:hidden`}
        aria-label="Open menu"
      >
        <span
          className={`h-[3px] w-[26px] origin-center rounded-full bg-white transition-all duration-300 ${isOpen ? "translate-y-[8px] rotate-45" : ""}`}
        />
        <span
          className={`h-[3px] w-[26px] rounded-full bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`h-[3px] w-[26px] origin-center rounded-full bg-white transition-all duration-300 ${isOpen ? "-translate-y-[8px] -rotate-45" : ""}`}
        />
      </button>

      {/* Backdrop Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? "pointer-events-auto opacity-70" : "pointer-events-none opacity-0"}`}
      />

      {/* Mobile / Tablet Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[90] flex h-full w-[280px] flex-col justify-between bg-[#1E365C] p-8 transition-transform duration-300 ease-in-out sm:w-[320px] lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-6 pt-16">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="border-b border-white/10 py-2 text-lg font-medium text-white uppercase transition-colors last:border-b-0 hover:text-[#E9482B]"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Cart & Login */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-white">Cart</span>
            <Cart />
          </div>

          <Button
            text="Login"
            className="flex w-full justify-center rounded-[24px] bg-[#E9482B] py-3"
            textprop="font-inter font-medium text-[16px] text-white"
          />
        </div>
      </aside>
    </>
  );
}