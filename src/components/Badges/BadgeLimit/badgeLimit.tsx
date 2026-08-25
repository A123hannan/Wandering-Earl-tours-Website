import React from "react";

export default function badgeLimit({ className }: { className?: string }) {
  return (
    <div className={`bg-[#FFAE00] rounded-[30px] ${className} `}>
      <div className="px-[4px] py-[12px] flex flex-col items-center justify-center">
        <span className="font-[900] text-[12px] leading-[12px] tracking-[0%] uppercase text-center text-[#1E1E1E]">
          Only
        </span>
        <span className="font-[900] text-[12px] leading-[12px] tracking-[0%] uppercase text-center text-[#C60F13]">
          2 spots
        </span>
        <span className="font-[900] text-[12px] leading-[12px] tracking-[0%] uppercase text-center text-[#1E1E1E]">
          Left
        </span>
      </div>
    </div>
  );
}
