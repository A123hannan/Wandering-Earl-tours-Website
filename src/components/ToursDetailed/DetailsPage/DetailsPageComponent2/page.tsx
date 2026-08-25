import React from "react";

export default function BookWithConfidence() {
    return (
        <div className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-7 md:p-8 items-start w-full bg-white border border-gray-200 shadow-[0px_10px_30px_rgba(0,0,0,0.04)] rounded-[20px]">
            <h3 className="font-bold text-[16px] sm:text-[18px] md:text-[20px] uppercase tracking-wider text-accent">
                Book with Confidence
            </h3>
            <p className="font-normal text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-gray-600">
                To reserve your spot on a tour, a $500 deposit will be required. However, you can book with complete peace of mind as this deposit will be refundable - minus a 3% transaction fee - for 30 days. <span className="text-gray-500">[Deposits are non-refundable within 90 days of the tour start date, even if 30 days have not yet passed since the payment date.]</span>
            </p>
        </div>
    );
}
