import React from "react";
import Image from "next/image";

interface props {
  page?: string;
}

export default function PastandContactMainComponent({ page }: props) {
  const src = page === "/pastTours" ? "/images/pastTours/pastMainPicture.png" : "/images/contactUs/contactMainPicture.png";

  return (
    <section className="w-full bg-[#1e365c]">
      {/* DARK BLUE AREA WITH BACKGROUND IMAGE & OVERLAY */}
      <div className="relative w-full aspect-[668/700] sm:aspect-[668/620] md:aspect-[760/600] lg:aspect-[1921/484] xl:aspect-[1921/500] flex items-center justify-center overflow-hidden">
        <Image
          src={src}
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover object-top"
          priority
        />

        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
          }}
        />

        <h1 className="relative z-20 text-white text-[38px] sm:text-[44px] md:text-[48px] lg:text-[64px] font-[700] lg:font-[900] tracking-[0%] uppercase text-center">
          {page === "/pastTours" ? "Past Tours" : "Contact Us"}
        </h1>
      </div>

      {/* ONLY SHOW GRADIENT TO WHITE ON PAST TOURS PAGE */}
      {page === "/pastTours" && (
        <div
          className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[350px] "
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
      )}
    </section>
  );
}