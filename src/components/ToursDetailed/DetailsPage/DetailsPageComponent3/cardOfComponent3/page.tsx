import React from "react";
import Image from "next/image";
interface Props {
    Icon: React.ElementType;
    title?: string;
    description?: string;
}
export default function Page({ Icon, title, description }: Props) {
    return (
        <div className="flex flex-col items-start px-4 sm:px-[24px] pt-[16px] pb-5 sm:pb-[24px] gap-[24px] sm:gap-[40px] border-[1px] border-border rounded-[24px] bg-white shadow-[0px_30px_60px_-24px_rgba(0,0,0,0.16)]">
            <div className="h-[64px] w-[64px] sm:h-[80px] sm:w-[80px] flex items-center justify-center rounded-[16px] bg-[#1E365C0A] shrink-0">
                <Icon />
            </div>
            <div className="flex flex-col gap-[8px] sm:gap-[12px]">
                {title ? <p className="font-[600] text-[16px] sm:text-[20px] leading-[120%] tracking-[0%] text-dark">{title}</p> : ""}
                <p className="font-[400] text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[26px] tracking-[0%] text-dark">
                    {description}
                </p>
            </div>
        </div>
    );
}
