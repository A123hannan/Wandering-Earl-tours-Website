import React from "react";
import Image from "next/image";

export default function PastMainComponent() {
  return (
    <section className="w-full bg-white">
      {/* DARK BLUE AREA WITH BACKGROUND IMAGE & OVERLAY */}
      <div className="relative w-full aspect-[668/700] sm:aspect-[668/620] md:aspect-[760/600] lg:aspect-[1921/484] xl:aspect-[1921/500] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/pastTours/pastMainPicture.png"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
        />

        {/* Gradient Overlay (Above Picture, Below Text) */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
          }}
        />

        {/* Content Overlay (Centered) */}
        <h1 className="relative z-20 text-white text-[38px] sm:text-[44px] md:text-[48px] lg:text-[64px] font-[700] lg:font-[900] tracking-[0%] uppercase text-center">
          Past Tours
        </h1>
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