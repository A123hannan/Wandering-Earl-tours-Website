"use client";

import Logo from "./logo";
import Link from "next/link";
import React, { useState } from "react";
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

// Nav styles
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

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const pathName = usePathname();
  const styles = navStyles[pathName] ?? navStyles["/contactUs"];
  const textWeight = styles.textWeight ?? "text-[700]";

  return (
    <>
      <div
        className={`${pathName === "/" ? "absolute top-0 left-0" : "relative"
          } z-50 w-full ${styles.className}`}
      >
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-[80px] pt-[30px] pb-[20px] max-xl:px-8 max-xl:py-6">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-[30px] pt-[1px] lg:flex max-xl:gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={` flex gap-[10px] px-[16px] py-[10px] font-[500] text-[18px] leading-[100%] tracking-[0%] ${styles.textColor} uppercase whitespacdarkp transition-opacity hover:opacity-80 max-xl:px-2 max-xl:py-1 max-xl:text-[13px] hover:`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Login + Cart */}
          <div className="hidden items-center justify-start gap-[16px] py-[17px] lg:flex max-xl:gap-3">
            <Cart />

            <button
              className={`flex gap-[10px] rounded-[24px] px-[30px] pt-[11px] pb-[12px] font-inter text-[14px] leading-[100%] tracking-[0%] whitespace-nowrap ${styles.buttonBg} ${textWeight} ${styles.textColor} cursor-pointer hovedarkar(--color-accent)] max-xl:px-4 max-xl:py-2 max-xl:text-[13px]`}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Hamburger Toggle Button */}
      <button
        onClick={toggleMenu}
        className={`absolute top-5 right-5 z-[95] flex cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full bg-transparent p-2.5 backdrop-blur-md transition-transform lg:hidden ${isOpen ? "fixed" : "absolute"}`}
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
