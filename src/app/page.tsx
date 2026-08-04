import React from "react";
import Image from "next/image";
import Header from "@/components/layout/navbar";
import Button from "@/components/Button/button";
import DashLine from "@/components/svg/DashedlineSvg/dash";
import PlaneSvg from "@/components/svg/PlaneSvg/PlaneSvg";
import GlobeSvg from "@/components/svg/GlobeSvg/globeSvg";
import ArrowSvg from "@/components/svg/ArrowSvg/arrowSvg";
import TourSection from "@/components/TourSection/tourSection";
import FeatureSection from "@/components/FeatureSection/featureSection";
import CountryMap from "@/components/MapComponent/mapComponent";
import ReviewSection from "@/components/ReviewSection/reviewSection";
import ContactSection from "@/components/ContactSection/contactSection";
import Footer from "@/components/Footer/footer";
export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Rectangle 1 - bgImage, Header, Unique local small group text and 2024 & 2025 button */}
      <div className="relative w-full min-h-[600px] aspect-[4/3] md:aspect-[1921/812] overflow-hidden">
        <Image
          src="/images/landingpage/Backgroundgimg1.png"
          alt="Background Image"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="bg-[linear-gradient(180deg,rgba(30,54,92,0)_0%,rgba(30,54,92,0.3)_30%,#1E365C_100%)] absolute inset-0 " />

        {/* Header */}
        <Header className="bg-transparent absolute  z-50 top-0 left-[-1px]" />

        {/* Hero Section */}
        <div
          className="
    relative w-full flex justify-center
    px-6 pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32
    2xl:absolute 2xl:top-[124px] 2xl:block 2xl:w-auto 2xl:px-0 2xl:pt-0
  "
        >
          <div
            className="
      flex flex-col justify-start
      pt-10 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-24
      2xl:pt-[179px] 2xl:pl-[439px]
    "
          >
            <div className="flex flex-col justify-center gap-6 sm:gap-7 2xl:gap-[25px]">
              <h1
                className="
          font-inter font-black uppercase text-white text-center
          text-3xl leading-tight tracking-normal
          sm:text-4xl md:text-5xl lg:text-6xl xl:text-[56px]
          2xl:text-[64px] 2xl:leading-20 2xl:tracking-[-0.5]
        "
              >
                UNique, local, small{" "}
                <span
                  className="
            font-inter font-black uppercase text-center text-[#E9482B]
            text-3xl leading-tight
            sm:text-4xl md:text-5xl lg:text-6xl xl:text-[56px]
            2xl:text-[64px] 2xl:leading-none
          "
                >
                  Groups
                </span>
              </h1>

              <p
                className="
          font-inter font-medium text-white text-center tracking-normal
          text-base leading-relaxed
          sm:text-lg md:text-xl lg:text-2xl
          2xl:text-[24px] 2xl:leading-none 2xl:font-500
        "
              >
                Tours that show you something new.
              </p>
            </div>

            <div
              className="
        flex flex-col items-center justify-center gap-3
        pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16
        sm:flex-row sm:gap-4
        2xl:flex-row 2xl:gap-[12px] 2xl:justify-start 2xl:items-stretch
        2xl:pt-[62px] 2xl:pl-[310.5px] 2xl:pr-[310.5px]
      "
            >
              <Button
                text="Visit 2024 Tours"
                className="
          w-full max-w-[204px] h-[53px] pt-[15px] pb-[16px] px-[30px]
          rounded-[30px] flex gap-[10px] bg-[#1e365c]
          sm:w-[204px] 2xl:w-[204px]
        "
                textprop="font-sans font-semibold tracking-[0.9] text-white leading-[100%] text-base sm:text-lg 2xl:text-[18px]"
              />
              <Button
                text="Visit 2025 Tours"
                className="
          w-full max-w-[204px] h-[53px] pt-[15px] pb-[16px] px-[30px]
          rounded-[30px] flex gap-[10px] bg-[#E9482B]
          sm:w-[204px] 2xl:w-[204px]
        "
                textprop="font-sans font-semibold tracking-[0.9] text-white leading-[100%] text-base sm:text-lg 2xl:text-[18px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sustainable and Responsible travel - images ovelarying pland and globe  */}
      <div className="bg-[linear-gradient(180deg,#1E365C_0%,#1E365C_84.5%,rgba(30,54,92,0.94)_100%)] pt-8 sm:pt-12 2xl:pt-[52px] relative flex flex-col-reverse 2xl:flex-row overflow-hidden 2xl:overflow-visible">
        {/* Text Content Block */}
        <div className="pt-6 sm:pt-10 2xl:pt-[102px] px-6 sm:px-12 md:px-20 2xl:px-0 2xl:pl-[208px] flex flex-col items-center 2xl:items-start text-center 2xl:text-left justify-start pb-16 sm:pb-24 2xl:pb-[122px] z-10">
          <div>
            <p className="uppercase font-[Inter] font-black text-2xl sm:text-3xl md:text-4xl 2xl:text-[48px] leading-tight 2xl:leading-[122%] tracking-[0%] text-white">
              Sustainable and <br className="hidden sm:inline 2xl:inline" />{" "}
              Responsible Travel
            </p>
            <p className="font-[400] text-base sm:text-xl 2xl:text-[24px] leading-snug 2xl:leading-[121%] tracking-[0.5%] text-white pt-3 2xl:pt-[12px]">
              We're fully committed to promoting and offering responsible,{" "}
              <br className="hidden md:inline 2xl:inline" /> respectful and
              sustainable travel experiences around the world.
            </p>
          </div>

          <div className="pt-6 2xl:pt-[30px] flex flex-col items-center 2xl:items-start">
            <p className="font-[200] text-sm sm:text-base 2xl:text-[16px] leading-relaxed 2xl:leading-[24px] tracking-[0%] text-white">
              Everything we do is aimed at enriching the lives of the people we
              work with. We want you to go{" "}
              <br className="hidden lg:inline 2xl:inline" /> away from our tours
              with great memories, new friends, and a real appreciation for the
              places we <br className="hidden lg:inline 2xl:inline" /> visit.
              But, more than that, we also want to leave those places better
              than we found them.
            </p>
            <p className="font-[Inter] font-[200] text-sm sm:text-base 2xl:text-[16px] leading-relaxed 2xl:leading-[24px] tracking-[0%] text-white pt-3 2xl:pt-[12px]">
              We make a point of avoiding mass tourism destinations. Instead, we
              sustainably support local
              <br className="hidden lg:inline 2xl:inline" /> businesses,
              communities and the environment everywhere we go. Every aspect of
              our trips, from
              <br className="hidden lg:inline 2xl:inline" />
              accommodation to local guides, activities to meals, and everything
              in between, are chosen to
              <br className="hidden lg:inline 2xl:inline" /> ensure that your
              tourism dollar leaves a positive and lasting impact and that our
              visit leaves a<br className="hidden lg:inline 2xl:inline" />{" "}
              minimal footprint.
            </p>
            <div className="pt-6 2xl:pt-[30px] flex justify-center 2xl:justify-start">
              <Button
                text="Book a Tour Now"
                className="pt-[15px] px-[30px] pb-[15px] rounded-[30px] bg-[#e9482b]"
                textprop="font-[700] text-[18px] leading-[100%] tracking-[0%] text-white"
              />
            </div>
          </div>
        </div>

        {/* Visual Components Section */}
        <div className="relative w-full 2xl:w-auto 2xl:static flex justify-center items-center pt-8 2xl:pt-0 px-4 sm:px-8 2xl:px-0">
          <div className="relative w-full max-w-[480px] sm:max-w-[580px] md:max-w-[650px] aspect-[705/609] 2xl:max-w-none 2xl:w-auto 2xl:h-auto 2xl:aspect-none 2xl:static">
            {/* Card Under */}
            <div className="absolute left-[18.30%] top-[27.09%] w-[42.41%] h-[72.91%] 2xl:left-[1117px] 2xl:top-[212px] 2xl:w-[299px] 2xl:h-[444px] rounded-[16px] sm:rounded-[24px] border border-[#FFFFFF99] overflow-hidden shadow-[-30px_30px_60px_0px_#0000001A] z-10 2xl:z-auto">
              <Image
                src="/images/landingpage/cardImageUnder.jpg"
                alt="underImage"
                fill
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Card Up */}
            <div className="absolute left-[57.59%] top-[8.37%] w-[42.41%] h-[72.91%] 2xl:left-[1394px] 2xl:top-[98px] 2xl:w-[299px] 2xl:h-[444px] aspect-[299/444] overflow-hidden border border-[#FFFFFF99] rounded-[16px] sm:rounded-[24px] shadow-[-40px_30px_60px_0px_#00000066] z-20 2xl:z-auto">
              <Image
                src="/images/landingpage/cardImageUp.jpg"
                fill
                alt="upImage"
                className="object-cover"
              />
            </div>

            {/* DashLine SVG */}
            <div className="absolute left-0 top-[12.62%] w-[35.31%] 2xl:w-auto 2xl:h-auto 2xl:left-[988px] 2xl:top-[125.84px] z-0 pointer-events-none [&_svg]:!w-full [&_svg]:!h-auto 2xl:[&_svg]:!w-auto 2xl:[&_svg]:!h-auto">
              <DashLine />
            </div>

            {/* Plane SVG */}
            <div className="absolute left-[37.68%] top-[8.37%] w-[9.36%] 2xl:w-auto 2xl:h-auto 2xl:left-[1253.65px] 2xl:top-[99px] z-30 pointer-events-none [&_svg]:!w-full [&_svg]:!h-auto 2xl:[&_svg]:!w-auto 2xl:[&_svg]:!h-auto">
              <PlaneSvg />
            </div>

            {/* Globe SVG */}
            <div className="absolute left-[50.78%] top-0 w-[22.70%] 2xl:w-auto 2xl:h-auto 2xl:left-[1346px] 2xl:top-[48px] z-30 pointer-events-none [&_svg]:!w-full [&_svg]:!h-auto 2xl:[&_svg]:!w-auto 2xl:[&_svg]:!h-auto">
              <GlobeSvg />
            </div>
          </div>
        </div>
      </div>
      <div className="page-container relative overflow-hidden pt-12 sm:pt-20 md:pt-28 lg:pt-36 2xl:pt-[200px]">
        {/* Underlay Gradient */}
        <div className="h-[200px] sm:h-[260px] 2xl:h-[309px] absolute inset-0 bg-[linear-gradient(180deg,rgba(30,54,92,0.94)_0%,rgba(30,54,92,0.85)_22%,rgba(30,54,92,0.67)_41%,rgba(30,54,92,0.26)_66%,rgba(30,54,92,0)_88%)] pointer-events-none" />

        {/* 2024/2025 Tours & Header Action */}
        <TourSection year="2024" />

        {/* Tour Feature Cards Container */}
        <div className="pt-16 sm:pt-24 md:pt-32 lg:pt-40 2xl:pt-[197px] pb-12 sm:pb-20 2xl:pb-[103px]">
          <FeatureSection />
        </div>
      </div>

      {/* Map Component */}
      <div className="mt-0 2xl:mt-[-20px]">
        <CountryMap />
      </div>
      {/* Review Section */}
      <div className="page-container flex flex-col gap-12 sm:gap-20 md:gap-28 2xl:gap-[140px]">
        <TourSection year="2025" />
        <ReviewSection />
      </div>
      {/* Contact Us section */}
      <div className="mt-[40px] sm:mt-[70px] md:mt-[95px] lg:mt-[115px] 2xl:mt-[140px] px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] 2xl:px-[80px]">
        <ContactSection />
      </div>

      {/* Footer */}
      <div className="mt-[140px] ">
        <Footer />
      </div>
    </div>
  );
}
