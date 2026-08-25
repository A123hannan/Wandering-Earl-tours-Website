import React from "react";

export default function MapPosition({ name, left, top }: any) {
  return (
    <div
      className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-full cursor-pointer group z-20"
      style={{ left, top }}
    >
      {/* Speech bubble */}
      <div className="relative flex flex-col items-center mb-0.5 sm:mb-0.5 md:mb-1 2xl:mb-[18px] drop-shadow-md">
        <div className="bg-white text-[var(--color-primary)] font-inter font-medium text-[8px] sm:text-[10px] md:text-[13px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] px-2 sm:px-2.5 md:px-3 lg:px-3.5 xl:px-4 2xl:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-2 xl:py-2.5 2xl:py-3 rounded-[5px] sm:rounded-[6px] md:rounded-[8px] 2xl:rounded-[10px] border border-white/90 whitespace-nowrap leading-tight text-center">
          {name}
        </div>

        {/* Arrow */}
        <svg
          viewBox="0 0 18 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-[8px] sm:w-[12px] md:w-[16px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] h-[5.5px] sm:h-[8.3px] md:h-[11px] lg:h-[13.8px] xl:h-[15.9px] 2xl:h-[18px] -mt-[2.8px] sm:-mt-[4px] md:-mt-[5.5px] lg:-mt-[7px] xl:-mt-[8px] 2xl:-mt-[9px] shrink-0"
        >
          <path
            d="M10.526 11.6582C9.72646 12.617 8.25363 12.617 7.45407 11.6582L0.467847 3.28093C-0.61839 1.97841 0.307805 -1.18272e-08 2.00382 -1.60098e-07L15.9763 -1.38161e-06C17.6723 -1.52988e-06 18.5985 1.97841 17.5122 3.28093L10.526 11.6582Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Pin */}
      <img
        src="/svg/mapPin.svg"
        alt={`${name} Pin`}
        className="w-[18px] sm:w-[26px] md:w-[36px] lg:w-[46px] xl:w-[56px] 2xl:w-[68px] h-[25.4px] sm:h-[36.7px] md:h-[51px] lg:h-[65px] xl:h-[79px] 2xl:h-[96px] drop-shadow-md shrink-0 object-contain"
      />
    </div>
  );
}
