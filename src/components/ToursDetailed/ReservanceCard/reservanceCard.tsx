"use client"
import React, { useState } from "react";
import Image from "next/image";
import { DollarIcon } from "@/assets/icons"
export default function TourHero() {
    const [selectedOption, setSelectedOption] = useState(false)
    const [selectedPayment, setSelectedPayment] = useState<string | null>("full")
    const [count, setCount] = useState<number>(1)
    let handleSelectedOption = () => {
        setSelectedOption((prev) => !prev)
    }
    let handleSelectedDeposit = () => {
        setSelectedPayment((payment) => payment = "Deposit")
    }
    let handleSelectedFull = () => {
        setSelectedPayment((payment) => payment = "Full")
    }
    let handleIncrement = () => {
        setCount((prev) => prev + 1)
    }
    let handleDecrement = () => {
        setCount((prev) => prev > 1 ? prev - 1 : 1)
    }
    return (
        <div className="relative rounded-[24px] mx-auto w-full max-w-[593px] max-h-[641px] shadow-[0px_40px_48px_-16px_#00000029]">
            <div className="relative flex flex-col items-center justify-center">
                <div className="absolute top-[-60px] z-[-10] h-[120px] w-[120px] rounded-full bg-accent flex justify-center pt-[15px]"><DollarIcon /></div>
                <p className="px-[163px] py-[24px]  rounded-tr-[24px] rounded-tl-[24px] rounded-br-[10px] rounded-bl-[10px] bg-accent text-[36px] font-[900] leading-[100%] tracking-[0%] uppercase text-white">Reserve Now</p>
            </div>
            <div className="px-[30px] py-[40px] relative w-full flex flex-col gap-[30px]">

                {/* Options Block */}
                <div className="flex flex-col items-start gap-[20px] w-full">
                    <p className="font-[600] text-[20px] leadin-[100%] tracking-[0%] text-grey">Choose an Option:</p>

                    {/* Options */}
                    <div className="flex flex-row items-center gap-[20px] w-full">

                        {/* Option 1 */}
                        <div className="flex w-full flex-row items-center justify-between px-[20px] py-[16px] rounded-[16px] border-[1px] border-accent ">
                            <div className="flex flex-col gap-[5px]">
                                <p className="font-[500] text-[16px] leading-[100%] tracking-[0%] text-mid">Shared Room</p>
                                <p className="font-[700] text-[24px] leading-[100%] tracking-[0%] text-accent">$3,798</p>
                            </div>
                            <div className="font-[700] text-[20px] leading-[100%] tracking-[0%] text-[#C60F13]">Sold</div>
                        </div>

                        {/* Option 2 */}
                        <div className="flex  w-full flex-row items-center justify-between px-[20px] py-[16px] rounded-[16px] border-[1px] border-primary ">
                            <div className="flex flex-col gap-[5px]">
                                <p className="font-[500] text-[16px] leading-[100%] tracking-[0%] text-mid">Shared Room</p>
                                <p className="font-[700] text-[24px] leading-[100%] tracking-[0%] text-primary">$3,798</p>
                            </div>
                            <div className="flex items-center justify-center h-[24px] w-[24px] border border-primary rounded-full cursor-pointer" onClick={handleSelectedOption}>
                                {selectedOption ? <div className="h-[16px] w-[16px] bg-primary rounded-full"></div> : ""}
                            </div>
                        </div>
                    </div>
                </div>


                {/* Payment Block */}
                <div className="flex flex-col items-start gap-[20px] w-full">
                    <p className="font-[600] text-[20px] leadin-[100%] tracking-[0%] text-grey">Payment:</p>

                    <div className="flex flex-row items-center gap-[20px] w-full">
                        {/* Payment Deposit block */}
                        <div className="flex w-full flex-row items-center justify-between px-[20px] py-[16px] rounded-[16px] border-[1px] border-border ">
                            <p className="font-[500] text-[14px] leading-[100%] tracking-[0%] text-mid">Pay Deposit</p>
                            <div className="flex items-center justify-center h-[24px] w-[24px] border border-primary rounded-full cursor-pointer" onClick={handleSelectedDeposit}>
                                {selectedPayment === "Deposit" ? <div className="h-[16px] w-[16px] bg-primary rounded-full"></div> : ""}
                            </div>
                        </div>
                        {/* Payment Full block */}
                        <div className="flex w-full flex-row items-center justify-between px-[20px] py-[16px] rounded-[16px] border-[1px] border-border ">
                            <p className="font-[500] text-[14px] leading-[100%] tracking-[0%] text-mid">Pay Deposit</p>
                            <div className="flex items-center justify-center h-[24px] w-[24px] border border-primary rounded-full cursor-pointer" onClick={handleSelectedFull}>
                                {selectedPayment === "Full" ? <div className="h-[16px] w-[16px] bg-primary rounded-full"></div> : ""}
                            </div>
                        </div>


                    </div>
                </div>

                {/* No of Person Selection */}
                <div className="flex flex-col items-start gap-[20px] w-full">
                    <p className="font-[600] text-[20px] leadin-[100%] tracking-[0%] text-grey">Pay a deposit of <span className="text-primary">$500 per person </span>:</p>

                    <div className="flex flex-row items-center gap-[136px] w-full">
                        {/* Counter Selection */}
                        <div className="flex flex-row justify-between w-full p-[20px] rounded-[30px] border-[2px] border-border " >
                            <button className="flex items-center jsutify-center h-[24px] w-[24px] cursor-pointer" onClick={handleDecrement}>
                                <span className={`h-[3px] w-[26px] origin-center rounded-full bg-mid transition-all duration-300`} />
                            </button>
                            <span className="text-center font-[500] text-[20px] leading-[100%] tracking-[0%] text-mid ">{count}</span>
                            {/* <input type="number" min={1} value={count} onChange={(e) => setCount(Number(e.target.value) < 1 ? 1 : Number(e.target.value))} className="text-center outline-none font-[500] text-[20px] leading-[100%] tracking-[0%] text-mid [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" /> */}
                            <button className="flex h-[24px] w-[24px] items-center justify-center cursor-pointer" onClick={handleIncrement}>
                                <span className="absolute h-[3px] w-[26px] origin-center rounded-full bg-accent transition-all duration-300" />
                                <span className="absolute h-[3px] w-[26px] origin-center rotate-90 rounded-full bg-accent transition-all duration-300" />
                            </button>
                        </div>

                        {/* Checkout Button */}
                        <div className="w-full  p-[20px] rounded-[30px] border-[2px] border-primary bg-primary cursor-pointer hover:scale-[1.05] transition-transform duration-400" >
                            <p className="font-[600] text-white text-[16px] h-[24px] leading-[100%] tracking-[0%] flex items-center justify-center">Checkout</p>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    );
}
