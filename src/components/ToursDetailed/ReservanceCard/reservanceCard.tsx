"use client";

import React, { useState } from "react";
import { DollarIcon } from "@/assets/icons";

export default function ReservanceCard() {
    const [selectedOption, setSelectedOption] = useState<string>("shared_active");
    const [selectedPayment, setSelectedPayment] = useState<string>("Deposit");
    const [count, setCount] = useState<number>(1);

    const handleIncrement = () => setCount((prev) => prev + 1);
    const handleDecrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="relative mt-[50px] sm:mt-[60px] rounded-[24px] mx-auto w-full max-w-[593px] bg-white shadow-[0px_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300">
            {/* Top Dollar Badge & Red Header */}
            <div className="relative flex flex-col items-center justify-center">
                <div className="absolute -top-[45px] sm:-top-[55px] z-10 h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] rounded-full bg-accent flex items-center justify-center shadow-lg">
                    <div className="scale-90 sm:scale-100 flex items-center justify-center">
                        <DollarIcon />
                    </div>
                </div>
                <div className="w-full text-center px-4 pt-12 pb-4 sm:pt-14 sm:pb-5 rounded-t-[24px] bg-accent text-[22px] sm:text-[28px] md:text-[32px] font-[900] leading-none tracking-wider uppercase text-white shadow-inner">
                    Reserve Now
                </div>
            </div>

            {/* Form Body */}
            <div className="p-5 sm:p-7 md:p-8 lg:p-9 relative w-full flex flex-col gap-6 sm:gap-7">
                {/* Options Block */}
                <div className="flex flex-col items-start gap-3 sm:gap-4 w-full">
                    <p className="font-semibold text-[16px] sm:text-[18px] text-gray-700">
                        Choose an Option:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                        {/* Option 1 - Sold */}
                        <div className="flex flex-row items-center justify-between p-3.5 sm:p-4 rounded-[16px] border border-red-200 bg-red-50/40 opacity-80 cursor-not-allowed">
                            <div className="flex flex-col gap-1">
                                <p className="font-medium text-[13px] sm:text-[14px] text-gray-600">Shared Room</p>
                                <p className="font-bold text-[18px] sm:text-[20px] text-accent">$3,798</p>
                            </div>
                            <span className="font-bold text-[14px] sm:text-[16px] uppercase tracking-wide text-red-600 bg-red-100 px-2.5 py-1 rounded-full">
                                Sold
                            </span>
                        </div>

                        {/* Option 2 - Available */}
                        <div
                            onClick={() => setSelectedOption("shared_active")}
                            className={`flex flex-row items-center justify-between p-3.5 sm:p-4 rounded-[16px] border-2 transition-all cursor-pointer ${selectedOption === "shared_active"
                                ? "border-primary bg-primary/[0.03] shadow-sm"
                                : "border-gray-200 hover:border-primary/50"
                                }`}
                        >
                            <div className="flex flex-col gap-1">
                                <p className="font-medium text-[13px] sm:text-[14px] text-gray-600">Shared Room</p>
                                <p className="font-bold text-[18px] sm:text-[20px] text-primary">$3,798</p>
                            </div>
                            <div className="flex items-center justify-center h-6 w-6 border-2 border-primary rounded-full">
                                {selectedOption === "shared_active" && (
                                    <div className="h-3 w-3 bg-primary rounded-full"></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Block */}
                <div className="flex flex-col items-start gap-3 sm:gap-4 w-full">
                    <p className="font-semibold text-[16px] sm:text-[18px] text-gray-700">Payment:</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                        {/* Deposit */}
                        <div
                            onClick={() => setSelectedPayment("Deposit")}
                            className={`flex flex-row items-center justify-between p-3.5 sm:p-4 rounded-[16px] border-2 transition-all cursor-pointer ${selectedPayment === "Deposit"
                                ? "border-primary bg-primary/[0.03] shadow-sm"
                                : "border-gray-200 hover:border-primary/40"
                                }`}
                        >
                            <p className="font-medium text-[14px] sm:text-[15px] text-gray-800">Pay Deposit</p>
                            <div className="flex items-center justify-center h-6 w-6 border-2 border-primary rounded-full">
                                {selectedPayment === "Deposit" && (
                                    <div className="h-3 w-3 bg-primary rounded-full"></div>
                                )}
                            </div>
                        </div>

                        {/* Full */}
                        <div
                            onClick={() => setSelectedPayment("Full")}
                            className={`flex flex-row items-center justify-between p-3.5 sm:p-4 rounded-[16px] border-2 transition-all cursor-pointer ${selectedPayment === "Full"
                                ? "border-primary bg-primary/[0.03] shadow-sm"
                                : "border-gray-200 hover:border-primary/40"
                                }`}
                        >
                            <p className="font-medium text-[14px] sm:text-[15px] text-gray-800">Pay Full Amount</p>
                            <div className="flex items-center justify-center h-6 w-6 border-2 border-primary rounded-full">
                                {selectedPayment === "Full" && (
                                    <div className="h-3 w-3 bg-primary rounded-full"></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Number of Persons & Actions */}
                <div className="flex flex-col items-start gap-3 sm:gap-4 w-full pt-1">
                    <p className="font-semibold text-[15px] sm:text-[17px] text-gray-700">
                        {selectedPayment === "Deposit" ? (
                            <>
                                Pay a deposit of <span className="text-primary font-bold">$500 per person</span>:
                            </>
                        ) : (
                            <>
                                Total amount: <span className="text-primary font-bold">${(3798 * count).toLocaleString()}</span>
                            </>
                        )}
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                        {/* Counter Selection */}
                        <div className="flex flex-row justify-between items-center px-4 py-3 sm:py-3.5 rounded-full border-2 border-gray-200 flex-1 bg-white">
                            <button
                                aria-label="Decrease quantity"
                                className="flex items-center justify-center h-8 w-8 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-xl font-bold"
                                onClick={handleDecrement}
                            >
                                -
                            </button>
                            <span className="text-center font-bold text-[18px] text-primary min-w-[30px]">
                                {count}
                            </span>
                            <button
                                aria-label="Increase quantity"
                                className="flex items-center justify-center h-8 w-8 text-accent hover:text-accent/80 hover:bg-red-50 rounded-full transition-colors cursor-pointer text-xl font-bold"
                                onClick={handleIncrement}
                            >
                                +
                            </button>
                        </div>

                        {/* Checkout Button */}
                        <button
                            type="button"
                            className="flex-1 py-3.5 sm:py-4 px-6 rounded-full bg-primary hover:bg-primary/90 active:scale-[0.98] text-white font-bold text-[16px] sm:text-[17px] shadow-md hover:shadow-lg transition-all duration-200 text-center flex items-center justify-center cursor-pointer"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
