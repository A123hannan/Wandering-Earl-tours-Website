import React from "react";
import Image from "next/image";
import Header from "@/components/layout/navbar";

export default function TourHero() {
  return (
    <div className="relative ">
      <div className="relative w-full overflow-hidden aspect-[668/700] sm:aspect-[668/620] md:aspect-[760/600] lg:aspect-[1921/484] xl:aspect-[1921/484]">
        {/* 1. Background Image */}
        <Image
          src="/images/Tours/BgImage.png"
          alt="Tours Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 z-15 bg-[linear-gradient(180deg,rgba(30,54,92,0)_0%,rgba(30,54,92,1)_100%)]" />
      </div>
      <div className="relative w-full h-[140px] sm:h-[200px] md:h-[260px] xl:h-[310px] -mt-1 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1E365C_0%,rgba(30,54,92,0.98)_10%,rgba(30,54,92,0.9)_20%,rgba(30,54,92,0.78)_30%,rgba(30,54,92,0.64)_40%,rgba(30,54,92,0.5)_50%,rgba(30,54,92,0.37)_60%,rgba(30,54,92,0.26)_70%,rgba(30,54,92,0.16)_80%,rgba(30,54,92,0.08)_90%,rgba(30,54,92,0)_100%)]" />
      </div>
      {/* 5. Centered "TOURS" Heading */}
      <div className="absolute top-[273px] left-[849px] z-20 bottom-0  ">
        <h1 className="text-[var(--color-white)] text-[64px] font-[900] text-center leading-[100%] tracking-[0%] uppercase">
          Tours
        </h1>
      </div>
      {/* <div className="absolute inset-0 top-[481px]  z-15 bg-[linear-gradient(360deg,rgba(30,54,92,0)_0%,rgba(30,54,92,1)_100%)]" /> */}
    </div>
  );
}
