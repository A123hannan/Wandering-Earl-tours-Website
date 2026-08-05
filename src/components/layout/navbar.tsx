"use client";
import Logo from "./logo";
import Link from "next/link";
import React, { useState } from "react";
import Cart from "@/components/Cart/cart";
import Button from "@/components/Button/button";

const NAV_LINKS = [
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About Us" },
  { href: "/style", label: "Our Style" },
  { href: "/private", label: "Private Tours" },
  { href: "/past", label: "Past Tours" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar({
  className = "",
  buttonBg = "#1e365c",
}: {
  className?: string;
  buttonBg?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div
        className={`${className}  flex justify-between w-full pt-[30px] pr-[80px] pl-[80px] pb-[20px] max-xl:px-8 max-xl:py-6 items-center`}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Nav Links (Visible on 1200px / lg and above) */}
        <div className="hidden lg:flex gap-[30px] max-xl:gap-2 items-center pt-[1px]">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="pt-[10px] pr-[16px] pb-[10px] pl-[16px] max-xl:px-2 max-xl:py-1 flex gap-[10px] font-[500] text-[18px] max-xl:text-[13px] leading-[100%] tracking-[0%] uppercase text-white whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Login Button and Cart (Visible on 1200px / lg and above) */}
        <div className="hidden lg:flex gap-[16px] max-xl:gap-3 py-[17px] justify-start items-center">
          <Cart />
          <Button
            text="Login"
            className={`flex pt-[11px] px-[30px] pb-[12px] max-xl:px-4 max-xl:py-2 gap-[10px] bg-[${buttonBg}] rounded-[24px] whitespace-nowrap`}
            textprop="font-inter font-[500] text-[14px] max-xl:text-[13px] leading-[100%] tracking-[0%] text-white"
          />
        </div>
      </div>

      {/* Hamburger Toggle Button (Triggers on screens under 1200px / lg) */}
      <button
        onClick={toggleMenu}
        className={`lg:hidden flex flex-col justify-center items-center gap-[5px] ${isOpen ? "fixed" : "absolute"} z-[95] top-5 right-5 cursor-pointer transition-transform  p-2.5 rounded-full backdrop-blur-md bg-transparent`}
        aria-label="Open menu"
      >
        <span
          className={`h-[3px] w-[26px] bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
        />
        <span
          className={`h-[3px] w-[26px] bg-white rounded-full transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"
            }`}
        />
        <span
          className={`h-[3px] w-[26px] bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
        />
      </button>

      {/* Backdrop Overlay (Active under 1200px / lg) */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] transition-opacity duration-300 lg:hidden ${isOpen
            ? "opacity-70 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Mobile / Tablet Sidebar Drawer (Active under 1200px / lg) */}
      <aside
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#1E365C] z-[90] p-8 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col gap-6 pt-16">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-white text-lg font-medium uppercase py-2 border-b border-white/10 last:border-b-0 hover:text-[#E9482B] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Cart & Login */}
        <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-white text-sm font-medium">Cart</span>
            <Cart />
          </div>
          <Button
            text="Login"
            className="w-full flex justify-center py-3 bg-[#E9482B] rounded-[24px]"
            textprop="font-inter font-medium text-[16px] text-white"
          />
        </div>
      </aside>
    </>
  );
}
