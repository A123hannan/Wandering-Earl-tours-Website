import React from "react";

export default function BadgeSold({ className }: { className?: string }) {
  return (
    <div
      className={`bg-[#C60F13] w-[60px] h-[60px] rounded-full flex flex-col items-center justify-center ${className}`}
    >
      <span className="font-[900] text-[12px] leading-[12px] tracking-[0%] uppercase text-center text-white">
        sold
      </span>
      <span className="font-[900] text-[12px] leading-[12px] tracking-[0%] uppercase text-center text-white">
        out
      </span>
    </div>
  );
}
