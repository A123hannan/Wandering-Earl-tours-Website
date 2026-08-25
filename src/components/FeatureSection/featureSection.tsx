import React from "react";
import StandardCard from "@/components/FeatureSection/FeatureCard/featureCard";

const stndCardDetails = [
  {
    icon: 1,
    heading: "Small Groups",
    details:
      "12 people or fewer, so you can go where big groups can’t. Forget about big buses, that’s not our style.",
    buttontext: "Learn More",
  },
  {
    icon: 2,
    heading: "Unique",
    details:
      "No two tours are alike. Every itinerary is carefully crafted to offer the most rewarding experience.",
    buttontext: "Learn More",
  },
  {
    icon: 3,
    heading: "Local",
    details:
      "100% local contacts. Direct cultural connections. We’ll immerse you in local culture, everywhere you go.",
    buttontext: "Learn More",
  },
  {
    icon: 4,
    heading: "Personal",
    details:
      "Be treated like a friend, not a customer. Every message you receive comes from a real person. You can even call us, too.",
    buttontext: "Learn More",
  },
  {
    icon: 5,
    heading: "Comfortable",
    details:
      "High quality transportation. Carefully chosen accommodation. Incredible Expert Tour Leaders on every single trip.",
    buttontext: "Learn More",
  },
  {
    icon: 6,
    heading: "Educational",
    details:
      "Itineraries packed with genuine local experiences, providing a fascinating education every step of the way.",
    buttontext: "Learn More",
  },
];

export default function FeatureCards() {
  return (
    <div className="w-full">
      {/* Title Text */}
      <div className="flex flex-col items-center justify-center text-center">
        <span className="font-[900] text-2xl sm:text-3xl md:text-4xl 2xl:text-[48px] leading-tight 2xl:leading-[100%] tracking-[0%] uppercase text-[#1E1E1E]">
          Our trips are not standard
        </span>
        <span className="font-[900] text-2xl sm:text-3xl md:text-4xl 2xl:text-[48px] leading-tight 2xl:leading-[140%] tracking-[0%] uppercase text-[#E9482B]">
          Group Tours
        </span>
        <span className="font-[400] text-base sm:text-lg md:text-xl 2xl:text-[24px] leading-relaxed 2xl:leading-[100%] tracking-[0%] text-[#1E1E1E] p-4 sm:p-6 2xl:p-[24px]">
          Experience culture, wonder and fun like never before.
        </span>
      </div>

      {/* Feature Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 sm:gap-8 2xl:gap-[20px] pt-10 sm:pt-14 2xl:pt-[80px] items-stretch [&>*]:w-full [&>*]:h-full [&>*]:min-w-0">
        {stndCardDetails.map(({ icon, heading, details, buttontext }) => (
          <StandardCard
            key={icon}
            icon={icon}
            heading={heading}
            details={details}
            buttontext={buttontext}
          />
        ))}
      </div>
    </div>
  );
}