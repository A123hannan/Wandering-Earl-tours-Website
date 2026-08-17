import React from "react";
import Image from "next/image";

export default function PastMainComponent() {
    return (
        <section className="pt-[200px] flex flex-col items-center justify-start gap-[80px] page-container bg-primary">
            <div className="">
                <p className="font-[900] text-[40px] leading-[100%] tracking-[0%] uppercase text-center text-white">If you have any questions, simply get in touch. We’re here to help and we always reply quickly.</p>
            </div>
            <div className="">
                <div className="flex flex-col lg:flex-row gap-[80px]">
                    <div className="flex flex-col gap-[16px] w-full">
                        <p className="font-[400] text-[20px] leading-[100%] tracking-[0%] text-center text-white">First Name</p>
                        <input type="text" className="border border-[#FFFFFF3D] rounded-[12px] p-[20px]" placeholder="write"></input>
                    </div>
                </div>
            </div>
        </section>
    );
}