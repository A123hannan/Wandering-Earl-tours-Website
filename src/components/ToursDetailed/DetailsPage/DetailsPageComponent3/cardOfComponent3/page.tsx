import React from "react";
import Image from "next/image";
interface Props {
    Icon: React.ElementType;
    title?: string;
    description?: string;
}
export default function Page({ Icon, title, description }: Props) {
    return (
        <div className="flex flex-col items-start px-[24px] pt-[16px] pb-[24px] gap-[40px]  border-[1px] border-border rounded-[24px] shadow-[0px_30px_60px_-24px_rgba(0,0,0,0.16)]">
            <div className="h-[80px] w-[80px] flex items-center justify-center rounded-[16px] bg-[#1E365C0A]">
                <Icon />
            </div>
            <div className="flex flex-col gap-[12px]">
                {title ? <p className="font-[600] text-[20px] leading-[100%] tracking-[0%] text-dark">{title}</p> : ""}
                <p className="font-[400] text-[20px] leading-[28px] tracking-[0%] text-dark">
                    {description}
                </p>
            </div>
        </div>
    );
}
