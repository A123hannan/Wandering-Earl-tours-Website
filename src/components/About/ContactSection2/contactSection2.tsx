import React from "react";
import Image from "next/image";

export default function ContactSection2() {
  return (
    <div className="bg-accent w-full relative max-w-[1920px] mx-auto">
      {/* Hidden SVG clip-path definitions */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="global-family-curve-desktop" clipPathUnits="objectBoundingBox">
            <path d="M 0.25,0.07 C 0.2,0.07 0,0.18 0,0.45 C 0,0.72 0.08,0.8 0.18,1 L 1,1 L 1,0 Z" />
          </clipPath>
          <clipPath id="global-family-curve-mobile" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.18 C 0.2,0.04 0.5,0 1,0.12 L 1,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Switch clip-path by breakpoint */}
      <style>{`
        .contact-curve-image {
          clip-path: url(#global-family-curve-mobile);
        }
        @media (min-width: 1024px) {
          .contact-curve-image {
            clip-path: url(#global-family-curve-desktop);
          }
        }
      `}</style>

      <div className="flex flex-col lg:flex-row items-center 2xl:items-stretch ">
        {/* TEXT CONTENT */}
        <div className="flex flex-col items-start justify-center w-full lg:w-[742px] 2xl:w-auto 2xl:flex-1 px-6 sm:px-10 md:px-14 lg:px-12 xl:px-16 2xl:px-[80px] py-10 sm:py-14 lg:py-16 2xl:py-0">
          <p className="mb-6 sm:mb-8 2xl:mb-[40px] font-[900] text-3xl sm:text-4xl md:text-[42px] 2xl:text-[48px] uppercase text-white">
            Our Global family
          </p>
          <p className="mb-6 sm:mb-8 2xl:mb-[40px] font-[500] text-base sm:text-lg 2xl:text-[20px] leading-relaxed sm:leading-8 2xl:leading-[36px] text-white">
            Our team also consists of our incredible travel partners, friends
            and endless local contacts in every country where we operate. These
            wonderful people work extremely hard to help us create and run our
            unique trips. We could not do this without all of them as it takes
            such a dedicated and global team to create our rewarding travel
            experiences!
          </p>
          <button className="px-6 sm:px-7 2xl:px-[30px] py-3 sm:py-[13px] 2xl:py-[15px] rounded-[30px] bg-primary text-white hover:bg-primary/80 transition-colors text-sm sm:text-base cursor-pointer">
            Contact us today
          </button>
        </div>

        {/* IMAGE WITH CURVED CLIP-PATH */}
        <div
          className="contact-curve-image relative w-full lg:w-1/2 2xl:w-[1125px] h-[280px] sm:h-[360px] md:h-[440px] lg:h-[500px] 2xl:h-[580px] shrink-0"
        >
          <Image
            src="/images/About/contactSection.jpg"
            fill
            alt="Hikers in the mountains"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}