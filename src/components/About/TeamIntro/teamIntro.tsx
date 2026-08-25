import React from "react";
import TeamIntroCard from "@/components/About/TeamIntro/teamIntroCard";
import { teamData } from "@/data/teamData";

export default function teamIntro() {
  return (
    <div className="page-container mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[120px] 2xl:mt-[140px]">
      <div className="flex flex-row w-full justify-center">
        <h1 className="font-[900] text-3xl sm:text-4xl md:text-[42px] 2xl:text-[48px] leading-[100%] tracking-[0%] uppercase text-dark">
          Our
        </h1>
        <h1 className="font-[900] text-3xl sm:text-4xl md:text-[42px] 2xl:text-[48px] leading-[100%] tracking-[0%] uppercase text-accent">
          &nbsp;Team
        </h1>
      </div>
      <div className="flex flex-col mt-[50px] sm:mt-[60px] md:mt-[80px] 2xl:mt-[100px] gap-[50px] sm:gap-[60px] md:gap-[80px] 2xl:gap-[100px] mb-[80px] sm:mb-[100px] md:mb-[120px] 2xl:mb-[150px]">
        {teamData.map((memberData) => (
          <TeamIntroCard key={memberData.index} memberData={memberData} />
        ))}
      </div>
    </div>
  );
}
