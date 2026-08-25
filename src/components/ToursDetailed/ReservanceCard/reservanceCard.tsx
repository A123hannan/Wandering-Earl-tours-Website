"use client";

import React, { useState } from "react";
import { DollarIcon } from "@/assets/icons";

export default function ReservanceCard() {
    const [selectedOption, setSelectedOption] = useState<boolean>(true);
    const [selectedPayment, setSelectedPayment] = useState<string>("full");
    const [count, setCount] = useState<number>(1);

    const handleSelectedOption = () => {
        setSelectedOption((prev) => !prev);
    };

    const handleSelectedDeposit = () => {
        setSelectedPayment("Deposit");
    };

    const handleSelectedFull = () => {
        setSelectedPayment("Full");
    };

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setCount((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div className="relative mt-[60px] rounded-[24px] mx-auto w-full max-w-[593px] bg-white shadow-[0px_40px_48px_-16px_rgba(0,0,0,0.16)]">
            {/* Top Dollar Arch & Red Header */}
            <div className="relative flex flex-col items-center justify-center">
                <div className="absolute -top-[55px] sm:-top-[60px] z-0 h-[110px] w-[110px] sm:h-[120px] sm:w-[120px] rounded-full bg-accent flex justify-center pt-[14px] sm:pt-[16px]">
                    <div className="text-white scale-90 sm:scale-100">
                        <DollarIcon />
                    </div>
                </div>
                <p className="relative z-10 w-full text-center px-4 py-4 sm:py-[24px] rounded-tr-[24px] rounded-tl-[24px] rounded-br-[10px] rounded-bl-[10px] bg-accent text-[26px] sm:text-[32px] md:text-[36px] font-[900] leading-[100%] uppercase text-white">
                    Reserve Now
                </p>
            </div>

            <div className="px-5 py-6 sm:px-[30px] sm:py-[40px] relative w-full flex flex-col gap-[24px] sm:gap-[30px]">
                {/* Options Block */}
                <div className="flex flex-col items-start gap-[16px] sm:gap-[20px] w-full">
                    <p className="font-[600] text-[18px] sm:text-[20px] leading-[100%] text-grey">
                        Choose an Option:
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-[20px] w-full">
                        {/* Option 1 - Sold */}
                        <div className="flex w-full flex-row items-center justify-between px-[16px] sm:px-[20px] py-[14px] sm:py-[16px] rounded-[16px] border-[1px] border-accent bg-white">
                            <div className="flex flex-col gap-[5px]">
                                <p className="font-[500] text-[14px] sm:text-[16px] leading-[100%] text-mid">
                                    Shared Room
                                </p>
                                <p className="font-[700] text-[20px] sm:text-[24px] leading-[100%] text-accent">
                                    $3,798
                                </p>
                            </div>
                            <div className="font-[700] text-[18px] sm:text-[20px] leading-[100%] text-[#C60F13]">
                                Sold
                            </div>
                        </div>

                        {/* Option 2 - Single Supplement / Selectable */}
                        <div
                            onClick={handleSelectedOption}
                            className="flex w-full flex-row items-center justify-between px-[16px] sm:px-[20px] py-[14px] sm:py-[16px] rounded-[16px] border-[1px] border-primary bg-white cursor-pointer"
                        >
                            <div className="flex flex-col gap-[5px]">
                                <p className="font-[500] text-[14px] sm:text-[16px] leading-[100%] text-mid">
                                    Single Supplement
                                </p>
                                <p className="font-[700] text-[20px] sm:text-[24px] leading-[100%] text-primary">
                                    $4,445
                                </p>
                            </div>
                            <div className="flex items-center justify-center h-[24px] w-[24px] border border-primary rounded-full shrink-0">
                                {selectedOption ? (
                                    <div className="h-[14px] w-[14px] bg-primary rounded-full"></div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Block */}
                <div className="flex flex-col items-start gap-[16px] sm:gap-[20px] w-full">
                    <p className="font-[600] text-[18px] sm:text-[20px] leading-[100%] text-grey">
                        Payment:
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-[20px] w-full">
                        {/* Payment Deposit */}
                        <div
                            onClick={handleSelectedDeposit}
                            className="flex w-full flex-row items-center justify-between px-[16px] sm:px-[20px] py-[14px] sm:py-[16px] rounded-[16px] border-[1px] border-border bg-white cursor-pointer"
                        >
                            <p className="font-[500] text-[14px] sm:text-[15px] leading-[100%] text-mid">
                                Pay Deposit
                            </p>
                            <div className="flex items-center justify-center h-[24px] w-[24px] border border-primary rounded-full shrink-0">
                                {selectedPayment === "Deposit" ? (
                                    <div className="h-[14px] w-[14px] bg-primary rounded-full"></div>
                                ) : null}
                            </div>
                        </div>

                        {/* Payment Full */}
                        <div
                            onClick={handleSelectedFull}
                            className="flex w-full flex-row items-center justify-between px-[16px] sm:px-[20px] py-[14px] sm:py-[16px] rounded-[16px] border-[1px] border-border bg-white cursor-pointer"
                        >
                            <p className="font-[500] text-[14px] sm:text-[15px] leading-[100%] text-mid">
                                Pay in Full
                            </p>
                            <div className="flex items-center justify-center h-[24px] w-[24px] border border-primary rounded-full shrink-0">
                                {selectedPayment === "Full" || selectedPayment === "full" ? (
                                    <div className="h-[14px] w-[14px] bg-primary rounded-full"></div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>

                {/* No of Person Selection */}
                <div className="flex flex-col items-start gap-[16px] sm:gap-[20px] w-full">
                    <p className="font-[600] text-[16px] sm:text-[20px] leading-[130%] sm:leading-[100%] text-grey">
                        Pay a deposit of <span className="text-primary font-bold">$500 per person </span>:
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
                        {/* Counter Selection */}
                        <div className="flex flex-row justify-between items-center w-full p-[14px] sm:p-[20px] rounded-[30px] border-[2px] border-border bg-white">
                            <button
                                type="button"
                                aria-label="Decrease"
                                className="flex items-center justify-center h-[24px] w-[24px] cursor-pointer"
                                onClick={handleDecrement}
                            >
                                <span className="h-[3px] w-[22px] origin-center rounded-full bg-mid transition-all duration-300" />
                            </button>
                            <span className="text-center font-[500] text-[18px] sm:text-[20px] leading-[100%] text-mid">
                                {count}
                            </span>
                            <button
                                type="button"
                                aria-label="Increase"
                                className="flex h-[24px] w-[24px] items-center justify-center cursor-pointer relative"
                                onClick={handleIncrement}
                            >
                                <span className="absolute h-[3px] w-[22px] origin-center rounded-full bg-accent transition-all duration-300" />
                                <span className="absolute h-[3px] w-[22px] origin-center rotate-90 rounded-full bg-accent transition-all duration-300" />
                            </button>
                        </div>

                        {/* Checkout Button */}
                        <div className="w-full p-[14px] sm:p-[20px] rounded-[30px] border-[2px] border-primary bg-primary cursor-pointer hover:scale-[1.03] transition-transform duration-300 text-center">
                            <p className="font-[600] text-white text-[16px] leading-[100%] flex items-center justify-center">
                                Checkout
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}