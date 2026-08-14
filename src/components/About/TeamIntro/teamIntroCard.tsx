import React from "react";
import Image from "next/image";

interface TeamMember {
  index: number;
  imgSrc: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  pName: string;
  role: string;
}

interface TeamIntroProps {
  memberData: TeamMember;
}

export default function teamIntroCard({ memberData }: TeamIntroProps) {
  return (
    <div
      className={`flex ${memberData.index % 2 === 0 ? "flex-row" : "flex-row-reverse"} justify-between items-center page-container`}
    >
      <div className="relative w-[622px] h-[622px] rounded-[24px] shrink-0 overflow-hidden">
        <Image
          src={memberData.imgSrc}
          fill
          alt="Profie Pic"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-[48px]">
        <div
          className={`flex flex-col gap-[48px] ${
            memberData.index % 2 === 0 ? "ml-[120px]" : "mr-[120px]"
          }`}
        >
          {memberData.description1 && (
            <p className="text-dark font-[400] text-[20px] leading-[36px] tracking-[0%]">
              {memberData.description1}
            </p>
          )}
          {memberData.description2 && (
            <p className="text-dark font-[400] text-[20px] leading-[36px] tracking-[0%]">
              {memberData.description2}
            </p>
          )}
          {memberData.description3 && (
            <p className="text-dark font-[400] text-[20px] leading-[36px] tracking-[0%]">
              {memberData.description3}
            </p>
          )}
          {memberData.description4 && (
            <p className="text-dark font-[400] text-[20px] leading-[36px] tracking-[0%]">
              {memberData.description4}
            </p>
          )}
          <div className="flex flex-row justify-between items-center gap-[24px]">
<div className="flex flex-row items-center justify-center">
  <p className="font-[500] leading-[100%] tracking-[0%] text-primary text-[20px]">
    {memberData.pName}
  </p>

  <span className="mx-[8px] font-[300] leading-[100%] tracking-[0%] text-border text-[20px]">
    |
  </span>

  <p className="font-[500] leading-[100%] tracking-[0%] text-grey text-[20px]">
    {memberData.role}
  </p>
</div>
            <div className="w-[561px] bg-border h-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
