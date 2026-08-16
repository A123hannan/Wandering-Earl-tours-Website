import React from "react";
import Image from "next/image";

export default function ContactSection2() {
  return (
    <div className="bg-accent w-full relative max-w-[1920px] mx-auto overflow-hidden">
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

      <div className="flex flex-col lg:flex-row items-stretch justify-between w-full min-h-[500px] xl:min-h-[580px]">
        {/* TEXT CONTENT */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 xl:w-[48%] px-6 sm:px-10 md:px-12 xl:px-16 2xl:px-20 py-10 lg:py-12 xl:py-16">
          <h2 className="mb-4 sm:mb-6 lg:mb-8 font-[900] text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px] leading-tight uppercase text-white">
            Our Global family
          </h2>
          <p className="mb-6 sm:mb-8 font-[500] text-base sm:text-lg xl:text-[20px] leading-relaxed xl:leading-[36px] text-white/90 max-w-2xl">
            Our team also consists of our incredible travel partners, friends
            and endless local contacts in every country where we operate. These
            wonderful people work extremely hard to help us create and run our
            unique trips. We could not do this without all of them as it takes
            such a dedicated and global team to create our rewarding travel
            experiences!
          </p>
          <div>
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-white hover:bg-primary/80 transition-all font-medium text-sm sm:text-base cursor-pointer shadow-md">
              Contact us today
            </button>
          </div>
        </div>

        {/* IMAGE WITH CURVED CLIP-PATH */}
        <div className="contact-curve-image relative w-full lg:w-1/2 xl:w-[52%] min-h-[300px] sm:min-h-[400px] lg:min-h-[auto] shrink-0">
          <Image
            src="/images/About/contactSection.jpg"
            fill
            alt="Hikers in the mountains"
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}