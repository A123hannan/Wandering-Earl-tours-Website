import React from "react";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex flex-col gap-[12px] sm:gap-[16px] p-5 sm:p-[24px] items-start w-full bg-white border border-border shadow-[0px_16px_24px_-24px_#000000FF] rounded-[16px]">
            <p className="font-[600] text-[16px] sm:text-[20px] leading-[100%] tracking-[0%] uppercase text-accent">Book with confidence</p>
            <p className="font-[500] text-[15px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] tracking-[0%] text-mid">
                To reserve your spot on a tour, a $500 deposit will be required. However, you can book with complete peace of mind as this deposit will be refundable - minus a 3% transaction fee - for 30 days. [Deposits are non-refundable within 90 days of the tour start date, even if 30 days have not yet passed since the payment date.]
            </p>
        </div>
    );
}
