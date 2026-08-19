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
        flex-col
        ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
        items-center

        gap-8
        lg:gap-0
      `}
    >
      {/* IMAGE */}
      <div className="relative w-full max-w-[926px] aspect-square lg:w-[400px] lg:h-[522px] xl:w-[550px] xl:h-[550px] 2xl:w-[622px] 2xl:h-[622px] shrink-0 rounded-[24px] overflow-hidden">
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
          w-full
          ${isEven ? "lg:ml-12 xl:ml-16 2xl:ml-[120px]" : "lg:mr-12 xl:mr-16 2xl:mr-[120px]"}
        `}
      >
        <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-2 xl:gap-4 2xl:gap-[40px]">
          {memberData.description1 && (
            <p className="text-dark font-[400] text-base md:text-lg 2xl:text-[20px] leading-relaxed md:leading-[32px] 2xl:leading-[36px]">
              {memberData.description1}
            </p>
          )}

          {memberData.description2 && (
            <p className="text-dark font-[400] text-base md:text-lg 2xl:text-[20px] leading-relaxed md:leading-[32px] 2xl:leading-[36px]">
              {memberData.description2}
            </p>
          )}

          {memberData.description3 && (
            <p className="text-dark font-[400] text-base md:text-lg 2xl:text-[20px] leading-relaxed md:leading-[32px] 2xl:leading-[36px]">
              {memberData.description3}
            </p>
          )}

          {memberData.description4 && (
            <p className="text-dark font-[400] text-base md:text-lg 2xl:text-[20px] leading-relaxed md:leading-[32px] 2xl:leading-[36px]">
              {memberData.description4}
            </p>
          )}

          {/* NAME + ROLE + LINE */}
          <div className="flex items-center gap-4 md:gap-[24px] w-full">
            <div className="flex items-center shrink-0 whitespace-nowrap">
              <p className="font-[500] text-primary text-base md:text-lg 2xl:text-[20px] leading-[100%]">
                {memberData.pName}
              </p>

              <span className="mx-2 md:mx-[12px] font-[300] text-border text-base md:text-lg 2xl:text-[20px] leading-[100%]">
                |
              </span>

              <p className="font-[500] text-grey text-base md:text-lg 2xl:text-[20px] leading-[100%]">
                {memberData.role}
              </p>
            </div>

            {/* LINE */}
            <div className="flex-1 h-0.5 md:h-1 bg-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
