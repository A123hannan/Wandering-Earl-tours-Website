import React from "react";
import { WalletSvg } from "@/assets/icons";

interface CheckoutCardProps {
    tourHeading: string;
    guestCount: number;
    option: string;
    payment: string;
    totalPrice: number;
    depositAmount: number;
}

export default async function CheckoutCard({
    tourHeading,
    guestCount,
    option,
    payment,
    totalPrice,
    depositAmount,
}: CheckoutCardProps) {
    // Calculated values based on your inputs
    const dueToday = depositAmount * guestCount;
    const futurePayments = totalPrice - dueToday;

    return (
        <div className="h-fit self-start shrink-0 flex flex-col shadow-[0px_24px_48px_-16px_#00000020] rounded-[24px] overflow-hidden border border-gray-100 w-full max-w-full bg-white">
            {/* Orange/Red Card Header */}
            <div className="bg-[#E9482B] px-[20px] sm:px-[36px] 2xl:px-[60px] py-[20px] sm:py-[28px] 2xl:py-[33px] text-center">
                <h2 className="font-inter font-black text-white text-[18px] sm:text-[22px] 2xl:text-[24px] uppercase tracking-tight leading-tight">
                    {tourHeading}
                </h2>
            </div>

            {/* Card Body */}
            <div className="bg-white p-[20px] sm:p-[28px] 2xl:p-[36px] flex flex-col gap-[20px] sm:gap-[24px] 2xl:gap-[30px] font-inter">
                {/* Tour Line Item Details */}
                <div className="flex justify-between items-start gap-3 w-full">
                    <div className="max-w-[290px]">
                        <p className="font-semibold text-[15px] sm:text-[17px] 2xl:text-[20px] leading-[135%] text-[#8F8F8F]">
                            {tourHeading} - {option}{" "}
                            <span className="font-semibold text-[#8F8F8F] whitespace-nowrap">
                                × {guestCount}
                            </span>
                        </p>
                    </div>
                    <div className="shrink-0 text-end flex flex-col gap-1 max-w-[290px]">
                        <span className="font-bold text-[#1E365C] text-[17px] sm:text-[19px] 2xl:text-[20px]">
                            ${dueToday.toLocaleString()}
                        </span>
                        <span className="text-[12px] sm:text-[14px] 2xl:text-[16px] font-semibold text-[#8F8F8F]">
                            ${totalPrice.toLocaleString()} payable in total
                        </span>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-[#E4E5E7]" />

                {/* Subtotal */}
                <div className="flex justify-between items-center text-[15px] sm:text-[17px] 2xl:text-[20px] font-semibold text-[#8F8F8F]">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#1E365C]">
                        ${dueToday.toLocaleString()}
                    </span>
                </div>

                <div className="h-[1px] w-full bg-[#E4E5E7]" />

                {/* Due Today */}
                <div className="flex justify-between items-center font-semibold text-[15px] sm:text-[17px] 2xl:text-[20px]">
                    <span className="text-[#1E365C]">Due Today</span>
                    <span className="font-black text-[#E9482B] text-[17px] sm:text-[19px] 2xl:text-[20px]">
                        ${dueToday.toLocaleString()}
                    </span>
                </div>

                {/* Future Payments */}
                <div className="flex justify-between items-center font-semibold text-[15px] sm:text-[17px] 2xl:text-[20px]">
                    <span className="text-[#1E365C]">Future Payments</span>
                    <span className="font-black text-[#E9482B] text-[17px] sm:text-[19px] 2xl:text-[20px]">
                        ${futurePayments.toLocaleString()}
                    </span>
                </div>

                <div className="h-[1px] w-full bg-[#E4E5E7]" />

                {/* Payment Schedule Link & Security Badge */}
                <div className="flex flex-col items-center gap-[16px] sm:gap-[20px] pt-1">
                    <a
                        href="#terms"
                        className="underline decoration-solid text-[14px] sm:text-[16px] 2xl:text-[18px] leading-[22px] text-[#1E365C] font-normal hover:text-[#E9482B] transition-colors underline-offset-3"
                    >
                        Payment Terms and Schedule
                    </a>

                    <div className="flex items-center gap-[8px] sm:gap-[10px] rounded-[8px] bg-[#1AA9030D] font-semibold px-[12px] py-[6px] text-[13px] sm:text-[15px] 2xl:text-[16px] text-[#1AA903]">
                        <WalletSvg />
                        <span>Secure Checkout</span>
                    </div>
                </div>
            </div>
        </div>
    );
}