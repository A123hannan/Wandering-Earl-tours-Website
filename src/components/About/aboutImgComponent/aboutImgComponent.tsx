import React from "react";
import Image from "next/image";

export default function AboutImgComponent() {
  return (
    <section className="w-full bg-white">
      {/* DARK BLUE AREA */}
      <div className="w-full bg-[#1E365C]">
        <div className="max-w-[1760px] mx-auto pt-[80px]">
          {/* Heading + Description */}
          <div className="flex flex-row items-center justify-between">
            <div className="flex-1">
              <h1 className="font-[900] text-[64px] leading-[100%] uppercase text-white">
                About us
              </h1>
            </div>

            <div className="flex-1 pb-[165px]">
              <p className="font-[500] text-[20px] leading-[36px] text-left text-white">
                We’re a small team of people who are passionate about travel.
                Our goal is to create unique, inspiring, and thoughtful tours
                that surprise and delight you. We’re just as excited as you are
                about travel and we make it our mission to ensure that on one of
                our tours, you’re thrilled from start to finish!
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative aspect-[1760/480] mt-[50px] overflow-hidden rounded-[24px]">
            <Image
              src="/images/About/aboutMainPicture.png"
              fill
              alt="About us"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* GRADIENT BELOW IMAGE */}
      <div
        className="w-full h-[350px]"
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
