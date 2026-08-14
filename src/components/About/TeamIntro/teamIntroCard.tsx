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
  const isEven = memberData.index % 2 === 0;

  return (
    <div
      className={`
        flex
        ${isEven ? "flex-row" : "flex-row-reverse"}
        items-start
        page-container
      `}
    >
      {/* IMAGE */}
      <div className="relative w-[622px] h-[622px] shrink-0 rounded-[24px] overflow-hidden">
        <Image
          src={memberData.imgSrc}
          fill
          alt="Profile Pic"
          className="object-cover"
        />
      </div>

      {/* TEXT */}
      <div
        className={`
          flex-1
          min-w-0
          ${isEven ? "ml-[120px]" : "mr-[120px]"}
        `}
      >
        <div className="flex flex-col gap-[48px]">
          {memberData.description1 && (
            <p className="text-dark font-[400] text-[20px] leading-[36px]">
              {memberData.description1}
            </p>
          )}

          {memberData.description2 && (
            <p className="text-dark font-[400] text-[20px] leading-[36px]">
              {memberData.description2}
            </p>
          )}

          {memberData.description3 && (
            <p className="text-dark font-[400] text-[20px] leading-[36px]">
              {memberData.description3}
            </p>
          )}

          {memberData.description4 && (
            <p className="text-dark font-[400] text-[20px] leading-[36px]">
              {memberData.description4}
            </p>
          )}

          {/* NAME + ROLE + LINE */}
          <div className="flex items-center gap-[24px] w-full">
            <div className="flex items-center shrink-0 whitespace-nowrap">
              <p className="font-[500] text-primary text-[20px] leading-[100%]">
                {memberData.pName}
              </p>

              <span className="mx-[12px] font-[300] text-border text-[20px] leading-[100%]">
                |
              </span>

              <p className="font-[500] text-grey text-[20px] leading-[100%]">
                {memberData.role}
              </p>
            </div>

            {/* LINE */}
            <div className="flex-1 h-1 bg-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
