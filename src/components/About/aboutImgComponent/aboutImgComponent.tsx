import React from "react";
import Image from "next/image";

interface props {
  page?: string;
}

export default function AboutImgComponent({ page }: props) {
  return (
    <section className="w-full bg-white">
      {/* DARK BLUE AREA */}
      <div className="w-full bg-[#1E365C]">
        <div className="max-w-[1760px] mx-auto pt-[40px] sm:pt-[60px] md:pt-[80px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          {/* Heading + Description */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12 mb-[30px] sm:mb-[50px] lg:mb-[80px]">
            <div className="flex-1">
              <h1 className="font-[900] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[110%] uppercase text-white">
                About us
              </h1>
            </div>

            <div className="flex-1 lg:max-w-[800px]">
              <p className="font-[500] text-[16px] sm:text-[18px] md:text-[20px] leading-[26px] sm:leading-[32px] md:leading-[36px] text-left text-white/90">
                {page === "/about" || !page ? (
                  `We’re a small team of people who are passionate about travel.
                  Our goal is to create unique, inspiring, and thoughtful tours
                  that surprise and delight you. We’re just as excited as you are
                  about travel and we make it our mission to ensure that on one of
                  our tours, you’re thrilled from start to finish!`
                ) : page === "/ourStyle" ? (
                  `Incredible, small-group tours that are anything but typical. Get to the heart of your destination. Interact with local people and their communities. Learn about their culture. Visit destinations that a regular group tour can’t visit.

                  Travel with us, as a friend.`
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[1760/480] mt-[20px] sm:mt-[30px] lg:mt-[50px] overflow-hidden rounded-[16px] sm:rounded-[24px]">
            <Image
              src="/images/About/aboutMainPicture.png"
              fill
              alt="About us"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* GRADIENT BELOW IMAGE */}
      <div
        className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[350px]"
        style={{
          background: `
            linear-gradient(
              180deg,
              #1E365C 0%,
              #334E70 10%,
              #58718E 22%,
              #8298AE 38%,
              #AEBECD 55%,
              #CFD9E3 70%,
              #E7ECF1 85%,
              #FFFFFF 100%
            )
          `,
        }}
      />
    </section>
  );
}
