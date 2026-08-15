import React from "react";
import ImageContainer from "@/components/ImageContainer/imageContainer";
export default function teamReviewSection() {
  return (
    <div className="relative top-[-60px] sm:top-[-80px] md:top-[-100px] lg:top-[-120px] 2xl:top-[-150px] flex flex-col lg:flex-row mb-[40px] sm:mb-[60px] md:mb-[80px] lg:mb-[100px] 2xl:mb-[140px]">
      <div className="flex-1 flex flex-col items-start justify-start pt-0 sm:pt-[12px] lg:pt-[18px] 2xl:pt-[24px] mr-0 lg:mr-[60px] xl:mr-[90px] 2xl:mr-[128px] mb-8 lg:mb-0">
        <p className="font-[500] text-base sm:text-lg 2xl:text-[20px] leading-relaxed sm:leading-8 2xl:leading-[36px] tracking-[0%] text-dark">
          Our team at Wandering Earl Tours has a strong desire to bring rich
          cultural connections around the world to people who would appreciate
          them the most. And we hold this mission at the core of everything we
          do. 
        </p>
        <p className="font-[500] text-base sm:text-lg 2xl:text-[20px] leading-relaxed sm:leading-8 2xl:leading-[36px] tracking-[0%] text-dark mt-4 sm:mt-5 2xl:mt-[24px]">
          Focused, purposeful and incredibly rewarding trips are the goal, and
          each member of our team brings their own insights, skills and
          enthusiasm to the table. When combined, our goal is achieved, with
          unique Wandering Earl Tours that we are all genuinely excited to
          offer!
        </p>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end">
        <ImageContainer containerNumber={1} />
      </div>
    </div>
  );
}
