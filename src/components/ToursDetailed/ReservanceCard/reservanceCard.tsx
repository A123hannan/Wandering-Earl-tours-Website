"use client";

import React, { useState } from "react";
import { DollarIcon } from "@/assets/icons";

export default function ReservanceCard() {
    const [selectedOption, setSelectedOption] = useState<string>("single_supplement");
    const [selectedPayment, setSelectedPayment] = useState<string>("full");
    const [count, setCount] = useState<number>(1);

    const handleSelectedOption = (option: string) => {
        setSelectedOption(option);
    };

    const handleSelectedDeposit = () => {
        setSelectedPayment("deposit");
    };

    const handleSelectedFull = () => {
        setSelectedPayment("full");
    };

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setCount((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div className="relative mt-[55px] sm:mt-[65px] 2xl:mt-[60px] rounded-[24px] mx-auto w-full max-w-[593px] bg-white shadow-[0px_40px_48px_-16px_rgba(0,0,0,0.16)] transition-all duration-300">
            {/* Top Dollar Arch & Red Header */}
            <div className="relative flex flex-col items-center justify-center">
                {/* Protruding Semicircle Dome */}
                <div className="absolute -top-[48px] sm:-top-[58px] z-0 h-[96px] w-[96px] sm:h-[116px] sm:w-[116px] rounded-full bg-accent flex justify-center pt-2.5 sm:pt-2.5">
                    <div className="text-white scale-75 sm:scale-85 origin-center flex items-start justify-center">
                        <DollarIcon />
                    </div>
                </div>

                {/* Main Red Banner */}
                <p className="relative z-10 w-full text-center px-4 py-3.5 sm:py-4 2xl:py-[22px] rounded-tr-[24px] rounded-tl-[24px] rounded-br-[10px] rounded-bl-[10px] bg-accent text-[22px] sm:text-[28px] md:text-[32px] 2xl:text-[36px] font-[900] leading-none uppercase text-white whitespace-nowrap tracking-wide">
                    Reserve Now
                </p>
            </div>

            {/* Card Content Body */}
            <div className="p-5 sm:p-7 md:p-8 2xl:px-[30px] 2xl:py-[40px] relative w-full flex flex-col gap-5 sm:gap-6 2xl:gap-[30px]">
                {/* Options Block */}
                <div className="flex flex-col items-start gap-3 sm:gap-4 2xl:gap-[20px] w-full">
                    <p className="font-[600] text-[17px] sm:text-[19px] 2xl:text-[20px] leading-none text-grey">
                        Choose an Option:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 2xl:gap-[20px] w-full">
                        {/* Option 1 - Shared Room (Sold) */}
                        <div className="flex w-full flex-row items-center justify-between px-3.5 sm:px-4 2xl:px-[20px] py-3 sm:py-3.5 2xl:py-[16px] rounded-[16px] border-[1px] border-accent bg-white">
                            <div className="flex flex-col gap-1">
                                <p className="font-[500] text-[13px] sm:text-[15px] 2xl:text-[16px] leading-none text-mid">
                                    Shared Room
                                </p>
                                <p className="font-[700] text-[19px] sm:text-[22px] 2xl:text-[24px] leading-none text-accent">
                                    $3,798
                                </p>
                            </div>
                            <div className="font-[700] text-[16px] sm:text-[18px] 2xl:text-[20px] leading-none text-[#C60F13] shrink-0">
                                Sold
                            </div>
                        </div>

                        {/* Option 2 - Single Supplement (Selectable) */}
                        <div
                            onClick={() => handleSelectedOption("single_supplement")}
                            className={`flex w-full flex-row items-center justify-between px-3.5 sm:px-4 2xl:px-[20px] py-3 sm:py-3.5 2xl:py-[16px] rounded-[16px] border-[1px] bg-white cursor-pointer transition-all ${selectedOption === "single_supplement"
                                ? "border-primary shadow-sm"
                                : "border-gray-300 hover:border-primary/50"
                                }`}
                        >
                            <div className="flex flex-col gap-1">
                                <p className="font-[500] text-[13px] sm:text-[15px] 2xl:text-[16px] leading-none text-mid">
                                    Single Supplement
                                </p>
                                <p className="font-[700] text-[19px] sm:text-[22px] 2xl:text-[24px] leading-none text-primary">
                                    $4,445
                                </p>
                            </div>
                            <div className="flex items-center justify-center h-[22px] w-[22px] sm:h-[24px] sm:w-[24px] border border-primary rounded-full shrink-0">
                                {selectedOption === "single_supplement" && (
                                    <div className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] bg-primary rounded-full"></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Block */}
                <div className="flex flex-col items-start gap-3 sm:gap-4 2xl:gap-[20px] w-full">
                    <p className="font-[600] text-[17px] sm:text-[19px] 2xl:text-[20px] leading-none text-grey">
                        Payment:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 2xl:gap-[20px] w-full">
                        {/* Deposit */}
                        <div
                            onClick={handleSelectedDeposit}
                            className={`flex w-full flex-row items-center justify-between px-3.5 sm:px-4 2xl:px-[20px] py-3 sm:py-3.5 2xl:py-[16px] rounded-[16px] border-[1px] bg-white cursor-pointer transition-all ${selectedPayment === "deposit"
                                ? "border-primary shadow-sm"
                                : "border-border hover:border-primary/50"
                                }`}
                        >
                            <p className="font-[500] text-[13px] sm:text-[14px] 2xl:text-[15px] leading-none text-mid">
                                Pay Deposit
                            </p>
                            <div className="flex items-center justify-center h-[22px] w-[22px] sm:h-[24px] sm:w-[24px] border border-primary rounded-full shrink-0">
                                {selectedPayment === "deposit" && (
                                    <div className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] bg-primary rounded-full"></div>
                                )}
                            </div>
                        </div>

                        {/* Pay in Full */}
                        <div
                            onClick={handleSelectedFull}
                            className={`flex w-full flex-row items-center justify-between px-3.5 sm:px-4 2xl:px-[20px] py-3 sm:py-3.5 2xl:py-[16px] rounded-[16px] border-[1px] bg-white cursor-pointer transition-all ${selectedPayment === "full"
                                ? "border-primary shadow-sm"
                                : "border-border hover:border-primary/50"
                                }`}
                        >
                            <p className="font-[500] text-[13px] sm:text-[14px] 2xl:text-[15px] leading-none text-mid">
                                Pay in Full
                            </p>
                            <div className="flex items-center justify-center h-[22px] w-[22px] sm:h-[24px] sm:w-[24px] border border-primary rounded-full shrink-0">
                                {selectedPayment === "full" && (
                                    <div className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] bg-primary rounded-full"></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Counter & Checkout */}
                <div className="flex flex-col items-start gap-3 sm:gap-4 2xl:gap-[20px] w-full pt-1">
                    <p className="font-[600] text-[15px] sm:text-[18px] 2xl:text-[20px] leading-tight text-grey">
                        {selectedPayment === "deposit" ? (
                            <>
                                Pay a deposit of <span className="text-primary font-bold">$500 per person</span>:
                            </>
                        ) : (
                            <>
                                Total amount: <span className="text-primary font-bold">${(4445 * count).toLocaleString()}</span>
                            </>
                        )}
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 2xl:gap-6 w-full">
                        {/* Counter Selection */}
                        <div className="flex flex-row justify-between items-center px-5 py-3 sm:py-3.5 2xl:p-[20px] rounded-[30px] border-[2px] border-border bg-white flex-1">
                            <button
                                type="button"
                                aria-label="Decrease quantity"
                                className="flex items-center justify-center h-[24px] w-[24px] cursor-pointer text-mid hover:text-gray-900"
                                onClick={handleDecrement}
                            >
                                <span className="h-[3px] w-[20px] sm:w-[24px] origin-center rounded-full bg-mid transition-all duration-300" />
                            </button>
                            <span className="text-center font-[500] text-[18px] sm:text-[20px] leading-none text-mid min-w-[30px]">
                                {count}
                            </span>
                            <button
                                type="button"
                                aria-label="Increase quantity"
                                className="flex h-[24px] w-[24px] items-center justify-center cursor-pointer relative"
                                onClick={handleIncrement}
                            >
                                <span className="absolute h-[3px] w-[20px] sm:w-[24px] origin-center rounded-full bg-accent transition-all duration-300" />
                                <span className="absolute h-[3px] w-[20px] sm:w-[24px] origin-center rotate-90 rounded-full bg-accent transition-all duration-300" />
                            </button>
                        </div>

                        {/* Checkout Button */}
                        <button
                            type="button"
                            className="flex-1 py-3.5 sm:py-4 2xl:p-[20px] rounded-[30px] bg-primary hover:bg-[#162844] active:scale-[0.98] text-white font-[600] text-[16px] leading-none shadow-md transition-all duration-200 text-center flex items-center justify-center cursor-pointer"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}