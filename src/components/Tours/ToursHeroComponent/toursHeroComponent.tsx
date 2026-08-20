import React from "react";
import Image from "next/image";
interface props {
  title?: string;
  imgSrc?: string;
}
export default function TourHero({ title, imgSrc }: props) {
  const src = imgSrc ? imgSrc : "/images/Tours/BgImage.png"
  const titleContent = title ? title : "Tours"
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Image block — always full-bleed object-cover, like the homepage hero.
          Aspect ratio cascades from a tall mobile crop to a wide banner crop;
          lg/xl (and therefore 2xl+, which inherits xl) are UNCHANGED from
          before — this is the ratio that already looked right. */}
      <div className="relative w-screen min-h-[360px] overflow-hidden aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9] lg:aspect-[1921/60] xl:aspect-[1921/460] flex items-center justify-center">
        <Image
          src={src}
          alt="Tours Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay — same smooth multi-stop navy gradient used on the
            homepage hero, replacing the old flat two-stop version */}
        <div className="absolute inset-0 z-[15] bg-[linear-gradient(180deg,rgba(30,54,92,0)_0%,rgba(30,54,92,0.3)_30%,#1E365C_100%)]" />

        {/* Centered heading */}
        <div className="relative z-30 flex items-center justify-center px-6">
          <h1 className="font-inter text-[var(--color-white)] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] pt-[100px] font-[900] text-center leading-[100%] tracking-[0%] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            {titleContent}
          </h1>
        </div>
      </div>

      {/* Bottom fade into the page's navy — filled in the missing `lg` step
          so the height scales in five even increments instead of jumping
          straight from md to xl */}
      <div className="relative w-full h-[90px] sm:h-[140px] md:h-[200px] lg:h-[260px] xl:h-[310px] -mt-1 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1E365C_0%,rgba(30,54,92,1)_20%,rgba(30,54,92,0.97)_35%,rgba(30,54,92,0.92)_45%,rgba(30,54,92,0.85)_55%,rgba(30,54,92,0.74)_65%,rgba(30,54,92,0.6)_73%,rgba(30,54,92,0.45)_80%,rgba(30,54,92,0.3)_86%,rgba(30,54,92,0.17)_91%,rgba(30,54,92,0.08)_95%,rgba(30,54,92,0.03)_98%,rgba(30,54,92,0)_100%)]" />
      </div>
    </div>
  );
}
