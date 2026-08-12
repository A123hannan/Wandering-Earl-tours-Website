import React from "react";
import Image from "next/image";

export default function TourHero() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="relative w-full overflow-hidden aspect-[668/700] sm:aspect-[668/620] md:aspect-[760/600] lg:aspect-[1921/484] xl:aspect-[1921/484]">
        <Image
          src="/images/Tours/BgImage.png"
          alt="Tours Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 z-[15] bg-[linear-gradient(180deg,rgba(30,54,92,0)_0%,rgba(30,54,92,1)_100%)]" />

        {/* Centered heading — no fixed px offsets, can't overflow */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-[var(--color-white)] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-[900] text-center leading-[100%] tracking-[0%] uppercase">
            Tours
          </h1>
        </div>
      </div>

      <div className="relative w-full h-[90px] sm:h-[140px] md:h-[200px] xl:h-[310px] -mt-1 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1E365C_0%,rgba(30,54,92,1)_20%,rgba(30,54,92,0.97)_35%,rgba(30,54,92,0.92)_45%,rgba(30,54,92,0.85)_55%,rgba(30,54,92,0.74)_65%,rgba(30,54,92,0.6)_73%,rgba(30,54,92,0.45)_80%,rgba(30,54,92,0.3)_86%,rgba(30,54,92,0.17)_91%,rgba(30,54,92,0.08)_95%,rgba(30,54,92,0.03)_98%,rgba(30,54,92,0)_100%)]" />
      </div>
    </div>
  );
}