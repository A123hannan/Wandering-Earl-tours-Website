import React from "react";
import Image from "next/image";
import Logo from "@/components/layout/logo";
import Link from "next/link";

const ourPages = [
  { label: "Tours", href: "/tours" },
  { label: "About Us", href: "/about" },
  { label: "Our Style", href: "/ourStyle" },
];

const tourPages = [
  { label: "Private Tours", href: "/privateTours" },
  { label: "Past Tours", href: "/pastTours" },
];

const contactPages = [{ label: "Contact Us", href: "/contact" }];

const companyPages = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund / Cancellation Policy", href: "/refund" },
];

function FooterRoutes({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 2xl:gap-[45px]">
      <p className="font-[Inter] font-[900] text-lg sm:text-xl 2xl:text-[20px] leading-[100%] tracking-[0%] text-white uppercase">
        {title}
      </p>
      <div className="flex flex-col items-start justify-start w-full 2xl:w-[296.75px] h-auto gap-4 sm:gap-6 2xl:gap-[32px]">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block w-fit font-[Inter] font-[400] text-sm sm:text-base 2xl:text-[16px] leading-[100%] tracking-[0%] text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="relative w-full overflow-hidden w-full mt-[64px] sm:mt-[100px] md:mt-[120px] 2xl:mt-[140px]">
      {/* Background Image */}
      <Image
        src="/images/landingpage/footerImage.png"
        alt="Background Image"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Gradient Overlay */}
      <div className="bg-[linear-gradient(0deg,rgba(30,54,92,0)_0%,rgba(30,54,92,0.95)_54.63%,#1E365C_75.11%,#1E365C_100%)] absolute inset-0" />

      {/* Main Content Row */}
      <div className="w-full max-w-[1920px] mx-auto relative flex flex-col 2xl:flex-row gap-10 sm:gap-14 2xl:gap-[148px] pt-12 sm:pt-16 2xl:pt-[80px] px-6 sm:px-12 2xl:px-0 2xl:pl-[80px]">
        {/* Brand Logo and Description */}
        <div className="relative flex flex-col items-start justify-start gap-5 sm:gap-[30px]">
          <Logo />
          <p className="font-[Inter] font-[400] text-sm sm:text-base 2xl:text-[14px] leading-relaxed 2xl:leading-[24px] max-w-full 2xl:max-w-[425px] tracking-[0%] text-white">
            Thank you for such a well thought out and memorable trip. The sights
            and people of Morocco are wonderful. I appreciated you feeding my
            nerdy self with information on the geography, animals and plants of
            Morocco.
          </p>
        </div>

        {/* Routes Container: flex row at 2xl matching original exactly */}
        <div className="relative grid grid-cols-2 sm:grid-cols-4 2xl:flex 2xl:flex-row 2xl:justify-between w-full 2xl:w-auto gap-8 sm:gap-6 2xl:gap-0">
          <FooterRoutes title="Our Pages" links={ourPages} />
          <FooterRoutes title="Tour Pages" links={tourPages} />
          <FooterRoutes title="Contact" links={contactPages} />
          <FooterRoutes title="Company" links={companyPages} />
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="pt-10 sm:pt-16 2xl:pt-[106px] pb-6 sm:pb-8 2xl:pb-[36px]">
        <p className="relative text-center font-[500] text-xs sm:text-sm 2xl:text-[16px] leading-[100%] tracking-[0%] text-[#404040]">
          &copy;2024 Wandering Earl, LLC. All rights reserved.
        </p>
      </div>
    </div>
  );
}
