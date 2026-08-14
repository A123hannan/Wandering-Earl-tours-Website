import React from "react";
import ImageContainer from "@/components/ImageContainer/imageContainer";
export default function teamReviewSection() {
  return (
    <div className="relative top-[-150px] flex flex-row mb-[140px]">
      <div className="flex-1 flex flex-col items-start justify-start pt-[24px] mr-[128px] ">
        <p className="font-[500] text-[20px] leading-[36px] tracking-[0%] text-dark">
          Our team at Wandering Earl Tours has a strong desire to bring rich
          cultural connections around the world to people who would appreciate
          them the most. And we hold this mission at the core of everything we
          do. 
        </p>
        <p className="font-[500] text-[20px] leading-[36px] tracking-[0%] text-dark mt-[24px]">
          Focused, purposeful and incredibly rewarding trips are the goal, and
          each member of our team brings their own insights, skills and
          enthusiasm to the table. When combined, our goal is achieved, with
          unique Wandering Earl Tours that we are all genuinely excited to
          offer!
        </p>
      </div>
      <div className="flex-1">
        <ImageContainer containerNumber={1} />
      </div>
    </div>
  );
}
