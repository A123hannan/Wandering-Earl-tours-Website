import React from "react";

interface CardProps {
    icon: React.ElementType;
    heading: string;
}

export default function NiechesandCoutriesCard({ icon: Icon, heading }: CardProps) {
    return (
        <div className="flex flex-col justify-between w-full h-full bg-white border border-[#D6D6D6] rounded-[24px] gap-6 sm:gap-8 2xl:gap-[40px] p-6 sm:p-8 2xl:pt-[30px] 2xl:pr-[40px] 2xl:pb-[40px] 2xl:pl-[40px] shadow-[0px_30px_60px_-24px_rgba(0,0,0,0.16)]">
            <div className="flex flex-col items-center justify-start gap-4 sm:gap-6 2xl:gap-[30px]">

                {/* Icon Container */}
                <div className="pt-5 pb-5 px-5 2xl:pt-[27px] 2xl:pb-[28px] 2xl:px-[25px] rounded-[16px] bg-[#1E365C]/5 flex items-center justify-center">
                    <Icon className="w-[80px] h-[54px] object-contain" title={heading} />
                </div>

                {/* Heading */}
                <div>
                    <p className="font-[900] text-xl sm:text-2xl 2xl:text-[24px] leading-tight 2xl:leading-[100%] tracking-[0%] text-center uppercase text-[#1E1E1E]">
                        {heading}
                    </p>
                </div>

            </div>
        </div>
    );
}