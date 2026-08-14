import React from "react";
import TeamIntroCard from "@/components/About/TeamIntro/teamIntroCard";
import { teamData } from "@/data/teamData";

export default function teamIntro() {
  return (
    <div className={`page-Container mt-[140px]`}>
      <div className="flex flex-row w-full justify-center">
        <h1 className="font-[900] text-[48px] leading-[100%] tracking-[0%] uppercase text-dark">
          Our
        </h1>
        <h1 className="font-[900] text-[48px] leading-[100%] tracking-[0%] uppercase text-accent">
          &nbsp;Team
        </h1>
      </div>
      <div className="flex flex-col mt-[100px] gap-[100px] mb-[150px]">
        {teamData.map((memberData) => (
          <TeamIntroCard key={memberData.index} memberData={memberData} />
        ))}
      </div>
    </div>
  );
}
