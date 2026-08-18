import React from "react";

interface CardProps {
    icon: React.ElementType;
    heading: string;
}

export default function NiechesandCoutriesCard({ icon: Icon, heading }: CardProps) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-white border border-[#E5E7EB] rounded-[16px] p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 gap-3 text-center">
            <div className="flex items-center justify-center w-full h-[60px] sm:h-[80px]">
                <Icon className="max-w-full max-h-full object-contain" title={heading} />
            </div>
            <p className="font-semibold text-xs sm:text-sm lg:text-base leading-snug uppercase text-[#1E1E1E]">
                {heading}
            </p>
        </div>
    );
}