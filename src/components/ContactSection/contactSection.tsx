import React from "react";
import Button from "@/components/Button/button";
import Image from "next/image";

export default function ContactSection() {
  return (
    <div className="pt-[30px] sm:pt-[45px] md:pt-[60px] lg:pt-[72px] 2xl:pt-[85.41px] pb-[30px] sm:pb-[45px] md:pb-[60px] lg:pb-[72px] 2xl:pb-[84.41px] w-full flex justify-center">
      {/* Wrapper to constrain max width on ultra-wide screens (>1920px) while maintaining centering */}
      <div className="w-full max-w-[1920px]">
        {/* ===================== MOBILE / TABLET (< lg) ===================== */}
        <div className="lg:hidden mx-4 sm:mx-6 bg-[var(--color-accent)] rounded-[24px] sm:rounded-[32px] pt-8 sm:pt-12 px-6 sm:px-10 pb-0 flex flex-col items-center text-left overflow-hidden">
          {/* Content Container */}
          <div className="w-full flex flex-col items-start gap-5 sm:gap-6 z-10">
            <p className="font-[900] text-[18px] sm:text-[24px] md:text-[28px] leading-[1.3] uppercase text-[var(--color-white)] tracking-wide">
              If you have any questions, simply get in touch. We’re here to help
              and we always reply quickly.
            </p>

            <Button
              text="Contact Us"
              className="py-3 px-7 rounded-full bg-[var(--color-primary)] hover:scale-105 transition-transform duration-200 cursor-pointer shadow-md inline-block"
              textprop="font-[Inter] font-[600] text-[15px] sm:text-[16px] leading-none text-[var(--color-white)] tracking-wide capitalize"
            />
          </div>

          {/* Character Image at Bottom */}
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/3] mt-4 sm:mt-6 -mb-2">
            <Image
              src="/images/landingpage/thumbsUp.png"
              fill
              alt="Tourist Thumbs Up"
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* ===================== DESKTOP (lg and above) — Centered above 1920px ===================== */}
        <div className="relative hidden lg:flex justify-between bg-[var(--color-accent)] rounded-tl-[18px] sm:rounded-tl-[26px] md:rounded-tl-[34px] 2xl:rounded-tl-[45px] rounded-tr-[200px] sm:rounded-tr-[360px] md:rounded-tr-[520px] lg:rounded-tr-[680px] 2xl:rounded-tr-[860px] rounded-bl-[18px] sm:rounded-bl-[26px] md:rounded-bl-[34px] 2xl:rounded-bl-[45px] rounded-br-[12px] sm:rounded-br-[16px] md:rounded-br-[20px] 2xl:rounded-br-[24px]">
          {/* Text & Button Container */}
          <div className="pt-[28px] sm:pt-[48px] md:pt-[68px] lg:pt-[88px] 2xl:pt-[112px] pl-[20px] sm:pl-[44px] md:pl-[68px] lg:pl-[96px] 2xl:pl-[128px] pr-[110px] sm:pr-[190px] md:pr-[270px] lg:pr-[370px] xl:pr-[460px] 2xl:pr-0 pb-[28px] sm:pb-[46px] md:pb-[64px] lg:pb-[82px] 2xl:pb-[103px] flex flex-col items-start gap-[12px] sm:gap-[18px] md:gap-[26px] lg:gap-[32px] 2xl:gap-[40px] z-10">
            <p className="font-[900] text-[12px] sm:text-[17px] md:text-[23px] lg:text-[30px] xl:text-[36px] 2xl:text-[40px] leading-[1.25] sm:leading-[1.3] 2xl:leading-[56px] text-wrap max-w-[210px] sm:max-w-[340px] md:max-w-[460px] lg:max-w-[620px] xl:max-w-[780px] 2xl:max-w-[915px] tracking-[0%] uppercase text-[var(--color-white)]">
              If you have any questions, simply get in touch. We’re here to help
              and we always reply quickly.
            </p>
            <Button
              text="CONTACT US"
              className="pt-[7px] sm:pt-[9px] md:pt-[11px] lg:pt-[13px] 2xl:pt-[15px] px-[14px] sm:px-[18px] md:px-[22px] lg:px-[26px] 2xl:px-[30px] pb-[7px] sm:pb-[9px] md:pb-[12px] lg:pb-[14px] 2xl:pb-[16px] flex gap-[10px] rounded-[14px] sm:rounded-[20px] md:rounded-[24px] 2xl:rounded-[30px] bg-[var(--color-primary)] hover:scale-105 transition-transform duration-200 cursor-pointer"
              textprop="font-[Inter] font-[700] text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] 2xl:text-[18px] leading-[100%] tracking-[0%] text-[var(--color-white)]"
            />
          </div>

          {/* Tourist Thumbs Up Overlay Image */}
          <div className="absolute w-[150px] h-[134px] sm:w-[250px] sm:h-[223px] md:w-[360px] md:h-[321px] lg:w-[490px] lg:h-[437px] xl:w-[610px] xl:h-[544px] 2xl:w-[723.47px] 2xl:h-[645.81px] right-0 top-[-18px] sm:top-[-30px] md:top-[-43px] lg:top-[-58px] xl:top-[-72px] 2xl:top-[-85.41px] pointer-events-none z-10">
            <Image
              src="/images/landingpage/thumbsUp.png"
              fill
              alt="Tourist_Thumbs_UP"
              className="object-contain object-right-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}