import React from "react";

interface Props {
    Icon: React.ElementType;
    title?: string;
    description?: string;
}

export default function CardOfComponent3({ Icon, title, description }: Props) {
    return (
        <div className="flex flex-col items-start p-5 sm:p-6 lg:p-7 gap-4 sm:gap-5 border border-gray-200/80 rounded-[20px] bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0px_16px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300">
            <div className="h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center rounded-[14px] bg-primary/[0.06] text-primary shrink-0">
                <Icon />
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2">
                {title && (
                    <h4 className="font-bold text-[16px] sm:text-[18px] text-gray-900 leading-snug">
                        {title}
                    </h4>
                )}
                {description && (
                    <p className="font-normal text-[14px] sm:text-[15px] leading-relaxed text-gray-600">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}
